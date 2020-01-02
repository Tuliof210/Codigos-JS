const alunos = [
    { nome: 'joao', nota: 7.3, bolsista: false },
    { nome: 'maria', nota: 9.2, bolsista: true },
    { nome: 'pedro', nota: 9.8, bolsista: false },
    { nome: 'ana', nota: 8.7, bolsista: true }
]

//Desafio 1: todos os alunos sao bolsistas?
const result1 = alunos.map(a => a.bolsista).reduce((a, atual) => a && atual)
console.log('Todos os alunos são Bolsistas:', result1)

//Desafio 2: Algum aluno é bolsistas?
const result2 = alunos.map(a => a.bolsista).reduce((a, atual) => a || atual)
console.log('Algum aluno é Bolsistas:', result2)