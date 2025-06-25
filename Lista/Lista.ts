function procurarNome(listaN: string[], nomeProcurado: string) : string {
    if (listaN.includes(nomeProcurado)) {
        return `${nomeProcurado} está na lista!`;
    } else {
        return `${nomeProcurado} não foi encontrado!`;
    };
};

const nomes = ["Nicolas", "Ariane", "Gabi", "Joyce", "João"];
console.log(procurarNome(nomes, "Nicolas"));
console.log(procurarNome(nomes, "Geovanna"));