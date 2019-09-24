
const prod = [] //forma literal de criar uma lista
const prod1 = {} //forma literal de criar um objeto (coleão chave-valor)

//permite criação de atributos dinamicamente
prod1.nome = "Celular Xiaomi"
prod1.price = 1289.99

console.log(prod1)

const prod2 = {
    nome: "Notebook ACER", //virgula para separar atributos
    price: 2199.99,

    desconto: { //objeto aninhado
        valor: 0.1
    }

}//usar nesse caso o ":" ao inves de "="

console.log(prod2)