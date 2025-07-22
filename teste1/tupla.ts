let usuario : [string, number, boolean];
usuario = ["Nicolas", 30, true]
console.log(usuario[0])

let teste: number | string;

let id: string | number;
id = 123;
id = "abc";

type A = {nome: string};
type B = {nome: number};

type C = A & B;

enum DiasDaSemana {
    segunda, terça, quarta, quinta, sexta
}

let hoje: DiasDaSemana = DiasDaSemana.sexta;
console.log(hoje);

enum StatusDoPedido {
    Aguardando = "AGUARDANDO",
    Processando = "PROCESSANDO",
    Enviando = "ENVIANDO",
    Entregue = "ENTREGUE"
}

let meuStatus: StatusDoPedido = StatusDoPedido.Aguardando
console.log(meuStatus);