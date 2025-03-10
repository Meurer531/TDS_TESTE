const pedidos = [];
var seqID = 1;

module.exports = {
    inserir: (id_produto, id_cliente, quantidade, preco) => {
        const pedido = {
            id: seqID++,
            id_produto,
            id_cliente,
            quantidade,
            preco,
            total: quantidade * preco
        };
        pedidos.push(pedido);
        return pedido;
    },
    deletar: (id) => {
        const data = pedidos.filter((item, index) => {
            if (item.id == id) {
                pedidos.splice(index, 1);
                return item;
            }
        });

        if(!data){
            return "codigo pedido invalido"
        } else{
            return "pedido deletado com sucesso"
        }

    },


    atualizar: (id, id_produto, id_cliente, quantidade, preco) => {
        const data = pedidos.filter(item => item.id == id)[0];


        if (!data) {
            return "codigo do pedido invalido"
        } else {

            data.id_produto = id_produto;
            data.id_cliente = id_cliente;
            data.quantidade = quantidade;
            data.preco = preco;
            data.total = quantidade * preco;

            return data;
        }
    },


    buscaTodosProdutos: () => {
        return pedidos;
    },
    buscaPorID: (id) => {
        const data = pedidos.filter(item => item.id == id);

        if (!data) {
            return "codigo do pedido invalido"
        } else {
            return data[0];
        }

    }
}
