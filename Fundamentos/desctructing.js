//serve para retirar de forma mais pratica atributos de estruturas
//Exemplo:

const pessoa = {
    name: 'Tulio',
    idade: 19,
    endereço: {
        logradouro: 'Rua Cibipuruna',
        num: 175,
        bairro: 'Monte Azul'
    }
}

const {name, idade} = pessoa
console.log(name, idade)

//ou
const {name: x, idade: y} = pessoa
console.log(x,y)

//ou
const {endereço: {num: n, bairro: ba}} = pessoa
console.log(n,ba)

//atribuição em MULTIPLAS VARIAVEIS usando destructing
const [a,b,c,d] = [2,5,7,9]
console.log(c)

//destructing usado como parametros de funçao
function rand ({min = 0, max = 1000}){//valores padrao

    if(min > max) [min, max] = [max, min]

    const val = Math.random() * (max - min) + min
    return Math.floor(val)
} 

const obj = {max: 50, min: 40}
console.log(rand(obj))