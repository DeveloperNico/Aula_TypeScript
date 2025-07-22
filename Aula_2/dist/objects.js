"use strict";
// type Usuario = {
//     id: number;
//     nome: string;
//     email: string;
//     ativo: boolean;
//     obterInfo(): string;
// };
const usuario1 = {
    id: 1,
    nome: "Nicolas",
    email: "nicolas@gmail.com",
    ativo: true,
    obterInfo() {
        return `Usuario: ${this.nome}, (ID: ${this.id}) - ${this.ativo ? "Ativo" : "Inativo"}`;
    }
};
console.log(usuario1.obterInfo());
