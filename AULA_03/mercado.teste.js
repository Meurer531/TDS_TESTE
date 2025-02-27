const pedido = require("./pedido");
const produto = require("./produto");
const cliente = require("./cliente");
const { cadastrarPessoa, cadastrarProduto } = require("./mercado");

test("Clientes cadastrados", () => {
    expect(cliente.cadastrarPessoa(4, Gustavo, "043.520.520-00"))
});








module.exports = {
    cadastrarPessoa,
    cadastrarProduto,

};

