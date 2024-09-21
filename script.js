const mysql = require('mysql');

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

// Exemple de requête (récupérer des données de la table TEST)
connection.query('SELECT * FROM TEST', (error, results) => {
    if (error) throw error;
    console.log(results);
});

// Fermer la connexion
connection.end((err) => {
    if (err) {
        return console.log('Erreur lors de la fermeture de la connexion : ' + err.message);
    }
    console.log('Connexion fermée.');
});
