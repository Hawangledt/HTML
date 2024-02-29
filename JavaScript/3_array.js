// Criando um array de números


// Acessando elementos do array
// console.log(numeros[0]); // Saída: 10
// console.log(numeros[2]); // Saída: 30

// Modificando elementos do array
// numeros[1] = [10, 25, 30, 40, 50];
// console.log(numeros); // Saída: [10, 25, 30, 40, 50]

// Adicionando elementos ao array
// numeros.push(60);
// console.log(numeros); // Saída: [10, 25, 30, 40, 50, 60]

// // Removendo elementos do array
// numeros.pop();
// console.log(numeros); // Saída: [10, 25, 30, 40, 50]


let numeros;

numeros = [10,20,30,40,50]

numeros[0] = numeros[0] + 1
numeros[1] = numeros[1] + 1
numeros[2] = numeros[2] + 1


// Laços de Repetição

for (let i = 0; i < numeros.length() ; i++) {
    console.log("Indice atual: " + i);
    numeros[i] = numeros[i] + 1
}

for (numero in numeros) {
    console.log("Indice atual: " + numero);
    numeros[i] = numeros[numero] + 1
}


console.log("Saida final: " + numeros)