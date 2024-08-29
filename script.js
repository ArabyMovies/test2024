const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;

    fetch('https://www.wkjimvbsxr.wuaze.com/ajout.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `nom=${nom}&prenom=${prenom}`
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
});
