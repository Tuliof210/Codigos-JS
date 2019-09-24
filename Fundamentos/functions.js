//exemplo de funções com e sem retorno

function Imprimir(a, b){
    console.log(a*b)
}
Imprimir(10,3)

function Soma(x, y=1){
    return x+y
}
console.log(Soma(10))
console.log(Soma(10,8))

//é possivel armazenar uma função em uma variavel
const Divide = function(c,d){
    console.log(c/d)
}

Divide(45,5)

//função arrow
const Potencia = (e,f) => {
    return Math.pow(e,f)
}

//função arrow com return resumido
const Subtrai = (g,h) => g-h

console.log(Potencia(7,2))
console.log(Subtrai(5,3))