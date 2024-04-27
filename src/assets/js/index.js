/**
 * Return file JSON and insert elements
 */
document.addEventListener('DOMContentLoaded', function () {
    fetch('src/assets/json/plays.json')
        .then(response => response.json())
        .then(data => {
            const playsItems = document.querySelector('.plays');
            data.forEach(item => {
                let playsHtml = `
                    <div>
                        <div class="mb-1 bg-blue-500 flex justify-between items-center px-10 py-2 cursor-pointer toggle">
                            <span class="font-bold">${item.name}</span>
                        </div>
                    <div class="mt-1 mb-8 flex flex-col">
                `;

                item.plays.forEach(play => {
                    playsHtml += `
                        <a href="${play.url}" class="hover:bg-blue-950 px-10 py-2">${play.name}</a>
                    `;
                });

                playsHtml += `  
                    </div>
                    </div>
                `;

                playsItems.innerHTML += playsHtml;
            });
        })
        .catch(error => console.error('Erreur lors du chargement du fichier JSON:', error));
});