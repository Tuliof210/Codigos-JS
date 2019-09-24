function BoaNoticia(nota) {
    if (nota >= 60) {
        console.log("\nParabens vc passou!");
    } else if (nota >= 40) {
        console.log("\nCuidado vc esta de recuperação!");
    } else {
        console.log("\nQue pena vc foi reprovado...\n");
    }
};

BoaNoticia(61);
BoaNoticia(41);
BoaNoticia(31);

function teste(info) {
    if (info) {
        console.log("Verdadeiro");
    } else {
        console.log("Falso");
    }
}

//algumas forma que js enxerga true ou false
teste(null);
teste(undefined);
teste(NaN);
teste('');
teste("");
teste(0);
teste(-1);
teste(" ");
teste(' ');
teste('?');
teste([]);
teste([1, 3]);
teste({});