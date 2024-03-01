
function calcularMediaDaTurma(listaDeAlunos){
    let somatorioDeNotas = 0
    for ( a in listaDeAlunos ) {
        aluno = listaDeAlunos[a]
        let mediaDoAluno = calcularMedia(aluno.notas)
        console.log("Media do Aluno " + aluno.nome + " é " + mediaDoAluno)
        somatorioDeNotas += mediaDoAluno
    }
    let mediaDaTurma = somatorioDeNotas/listaDeAlunos.length
    return mediaDaTurma
}

function calcularMedia(listaNumeros) {
    console.log(listaNumeros)
    let soma = 0
    for (numero in listaNumeros) {
        soma += listaNumeros[numero]
    }

    let media = soma / listaNumeros.length
    return media
}

// Como pedir pro usuário adicionar valores

var listaDeAlunos = []

var novoAluno //true or false

novoAluno = true

while (novoAluno) {
    var nomeDoAluno = window.prompt("Qual o nome do aluno?")
    var numeroDeNotas = parseInt(window.prompt("Quantas notas o aluno tem?"))
    var notas = []
    for (let i = 0; i < numeroDeNotas; i++) {
        var nota = parseFloat(window.prompt("Insira a nota " + (i + 1) ))
        notas.push(nota)
    }

    listaDeAlunos.push({ nome: nomeDoAluno, notas: notas })

    novoAluno = window.confirm("Adicionar nota para mais um aluno?")
    
}

window.alert("A média dos alunos é " + calcularMediaDaTurma(listaDeAlunos))


/*

[
  { nome: "João", notas: [8, 7, 6, 9] },
  { nome: "Maria", notas: [5, 6, 7, 4] },
  { nome: "Pedro", notas: [9, 9, 8, 7] }
];

*/