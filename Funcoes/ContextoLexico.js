const valor = 'global';

function minhafunc() {
    console.log(valor);
}

function exec() {
    const valor = 'local';
    minhafunc();
}

exec(); //imprime global