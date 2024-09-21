const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 3306; // Choisissez un port de votre choix

// Middleware
app.use(cors());
app.use(express.json());

// Configurer la connexion à la base de données
const connection = mysql.createConnection({
    host: 'sql203.infinityfree.com',
    user: 'if0_37189728',
    password: 'aJlKVSIZMG',
    database: 'if0_37189728_TEST'
});

// Établir la connexion
connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion: ' + err.stack);
        return;
    }
    console.log('Connecté en tant que id ' + connection.threadId);
});

// Route pour récupérer les URLs
app.get('/urls', (req, res) => {
    connection.query('SELECT * FROM TEST', (error, results) => {
        if (error) return res.status(500).send(error);
        res.json(results);
    });
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
});

// Code côté client pour récupérer et afficher les URLs
async function fetchUrls() {
    try {
        const response = await fetch('http://localhost:3000/urls'); // Assurez-vous d'utiliser le bon port
        const data = await response.json();

        const urlList = document.getElementById('url-list');
        urlList.innerHTML = ''; // Effacer le contenu précédent

        data.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.url;
            urlList.appendChild(li);
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des URLs:', error);
    }
}

// Appeler la fonction pour récupérer les URLs à la charge de la page
fetchUrls();
