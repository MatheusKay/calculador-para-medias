class Aluno {
    constructor(nomeDoAluno, notaDoAluno) {
        this.nome = nomeDoAluno
        this.nota = notaDoAluno
    }
}

const form2 = document.getElementById('form2')
const arrayDasNotas = []
const arrayDasAtividades = []

form2.addEventListener('click', function(e) {

    e.preventDefault();
    
    const quantidadeDeMaterias = document.getElementById('quantidade_materias').value;
    const tabelaDeMedias = document.getElementById('seção_da_tabela')
    const nomeDosAluno = document.getElementById('nome_do_aluno')
    const homeAlunos = document.getElementById('home-alunos')
    const homeMaterias = document.getElementById('home-materia')

    for (let j = 1; j <= quantidadeDeMaterias; j++) {

        const inputsDeNota = document.getElementById(`nota_do_aluno${j}`)
        const atividades = document.getElementById(`atividade${j}`)
        arrayDasNotas.push(inputsDeNota)
        arrayDasAtividades.push(atividades)
        console.log(arrayDasNotas)

    }
    
    arrayDasNotas.forEach(inputsDeNota => {
        inputsDeNota.classList.remove('nota_aluno')
        nomeDosAluno.classList.remove('nota_aluno')
        
    })
    
    
    arrayDasAtividades.forEach(atividades => {
        atividades.classList.remove('nota_aluno')
        homeAlunos.classList.remove('nota_aluno')
        tabelaDeMedias.classList.remove('nota_aluno')
    })


    if (quantidadeDeMaterias > 0) {
        homeMaterias.classList.add('nota_aluno')
    }

})

const form = document.getElementById('form');
let contadorDeFuncao = 0;

form.addEventListener('submit', function(e) {
    
    e.preventDefault();

    adicionandoAluno();
    atualizaTabela();

})

const arrayAlunos = [];
const alunosNoArr = arrayAlunos.length
let aluno;

function adicionandoAluno() {

    
    
    const nomeDoAluno = document.getElementById('nome_do_aluno').value;
    const notaDoAluno = Number(document.getElementById('nota_do_aluno1').value)
    const notaDoAluno2 = Number(document.getElementById('nota_do_aluno2').value)
    const notaDoAluno3 = Number(document.getElementById('nota_do_aluno3').value)
    const notaDoAluno4 = Number(document.getElementById('nota_do_aluno4').value)
    const notaDoAluno5 = Number(document.getElementById('nota_do_aluno5').value)
    const notaDoAluno6 = Number(document.getElementById('nota_do_aluno6').value)
    const notaDoAluno7 = Number(document.getElementById('nota_do_aluno7').value)
    const notaDoAluno8 = Number(document.getElementById('nota_do_aluno8').value)
    const notaDoAluno9 = Number(document.getElementById('nota_do_aluno9').value)
    const notaDoAluno10 = Number(document.getElementById('nota_do_aluno10').value)
    
    const quantidadeDeMateriasDosAlunos = document.getElementById('quantidade_materias').value;


    aluno = new Aluno(nomeDoAluno, somaDaMedia(quantidadeDeMateriasDosAlunos ,notaDoAluno, notaDoAluno2, notaDoAluno3, notaDoAluno4, notaDoAluno5, notaDoAluno6, notaDoAluno7, notaDoAluno8, notaDoAluno9, notaDoAluno10))

    for (let i = 0; i < arrayAlunos.length; i++) {

        if (aluno.nome == arrayAlunos[i].nome) {

            alert(`O aluno ${aluno.nome}, ja esta na tabela de Media`)
            return true

        }
    }

    

    if (arrayAlunos.length > alunosNoArr) {

        contadorDeFuncao++    
        console.log(contadorDeFuncao)
    
    }

    const alunos = aluno
    console.log(alunos)

    arrayAlunos.push(alunos)
    console.log(arrayAlunos)

    adicionandoAlunoNaTabela()
}

function somaDaMedia(numeroDeNotas ,...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total
    })

    const divisaoMedia = parseFloat(soma / numeroDeNotas)

    return divisaoMedia
}

let linhas = '';


function adicionandoAlunoNaTabela() {

    let linha;

    if (contadorDeFuncao % 2 === 0) {
        linha = '<tr class="tabela_de_alunos__linhas bg-white">'
    } else {
        linha = '<tr class="tabela_de_alunos__linhas">'
    }

    linha += `<td class="tabela_de_alunos__colunas">${aluno.nome}</td>`
    linha += `<td class="tabela_de_alunos__colunas">${aluno.nota}</td>`
    
    if (aluno.nota >= 6) {
        linha += '<td class="tabela_de_alunos__colunas"><span class="tabela_de_alunos__colunas-is--aprovado">Aprovado</span></td>'
    } else {
        linha += '<td class="tabela_de_alunos__colunas"><span class="tabela_de_alunos__colunas-is--reprovado">Reprovado</span></td>'
    }

    linha += '</tr>'

    linhas += linha

    console.log(linhas)

}

function atualizaTabela() {

    const tabelaAprovados = document.getElementById('tabela_de_aprovados')
    console.log(tabelaAprovados)
    
    const tabelaReprovados = document.getElementById('tabela_reprovados')
    console.log(tabelaReprovados)
    
    const alunosGeral = new Set(linhas.split('</tr>'))
    console.log(alunosGeral)

    const alunosAprovadosFiltro = Array.from(alunosGeral).filter(aluno => aluno.includes('Aprovado'))
    console.log(alunosAprovadosFiltro)

    const alunosReprovadosFiltro = Array.from(alunosGeral).filter(aluno => aluno.includes('Reprovado'))
    console.log(alunosReprovadosFiltro)

    //Loop para adicionar um novo item a tabela

    for (let m = 0; m < alunosAprovadosFiltro.length; m++) {

        tabelaAprovados.innerHTML = alunosAprovadosFiltro[m]

    }

    for (let n = 0; n < alunosReprovadosFiltro.length; n++) {

        tabelaReprovados.innerHTML = alunosReprovadosFiltro[n]

    }

    //Auxiliando a criar uma nova linha na tabela.

    tabelaAprovados.innerHTML = alunosAprovadosFiltro.join("");
    tabelaReprovados.innerHTML = alunosReprovadosFiltro.join("");
    
}
