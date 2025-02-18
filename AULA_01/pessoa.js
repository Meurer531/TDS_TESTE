const pessoas = [];
var idSeq = 0;

function cadastroPessoa(nome, idade) {
    var pessoa = { id: idSeq++, nome: nome, idade: idade };
    pessoas.push(pessoa);
    return pessoa;
}

function consultaTodasAsPessoas() {
    return pessoas;
}

module.exports = {
    cadastroPessoa,
    consultaTodasAsPessoas

}

function deletaPessoa(id) {

}

console.log(cadatroPessoa("Guilherme", 27));
console.log(cadastroPessoa("Guilherme Meurer", 16));
console.log(cadastroPessoa("Iagor", 18));
console.log(cadastroPessoa("Guabriella", 18));
console.log(cadastroPessoa("Adriel", 18));
console.log(cadastroPessoa("Davi", 20));
console.log(cadastroPessoa("Julia", 17));
console.log(cadastroPessoa("Larissa", 17));
console.log(cadastroPessoa("Gabriel", 17));

console.log(pessoa.consultaTodasAsPessoas());

