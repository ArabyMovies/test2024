<?php
header('Content-Type: application/json');

// Connexion à la base de données
$servername = "sql203.infinityfree.com";
$username = "if0_37189728";
$password = "aJlKVSIZMG";
$dbname = "if0_37189728_TEST"; // Remplacez par le nom de votre base de données

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Erreur de connexion à la base de données: " . $conn->connect_error]));
}

$nom = $_POST['nom'];
$prenom = $_POST['prenom'];

if (empty($nom) || empty($prenom)) {
    echo json_encode(["success" => false, "message" => "Tous les champs sont obligatoires."]);
    exit;
}

// Insertion dans la base de données
$sql = "INSERT INTO TEST (nom, prenom) VALUES ('$nom', '$prenom')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true, "message" => "Utilisateur ajouté avec succès."]);
} else {
    echo json_encode(["success" => false, "message" => "Erreur: " . $conn->error]);
}

$conn->close();
?>
