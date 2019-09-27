//with callback

const fabricantes = ['mercedes', 'audi', 'bmw'];

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir); //a funçao foreach passa como parametro o valor e o indice (respectivamente)

fabricantes.forEach((fabricante) => console.log(fabricante)); //tambem funciona

//-------------------------------------------------------------------------------------------------------------------

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];
//without callback
let notasBaixas = [];

for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i]); //push na lista
    }
}

console.log(notasBaixas);

//with callback
notasBaixas = notas.filter(nota => nota < 7);
console.log(notasBaixas) //mesmo resultado, menos codigo