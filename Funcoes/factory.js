//função que retorna objeto

//ruim pois tem que repetir muito codigo
const prod1 = {
    nome: "caneta",
    price: 3
}

const prod2 = {
        nome: "tv",
        price: 1000
    }
    //---------------------------------

//exemplo com factory
//factory simples (parametros padrao)
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva',
        idade: 18
    }
}
console.log(criarPessoa());

//factory sem padrao
function criaCarro(modelo, placa, ano) {
    return {
        modelo,
        placa,
        ano
    }
} //forma simplificada pelo fato do atributo e valor terem o mesmo nome
console.log(criaCarro('Ferrari', 'NXZ-4090', 2017));

//mais um exemplo
function criaProduto(name, price, discount = 0.1) {
    return {
        name,
        price,
        discount: price * discount,
        newprice: price - (price * discount)
    }
}
console.log(criaProduto('Xbox', 1000));