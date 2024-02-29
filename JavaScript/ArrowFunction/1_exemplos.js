
// Função de Flecha Simples:

const saudacao = () => {
    return "Olá, mundo!";
};

console.log(saudacao()); // Saída: "Olá, mundo!"

// Função de Flecha com Parâmetros:

const soma = (a, b) => {
    return a + b;
};

console.log(soma(3, 4)); // Saída: 7

// Função de Flecha de Uma Linha (sem chaves):

const quadrado = x => x * x;
console.log(quadrado(5)); // Saída: 25

// Função de Flecha como Callback:

const numeros = [1, 2, 3, 4, 5];
const quadrados = numeros.map(x => x * x);

console.log(quadrados); // Saída: [1, 4, 9, 16, 25]
