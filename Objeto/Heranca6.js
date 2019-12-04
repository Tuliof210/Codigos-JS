function Aula(nome, videoId) {
    this.nome = nome
    this.videoId = videoId
}

const a1 = new Aula('Bem Vindo', 123)
const a2 = new Aula('Ate Breve', 456)

//simulando operador new:
function novo(f, ...params) { //"..." significa um array de params
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const a3 = novo(Aula, 'Eae', 789)