document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;

    // Création de l'objet FormData pour envoyer les données
    let formData = new FormData();
    formData.append("nom", nom);
    formData.append("prenom", prenom);

    fetch("https://www.wkjimvbsxr.wuaze.com/ajout.php", {
        method: "POST",
        body: formData,
        mode: 'no-cors'
    })
    .then(response => {
        // Note : Vous ne pouvez pas lire le contenu de la réponse dans le mode 'no-cors'
        let messageDiv = document.getElementById("message");
        messageDiv.innerHTML = "<p style='color: green;'>Données envoyées. Aucune information de réponse disponible en raison du mode no-cors.</p>";
    })
    .catch(error => {
        console.error('Erreur:', error);
        document.getElementById("message").innerHTML = "<p style='color: red;'>Une erreur est survenue lors de l'envoi des données.</p>";
    });
});
