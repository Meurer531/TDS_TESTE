const { cadastrarProduto } = require("./mercado");

const bancoDeDados = [];

function cadastrarNovoProduto(produto) {
    if (!produto || !produto.id || !produto.nome || !produto.preco) {
        console.error("Erro: Produto inválido!");
        return;
    }

    bancoDeDados.push(produto);
    console.log("Produto cadastrado com sucesso:", produto);
}

const novoProduto = cadastrarProduto();
cadastrarNovoProduto(novoProduto);

console.log("Banco de Dados:", bancoDeDados);
