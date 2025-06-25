import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function forca(palavras: string[], tentativas: number) : string {
    for (let i=0; i <= tentativas; i++) {
        console.log("Seja bem-vindo ao jogo da forca!");
        console.log("Tente acertar a palvra! Dica: tecnologias");
        
    };
    
    let nome = prompt("Testando, digite seu nome: ");
    return "Deu certo, seu nome é: " + nome;
};

const palavras = ["Typescript", "React", "Angular", "Python", "Java", "JavaScript"];
const tentativas = 3;

console.log(forca(palavras, tentativas));