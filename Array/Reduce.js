//Geralmente transforma um array em um unico elemento
//inicialmente recebe como parametros na callback o 1th e o 2th valor do array
//retorna um acumulador resultante desses 2 parametros
//na sequencia o acumulador se torna o primeiro parametro e o 3th valor se torna o segundo parametro, e por ai vai

//alem da callback eh possivel receber um valor inicial pre-definido


const alunos = [
    { nome: 'joao', nota: 7.3, bolsista: false },
    { nome: 'maria', nota: 9.2, bolsista: true },
    { nome: 'pedro', nota: 9.8, bolsista: false },
    { nome: 'ana', nota: 8.7, bolsista: true }
]

const resultado = alunos.map(a => a.nota).reduce((acumulador, atual) => {
    console.log(`[${acumulador} + ${atual}]`)
    return acumulador + atual
})
console.log(resultado)