//Object.preventExtensions
//Evita criação dinamica de atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'Promocao'
})
console.log('Extensível?', Object.isExtensible(produto));

produto.nome = 'Borracha'
produto.desc = 'Borracha escolar branca' //adição nao sera aceita
delete produto.tag //deleta um tipo de atributo do objeto
console.log(produto)


//Object.seal 
//Impede criação e exclusao de atributos
//Permite alteração
const pessoa = {
    nome: 'Tulio',
    idade: 20,
    sexo: 'M'
}

Object.seal(pessoa)
pessoa.idioma = 'PT-BR'
delete pessoa.sexo;
console.log('Selado?', Object.isSealed(pessoa))
console.log(pessoa)


//Object.freeze = selado + valores constantes