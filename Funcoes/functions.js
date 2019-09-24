//em JS funçao é tratada como dado
//Funçao de alta ordem
//first-class object(citizen)

//forma literal
function fun1() {} //sem return declarado toda function retorna undefined

//armazenando função anonima para variavel
const fun2 = function() {}

//armazenando em uma array
const list = [function(a, b) { return a + b; }, fun1, fun2];

console.log(`resultado da função: ${list[0](2, 3)}`);

//armazenando em atributos de obj
const pessoa = {};
pessoa.falar = function(a) {
    console.log(`OI, eu sei falar a palavra "${a}"`);
}

pessoa.falar("tulio");

//passando função como parametro para outra
function run(fun) {
    fun();
}

run(pessoa.falar);