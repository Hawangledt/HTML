const form = document.getElementById('saudacaoForm');
const nomeInput = document.getElementById('nomeInput');
const mensagemDiv = document.getElementById('mensagem');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o recarregamento da página após o envio do formulário
    const nome = nomeInput.value;
    if (nome.trim() !== '') { // Verifica se o campo de nome não está vazio
        mensagemDiv.textContent = `Olá, ${nome}! Bem-vindo(a)!`;
    } else {
        mensagemDiv.textContent = 'Por favor, digite seu nome.';
    }
});
