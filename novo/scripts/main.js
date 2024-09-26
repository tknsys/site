document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    const contentContainer = document.getElementById('content');

    links.forEach(link => {
        link.addEventListener('click', async (event) => {
            event.preventDefault();

            // Mostra a sobreposição
            document.querySelector('.overlay').style.display = 'block';

            const page = event.target.getAttribute('data-page');
            await loadPage(page);

            // Esconde a sobreposição
            document.querySelector('.overlay').style.display = 'none';
        });
    });

    async function loadPage(page) {
        const response = await fetch(`pages/${page}.html`);
        if (!response.ok) {
            throw new Error('Erro ao carregar a página. Tente novamente mais tarde.');
        }
        const content = await response.text();
        const activeContent = contentContainer.querySelector('.content.active');
        if (activeContent) {
            activeContent.classList.remove('active');
        }
        const newContent = document.createElement('div');
        newContent.className = 'content active';
        newContent.innerHTML = content;
        contentContainer.appendChild(newContent);
    }
});
