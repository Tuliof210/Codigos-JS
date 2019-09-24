function area(largura, altura) {
    const area = largura * altura;

    if (area > 20) {
        console.log(`Valor acima do permitido: ${area} m2`);
    } else {
        return area;
    }
} //estranho mas valido

console.log(`${area(2,2)} m2`);
console.log(`${area(2,11)} m2`);
console.log(`${area()} m2`);
console.log(`${area(2,2,9)} m2`);

/* ----------------------------------------------------- */

//parametros variáveis
function soma() {
    let soma = 0;
    for (let i in arguments) {
        soma += arguments[i];
    }
    return soma;
}

console.log("Somas:");
console.log(soma(1));
console.log(soma(1, 3));
console.log(soma(1, 7, 5));
console.log(soma(1, "teste"));
console.log(soma("la", " mundo"));

/* ------------------------------------------------------- */
//parametros padrao
console.log("Calculadora:")

function calcula(a, b, c) {
    a = a || 1;
    b = b || 3;
    c = c || 2;

    return a * b * c;
} //valores base para caso seja recebido parametro invalido(vulgo false)

console.log(calcula(7));

//ou...
function calcula2(a, b, c) {
    a = isNaN(a) ? 1 : a;
    b = isNaN(b) ? 1 : b;
    c = isNaN(c) ? 1 : c;

    return a - b - c;
}

console.log(calcula2(2, 7, 7))

//valor padrao do es2015
function calcula3(a = 1, b = 1, c = 1) {
    return a + b + c; //valores sao substituidos se forem validos
}

console.log(calcula3());