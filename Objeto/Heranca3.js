const pai = { nome: 'Tulio', Cabelo: 'Preto' }
const filho1 = Object.create(pai);

console.log(filho1, pai)
console.log(`Nome: ${pai.nome} | Cabelo: ${pai.Cabelo}`);
console.log(`Nome: ${filho1.nome} | Cabelo: ${filho1.Cabelo}`);
console.log("---------------------------------------------------")

filho1.nome = 'Carlos'

const filho2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(`Nome: ${pai.nome} | Cabelo: ${pai.Cabelo}`);
console.log(`Nome: ${filho1.nome} | Cabelo: ${filho1.Cabelo}`);
console.log(`Nome: ${filho2.nome} | Cabelo: ${filho2.Cabelo}`);