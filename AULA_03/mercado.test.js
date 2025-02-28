const pedido = require("./pedido");
const produto = require("./produto");
const cliente = require("./cliente");


//teste de produto
test("Inserindo um produto", () => {
    expect(produto.inserir("Feijão", 15.75)).toEqual({
        id: 1,
        nome: "Feijão",
        preco: 15.75
    });
});

test("Busca todos os produtos", () => {
    expect(produto.buscaTodosProdutos()).toEqual([{
        id: 1,
        nome: "Feijão",
        preco: 15.75
    }]);
});

test("Busca produto por ID:", () => {
    expect(produto.buscaPorID(1)).toEqual({
        id: 1,
        nome: "Feijão",
        preco: 15.75
    });
});


test("Atualiza produto 1", () => {
    expect(produto.atualizar(1, "Feijão do João", 21.00)).toEqual({
        id: 1,
        nome: "Feijão do João",
        preco: 21.00
    })
});

test("deletando um produto", () => {
    expect(produto.deletar(1)).toBe("produto deletado com sucesso!");
});




//teste de cliente





//teste de pedido


test("inserindo um pedido", () => {
    const data = pedido.inserir(1, 1, 3, 2.75);
    expect(data).toEqual({
        id: 1,
        id_produto: 1,
        id_cliente: 1,
        quantidade: 3,
        preco: 2.75,
        total: 8.25
    })
});

test("Busca todos os pedidos", () => {
    const data = pedido.buscaTodosProdutos(1, 1, 3, 2.75);

    expect(data).toEqual([{
        id: 1,
        id_produto: 1,
        id_cliente: 1,
        quantidade: 3,
        preco: 2.75,
        total: 8.25
    }])
});

test("Busca por ID", () => {
    const data = pedido.buscaPorID(1);

    expect(data).toEqual({
        id: 1,
        id_produto: 1,
        id_cliente: 1,
        quantidade: 3,
        preco: 2.75,
        total: 8.25
    })
});

test("Atualiza pedido 1", () => {
    const data = pedido.atualizar(1, 2, 2, 4, 3.00);

    expect(data).toEqual({
        id: 1,
        id_produto: 2,
        id_cliente: 2,
        quantidade: 4,
        preco: 3.00,
        total: 12.00
    })
});

test("deletando pedido", () => {
    const data = pedido.deletar(1);

    expect(data);
})
