const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Tulio', 'Raquel']

//function callback recebe respectivamente nome(valor), indice e array
aprovados.forEach(function(nome, indice) { //indice sempre deve ser o segundo parametro, jamais o primeiro
    console.log(`${indice+1}. ${nome}`)
})

console.log('----------------------------------------------')

aprovados.forEach(nome => console.log(nome))