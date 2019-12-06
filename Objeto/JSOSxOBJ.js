//JSON carrega apenas dados
//nao carrega Objetos

const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a + b + c
    }
}

console.log(obj)
console.log(JSON.stringify(obj)) //stringify transforma obj em json note || quem soma eh ignorado por ser function

//nome de atributo smp entre aspas duplas
console.log(JSON.parse('{ "a": 5.2, "b": "string", "c": {}, "d": []}'));