function somarArray(numeros) {
    var soma = 0;
    for (var i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    ;
    return "A soma dos números é: " + soma;
}
;
var numeros = [1, 2, 3, 4, 5];
console.log(somarArray(numeros));
