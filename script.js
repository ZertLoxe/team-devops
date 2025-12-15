document.addEventListener('DOMContentLoaded', function() {
    fetch('membres.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de chargement du fichier JSON');
            }
            return response.json();
        })
        .then(data => {
            const container = document.getElementById('noms');
            container.innerHTML = '';

            data.forEach(membre => {
                const membreDiv = document.createElement('div');
                membreDiv.classList.add('membre');

                const nomPrenom = document.createElement('h3');
                nomPrenom.textContent = `${membre.prenom} ${membre.nom}`;

                const role = document.createElement('p');
                role.textContent = `Rôle : ${membre.role}`;

                membreDiv.appendChild(nomPrenom);
                membreDiv.appendChild(role);
                container.appendChild(membreDiv);
            });
        })
        .catch(error => {
            console.error('Erreur:', error);
            document.getElementById('noms').innerHTML = '<p>Impossible de charger les membres.</p>';
        });
});