//"This" pode variar em relaçao a quem o chama
//porem em arrow function o this nao varia

const pessoa = {
    saudacao: 'bom dia',
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar(); //this funcionando
const falar = pessoa.falar;
falar(); //gera conflito no this

//necessario usar um bind para resolver a instabilidade do this
const Falar = pessoa.falar.bind(pessoa);
Falar();
//---------------------------------------------------------------------------

function Pessoa() {
    this.idade = 0;
    setInterval(function() {
        this.idade++;
        console.log(this.idade)
    }.bind(this), 500); //dispara algo num determinado intervalo de tempo
}

/*new Pessoa;*/ //sem o bind o this ficaria perdido e a funçao retornaria NaN

//outro meio
function Chamada() {
    this.chamada = 10;
    const self = this;

    setInterval(function() {
        self.chamada += 10;
        console.log(self.chamada)
    }, 300);
};

new Chamada;