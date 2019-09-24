var lista = [];

for (let i = 0; i < 15; i++) {
    lista[i] = Math.random() * 10;
    lista[i] = Math.ceil(lista[i]); //arredondar para cima
    console.log(lista[i]);
}

console.log("");
console.log("Iterando utilizando break, ativado se o numero for = 5");
console.log("");

for (let x in lista) {
    if (lista[x] == 5) {
        console.log("Break");
        break;
    }
    console.log(lista[x]);
}

console.log("");
console.log("Iterando utilizando continue, ativado em numeros impares");
console.log("");

for (let y in lista) {
    if (lista[y] % 2 == 1) {
        console.log("Continue");
        continue;
    }
    console.log(lista[y]);
}