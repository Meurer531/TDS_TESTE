const cliente  = require("./mercado");

const bancoDeDados = [];

function cadastrarNovoCliente(id, nome, cpf) {
    var cliente = { id: id, nome: nome, cpf: cpf };
    bancoDeDados.push(cliente);
    return cliente;
}

const cliente = cadastrarPessoa();
cadastrarNovoCliente(cliente.id, cliente.nome, cliente.CPF);

console.log("Banco de Dados:", bancoDeDados);
