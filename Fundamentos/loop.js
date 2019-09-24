//While
function GetAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min; //GAMBIARRA
    //random gera valor aleatorio entre 0 e 1
    return Math.floor(valor);
}

let op = 0;

while (op != -1) {
    op = GetAleatorio(-1, 10);
    console.log(op);
}
console.log("\nFim While\n");
/* ---------------------------------------------------- */

//DoWhile
op = -1;

do {
    op = GetAleatorio(-1, 10);
    console.log(op);
} while (op != -1)
console.log("\nFim DoWhile\n");
/* ---------------------------------------------------- */

//For
const notas = [6, 5, 8, 9.9, 3, 12, [2, 3, 5]];
for (let i = 0; i < notas.length; i++) {
    console.log(`Contador = ${i}`); //Usa-se `` e nao "" para interpolaçoes
    console.log(notas[i]);
}
console.log("\nFim For\n");
/* ---------------------------------------------------- */

//For/In
for (i in notas) {
    console.log(i, notas[i]);
}

const pessoa = {
    nome: "Ana",
    sobrenome: "Silva",
    idade: 23,
    peso: 64.9
}

console.log("\nIterando objetos");
for (att in pessoa) {
    console.log(`${att} = ${pessoa[att]}`);
}