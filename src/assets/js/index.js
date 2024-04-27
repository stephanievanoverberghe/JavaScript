/**
 * Return file JSON
 * Insert elements
 * Toggle elements
 */
document.addEventListener('DOMContentLoaded', function () {
    fetch('src/assets/json/plays.json')
        .then(response => response.json())
        .then(data => {
            const playsItems = document.querySelector('.plays');
            let htmlContent = '';
            data.forEach((item, index) => {
                let hiddenClass = index === 0 ? '' : 'hidden';
                let playsHtml = `
                    <div>
                        <div class="mb-1 bg-blue-500 flex justify-between items-center px-10 py-2 cursor-pointer toggle" data-toggle="${index}">
                            <span class="font-bold">${item.name}</span>
                            <i class="fa-solid fa-chevron-down rotate-180 transition-transform duration-300 ease-in-out toggle-icon"></i>
                        </div>
                        <div class="${hiddenClass} plays-content-${index}">
                            <div class="mt-1 mb-8 flex flex-col">
                `;

                item.plays.forEach(play => {
                    playsHtml += `<a href="${play.url}" class="hover:bg-blue-950 px-10 py-2">${play.name}</a>`;
                });

                playsHtml += `</div></div></div>`;
                htmlContent += playsHtml;
            });

            playsItems.innerHTML = htmlContent;

            /**
             * ADD TOGGLE ELEMENTS
             */
            document.querySelectorAll('.toggle').forEach(toggle => {
                toggle.addEventListener('click', function () {
                    const index = this.getAttribute('data-toggle');
                    const contentDiv = document.querySelector(`.plays-content-${index}`);
                    const icon = this.querySelector('.toggle-icon');
                    if (contentDiv) {
                        contentDiv.classList.toggle('hidden');
                        icon.classList.toggle('rotate');
                    } else {
                        console.error('Element not found:', `.plays-content-${index}`);
                    }
                });
            });
        })
        .catch(error => console.error('Erreur lors du chargement du fichier JSON:', error));
});