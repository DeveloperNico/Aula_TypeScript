import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Qual é o seu nome? ", (resposta) => {
    console.log(`Muito prazer, ${resposta}!`);
    rl.close()
})