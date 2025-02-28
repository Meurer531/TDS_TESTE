const produtos = [];
var seqID = 1;

module.exports = {
    inserir: (nome, preco) => {
        const produto = {
            id: seqID++,
            nome,
            preco
        };
        produtos.push(produto);
        return produto;
    },
    deletar: (id) => {
        const data = produtos.filter((item, index) => {
            if (item.id == id) {
                produtos.splice(index, 1);
                return item
            }
        })[0];

        if (!data) {
            return "codigo invalido";
        } else {
            return "produto deletado com sucesso!"
        }

    },


    atualizar: (id, nome, preco) => {
        const data = produtos.filter((item) => {
            if (item.id == id) {
                return item
            }
        })[0];

        if (data) {
            data.nome = nome;
            data.preco = preco;
            return data;
        } else {
            return "o codigo do produto esta invalido!"
        }
    },
    buscaTodosProdutos: () => {
        return produtos;
    },
    buscaPorID: (id) => {
        const data = produtos.filter((item) => {
            if (item.id == id) {
                return item
            }
        });

        if (!data) {
            return "codigo invalido"
        } else {
            return data[0];
        }
    }
}
