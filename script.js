const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;

    fetch('https://download1586.mediafire.com/zv1iuub0ok8gAZgwr1H2ktxDCpiYG_k9pLEU2pXNObYVrNldxsFZAzlTviNRTaKf6c1UhP4y-IHM3BfnBOl1vXoVQgco2ttybDwO20UegH2pJrgJ-kcSdsIElOC15ns90T_ImqtrGu0_1I1Vl9uPfVfAc19BzUffc2i97uGeKuxEa3o/z0wgd02nem406x0/ajout.php', {
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
