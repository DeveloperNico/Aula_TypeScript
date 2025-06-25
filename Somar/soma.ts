function somarArray(numeros: number[]) : string {
    let soma = 0;
    for (let i=0; i < numeros.length; i++) {
        soma += numeros[i];
    };
    return "A soma dos números é: " + soma;
};

const numeros = [1, 2, 3, 4, 5];
console.log(somarArray(numeros));