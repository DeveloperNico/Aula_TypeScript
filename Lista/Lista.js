function procurarNome(listaN, nomeProcurado) {
    if (listaN.includes(nomeProcurado)) {
        return "".concat(nomeProcurado, " est\u00E1 na lista!");
    }
    else {
        return "".concat(nomeProcurado, " n\u00E3o foi encontrado!");
    }
    ;
}
;
var nomes = ["Nicolas", "Ariane", "Gabi", "Joyce", "João"];
console.log(procurarNome(nomes, "Nicolas"));
console.log(procurarNome(nomes, "Geovanna"));
