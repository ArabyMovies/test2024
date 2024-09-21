async function fetchUrls() {
    try {
        const response = await fetch('https://wkjimvbsxr.wuaze.com/data.json'); // Remplace par l'URL de ton API
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
