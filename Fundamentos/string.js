const trab = "Crcmg"

console.log(trab[0])
console.log(trab[9])

console.log(trab.charCodeAt(0))
console.log(trab.charCodeAt(2))//maiusculos e minusculos possuem Code diferente

console.log(trab.indexOf("m"))
console.log(trab.indexOf("a"))//retorna valor negativo

console.log(trab.substring(2,4))//limite fechado - limite aberto

console.log(trab.concat(" eh").concat(" top"))//autoexplicativo
console.log(trab + " eh" + " top")//concatenação rudimentar

console.log(trab.replace('r', 'c'))//valor antigo, valor novo

console.log(trab.split(""))//sem aspas ele trata a string como um vetor de uma unica posição



