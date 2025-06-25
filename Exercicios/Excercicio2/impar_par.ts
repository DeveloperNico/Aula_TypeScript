function verificarParOuImpar(numero: number) : string {
    if (numero % 2 === 0) {
        return "O número " + numero + " é par!";
    } else {
        return "O número " + numero + " é ímpar!";
    };
};

console.log(verificarParOuImpar(5));