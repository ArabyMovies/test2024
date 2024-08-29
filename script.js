const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Récupération des valeurs des champs du formulaire
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;

    // Envoi de la requête POST à l'API
    fetch('https://wkjimvbsxr.wuaze.com/ajout.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded' // Assurez-vous que le serveur accepte ce Content-Type
        },
        body: `nom=${encodeURIComponent(nom)}&prenom=${encodeURIComponent(prenom)}` // Encodage pour éviter les problèmes de caractères spéciaux
    })
    .then(response => {
        // Vérifier si la réponse est JSON
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }
        return response.json(); // Traiter la réponse comme JSON
    })
    .then(data => {
        // Afficher la réponse du serveur
        console.log(data);
        alert(data.message || 'Opération réussie');
    })
    .catch(error => {
        // Afficher les erreurs éventuelles
        console.error('Erreur:', error);
        alert('Une erreur est survenue lors de la requête.');
    });
});
