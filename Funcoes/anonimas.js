const soma = function(x, y) {
    return x + y;
}

const imprimir = function(a, b, op = soma) {
    console.log(op(a, b))
}

imprimir(3, 4);