//sao heterogeneas
//tamanho flexivel

const valores = [10,true,"teste"]

console.log(valores)
console.log(valores[3])//linguagem bem mais permissiva

valores[3] = "Terceiro valor"
console.log(valores)//aceita a adição de valores dessa forma

valores[20] = false
console.log(valores)//ao imprimir ira mostrar valores vazios