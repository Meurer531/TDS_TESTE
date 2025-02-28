const pedido = require("./pedido");
const produto = require("./produto");
const cliente = require("./cliente");

function cadastrarProduto(){
    return{
        id: 1,
        nome: "Pasta de Dente",
        preco: 3
    }
}

function cadastrarPessoa(){
    return{
        id: 2,
        nome: "Paulo da Silva",
        CPF: "220.612.880-22"
    }
}

//function realizarPedido(){
  //  return{}
//}

module.exports = {
    cadastrarPessoa,
    cadastrarProduto,

};