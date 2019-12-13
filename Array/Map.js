//mais utilizado para tranformação do array
//"for" com um proposito
//entrada.length === saida.length
//map nao transforma o array atual e sim gera um novo
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let result = nums.map(e => e * 3) //desnecessario o return
console.log(result)

console.log('----------------------------------------------------')

const soma10 = e => e + 10
const triplo = e => e * 3
const toMoney = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;
//parseFloat transforma em float
//toFixed define as casas decimais
//replace troca caracteres

//map em cadeia
result = result.map(soma10).map(triplo).map(toMoney)
console.log(result)