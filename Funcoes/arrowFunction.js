//deve ser armazenada em variaveis
//pois ela sempre sera anonima
let dobro = function(a) {
        return a * 2;
    }
    //modos de escrever arrow func
dobro = (a) => {
    return a * 2;
}

dobro = a => 2 * a; //retorno implicito
console.log(dobro(4.9));
/* ------------------------------------ */

let ola = function() {
    return 'ola';
}

ola = () => 'ola';
console.log(ola());