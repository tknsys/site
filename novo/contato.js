document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const messageContainer = document.createElement('div');
    messageContainer.className = 'message';

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Coletando os dados do formulário
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        console.log('Dados enviados:', data); // Verifique os dados

        try {
            // Enviando dados para o endpoint
            const response = await fetch('https://hook.us2.make.com/nk91o3o7hup4aov99rcyi4k9zi1hj4ba', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar a mensagem. Tente novamente mais tarde.');
            }

            // Exibindo mensagem de sucesso
            messageContainer.innerText = 'Recebemos sua mensagem! Logo retornaremos.';
            messageContainer.style.color = 'green';
        } catch (error) {
            messageContainer.innerText = error.message;
            messageContainer.style.color = 'red';
        }

        // Adicionando a mensagem ao formulário
        form.appendChild(messageContainer);
        form.reset(); // Limpa o formulário após o envio
    });
});
