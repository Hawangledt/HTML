// Solicita ao usuário que insira seu peso (em kg)
let peso = parseFloat(prompt("Digite seu peso (em kg):"));

// Solicita ao usuário que insira sua altura (em metros)
let altura = parseFloat(prompt("Digite sua altura (em metros):"));

// Calcula o IMC (Índice de Massa Corporal)
let imc = peso / (altura * altura);

// Exibe o resultado do cálculo do IMC
console.log("Seu IMC é: " + imc.toFixed(2));
