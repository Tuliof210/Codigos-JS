const imprimir = function(nota) {
    switch (Math.floor(nota)) {
        case 10: //como os casos sao iguais ele ira pular
        case 9:
            console.log("Quadro de Honra");
            break;

        case 8:
        case 7: //mesma coisa, sao iguais
            console.log("Aprovado");
            break;

        case 6:
        case 5:
        case 4:
            console.log("Em Recuperação");
            break;

        case 3:
        case 2:
        case 1:
        case 0:
            console.log("Reprovado");
            break;

        default:
            console.log("Valor invalido");
            break;
    }
}

imprimir(10);
imprimir(8);
imprimir(6);
imprimir(3);
imprimir(-1);