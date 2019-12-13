//Serve para filtrar um array
//Retorna um sub-array

//o callback deve retornar true ou false
//caso true, esse sera add no novo array

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Carro', preco: 24990, fragil: false },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false },
    { nome: 'Almofada', preco: 39.99, fragil: false }
]

console.log(produtos.filter(p => p.preco > 500).filter(p => p.fragil))