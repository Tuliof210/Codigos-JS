//Por tras dos panos um array é tambem um objeto
//Cresce dinamicamente
//Heterogeneo, mas recomenda-se utiliza-lo de forma homogenea
console.log(typeof Array, typeof new Array, typeof [])
let aprovados = new Array('bia', 'carlos', 'ana')
console.log(aprovados)

aprovados = ['bia', 'carlos', 'ana']
console.log(aprovados[2])
console.log(aprovados[4])
console.log(aprovados, aprovados.length)

aprovados[15] = 'tulio' //a inserção nao precisa seguir o id da ultima posiçao
console.log(aprovados, aprovados.length) //as posições vazias sao contabilizadas

console.log(aprovados[10] === undefined)
aprovados.push('joao') //insere apos a ultima posição
console.log(aprovados)

console.log('----------------------------------------------------------------------------------')

//sort altera o array original
aprovados.sort(); //por padrao ordena de forma crescente (undefined fica com a ultima posiçao)
console.log(aprovados)

delete aprovados[3]; //indice 3 agora é undefined
console.log(aprovados[3], aprovados)
aprovados.sort(); //por padrao ordena de forma crescente (undefined fica com a ultima posiçao)
console.log(aprovados)

console.log('----------------------------------------------------------------------------------')
aprovados = ['joao', 'maria', 'bernardo', 'augusto']
aprovados.splice()