//closure é o escopo criado quando uma função é declarada
//relacão com contexto lexico
//esse escopo permite a função acessar e manipular variáveis externas à função
//função sempre "lembra" suas origens/onde foi criada

const x = 'global';

function fora() {
    const x = 'local';

    function dentro() {
        return x;
    }

    return dentro;
}

const minhafunc = fora();
console.log(minhafunc());