const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 3000; // Choisis un port de ton choix

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
