const pessoa = require("./pessoa");

console.log(pessoa.cadastroPessoa("Guilherme", 27))
console.log(pessoa.cadastroPessoa("Guilherme Meurer", 16))
console.log(pessoa.cadastroPessoa("Guabriella", 18))
console.log(pessoa.cadastroPessoa("Adriel", 18))
console.log(pessoa.cadastroPessoa("Davi", 20))
console.log(pessoa.cadastroPessoa("Larissa", 17))
console.log(pessoa.cadastroPessoa("Gabriel", 17))
console.log(pessoa.cadastroPessoa("Julia", 17))

console.log(pessoa.consultaTodasAsPessoas());
pessoa.deletePessoa(6);

console.log(pessoa.consultaPessoaID(4))