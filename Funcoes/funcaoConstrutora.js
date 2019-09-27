//Como criar objetos semelhante a forma antiga

function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0;
    let tipo = 'De Firma';
    //metodo publico use this
    this.acelerar = () => {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = valocidadeMaxima;
        }
    }

    //metodo publico
    this.getVelocidadeAtual = () => velocidadeAtual;
    this.getTipo = () => tipo;
}

const uno = new Carro; //recebe parametros padrao
const ferrari = new Carro(350, 20);

uno.acelerar();
ferrari.acelerar();
uno.acelerar();
ferrari.acelerar();
uno.acelerar();
ferrari.acelerar();

console.log(uno.getVelocidadeAtual());
console.log(ferrari.getVelocidadeAtual());