document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;

    // Création de l'objet FormData pour envoyer les données
    let formData = new FormData();
    formData.append("nom", nom);
    formData.append("prenom", prenom);

    fetch("https://arabymovies.github.io/ajout.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        let messageDiv = document.getElementById("message");
        if (data.success) {
            messageDiv.innerHTML = "<p style='color: green;'>Utilisateur ajouté avec succès.</p>";
        } else {
            messageDiv.innerHTML = "<p style='color: red;'>Erreur: " + data.message + "</p>";
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
        document.getElementById("message").innerHTML = "<p style='color: red;'>Une erreur est survenue lors de l'ajout de l'utilisateur.</p>";
    });
});
