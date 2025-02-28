const clientes = [];
const seqID = 1;

module.exports = {
    inserir: (nome, cpf) => {
        const cliente = {id: seqID++, nome, cpf}
        cliente.push(cliente);
        return cliente;
    },
    deletar: () => {},
    atualizar: () =>{},
    buscaTodosProdutos: () => {},
    buscaPorID: () => {}
}
