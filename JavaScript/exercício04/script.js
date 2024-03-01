
function calcularMediaDaTurma(listaDeAlunos){
    for ( aluno in listaDeAlunos ) {
        calcularMedia(aluno.notas)
    }
}

function calcularMedia(listaNumeros) {
    
}

// Como pedir pro usuário adicionar valores

var listadeAlunos = []

var novoAluno//true or false

novoAluno = true

while (novoAluno) {
    var nomeDoAluno = window.prompt("Qual o nome do aluno?")
    var numeroDeNotas = window.prompt("Quantas notas o aluno tem?") 
    var notas = []
    for (let i = 0; i < numeroDeNotas; i++) {
        var nota = window.prompt("Insira a nota " + i+1 )
        notas.push(nota)
    }

    listadeAlunos.push({ nome: nomeDoAluno, notas: notas })

    novoAluno = window.confirm("Adicionar nota para mais um aluno?")
    
}

window.alert("A média dos alunos é ", carculaMediaDaTurma(listadeAlunos))


/*

[
  { nome: "João", notas: [8, 7, 6, 9] },
  { nome: "Maria", notas: [5, 6, 7, 4] },
  { nome: "Pedro", notas: [9, 9, 8, 7] }
];

*/