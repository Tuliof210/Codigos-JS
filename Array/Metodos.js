const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //adiciona um elemento apos a ultima posição
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona um elemento antes da primeira posição
console.log(pilotos)

//usando splice
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

pilotos.splice(3, 1)
console.log(pilotos)


const algunsPilotos = pilotos.slice(2) //gera um novo array a partir do indice informado
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) //limite fechado e limite aberto
console.log(algunsPilotos2)