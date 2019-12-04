//Gambiarras semelhantes a injeção de metodos
//Util para incluir novos comportamentos e funcionalidades em Funcoes Core
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object) //functions possuem prototype

String.prototype.reverse = function() {
        return this.split('').reverse().join('');
    }
    //split tem como retorno uma array
    //uma array por sua vez possui um metodo que retorna a lista em reverso
    //por fim o join concatena elementos de uma array em um

//parametro split => caracter flag para separação da string
//parametro join => caracter flag q ficara entre cada string(por padrao eh ',')

Array.prototype.first = function() {
    return this[0];
}



console.log('Escola Cod3r', 'Escola Cod3r'.reverse())
console.log([23, 3, 7, 4, 5].first());