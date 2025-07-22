"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("Qual é o seu nome? ", function (resposta) {
    console.log("Muito prazer, ".concat(resposta, "!"));
    rl.close();
});
