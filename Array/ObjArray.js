//simulação
//Como seria uma array montada via obj?
const almost = { 0: 'Rafael', 1: 'Ana', 2: 'Carlos', 3: 'Bia' }
console.log(almost)

Object.defineProperty(almost, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

//metodo de impressao igual a Array de verdade
console.log(almost[1])
console.log(almost.toString())