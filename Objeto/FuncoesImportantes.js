const pessoa = {
    nome: 'Rebeca',
    idade: 12,
    peso: 30
}


console.log(Object.keys(pessoa)); //array de atributos(chave)
console.log(Object.values(pessoa)); //array de valores
console.log(Object.entries(pessoa)); //array de chave-valor
console.log("-----------------------------------");

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`);
})

console.log("-----------------------------------"); //ambos funcionam igualmente

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
}); //define propriedade, no caso permite sua enumeração mas impede sua alteraçao

console.log("-----------------------------------");

pessoa.dataNascimento = '01/02/2017';
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

console.log("-----------------------------------");

//Object.assign (ECMAScript 2015)
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2); //joga em dest os atributos de o1 e o2