document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastroForm');
    const nomeInput = document.getElementById('nome');
    const nomeError = document.getElementById('nomeError');
    const mensagemDiv = document.getElementById('mensagem');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Limpa mensagens de erro anteriores
        nomeError.textContent = '';
        mensagemDiv.textContent = '';

        // Obtem os valores dos campos do formulário
        const nome = nomeInput.value.trim();

        // Verifica se os campos obrigatórios estão preenchidos
        if (nome === '') {
            nomeError.textContent = 'Por favor, digite seu nome.';
            return; // Impede o envio do formulário se o nome estiver vazio
        }

        // Envio bem-sucedido do formulário
        mensagemDiv.textContent = 'Formulário enviado com sucesso!';
        form.reset(); // Limpa o formulário
    });
});
