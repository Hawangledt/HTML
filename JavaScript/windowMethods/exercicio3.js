// Solicita ao usuário que insira as notas dos alunos
let notas = [];
for (let i = 1; i <= 4; i++) {
    let nota = parseFloat(prompt("Digite a nota do aluno " + i + ":"));
    notas.push(nota);
}

// Calcula a média das notas
let soma = 0;
for (let nota of notas) {
    soma += nota;
}
let media = soma / notas.length;

// Exibe o resultado da média das notas
console.log("A média das notas é: " + media.toFixed(2));
