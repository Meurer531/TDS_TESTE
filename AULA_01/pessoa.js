const pessoas = [];
var idSeq = 1;

function cadastroPessoa(nome, idade) {
    var pessoa = { id: idSeq++, nome: nome, idade: idade };
    pessoas.push(pessoa);
    return pessoa;
}

function consultaTodasAsPessoas() {
    return pessoas;
}

function deletePessoa(id) {
    var teveRetorno = true;
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].id == id) {
            pessoas.splice(i, 1);
            teveRetorno = true;
            return "pessoa deletada com sucesso"
        } else {
            teveRetorno = false;
        }
    }

    if (!teveRetorno) {
        return "codigo da pessoa é invalido!"
    }
}

function consultaPessoaID(id){
    return pessoas.filter(item => item.id == id);
}

function atualizaPessoa(id, nome, idade){

    var teveRetorno = true;
    for (let i = 0; i < pessoas.length; i++){
        if(pessoas[i].id == id){
            pessoas[i].nome = nome;
            pessoas[i].idade = idade;
            return pessoas[i];
        } else{
            teveRetorno = false;
        }
    }

    if(!teveRetorno){
        return "O codigo da pessoa é invalido";
    }
}

module.exports = {
    cadastroPessoa,
    consultaTodasAsPessoas,
    deletePessoa,
    consultaPessoaID,
    atualizaPessoa
}


    //     const inicio = pessoas.forEach((item, index) => {
    //         if (item.id == id) {
    //             return index
    //         }
    //     });

    //     console.log(inicio);


    //     if (pessoas.length <= 0) {
    //         return "codigo da pessoa invalido"
    //     } else {
    //         pessoas.splice(inicio, 1);
    //         return "pessoa deletada com sucesso"
    //     }


    // }

    

    // console.log(cadastroPessoa("Guilherme", 27));
    // console.log(cadastroPessoa("Guilherme Meurer", 16));
    // console.log(cadastroPessoa("Iagor", 18));
    // console.log(cadastroPessoa("Guabriella", 18));
    // console.log(cadastroPessoa("Adriel", 18));
    // console.log(cadastroPessoa("Davi", 20));
    // console.log(cadastroPessoa("Julia", 17));
    // console.log(cadastroPessoa("Larissa", 17));
    // console.log(cadastroPessoa("Gabriel", 17));

    // console.log(pessoas.consultaTodasAsPessoas());

