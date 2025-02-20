const pessoa = require("./pessoa");

console.log(pessoa.cadastroPessoa("Guilherme", 27))
console.log(pessoa.cadastroPessoa("Guilherme Meurer", 16))
console.log(pessoa.cadastroPessoa("Guabriella", 18))
console.log(pessoa.cadastroPessoa("Adriel", 18))
console.log(pessoa.cadastroPessoa("Davi", 20))
console.log(pessoa.cadastroPessoa("Larissa", 17))
console.log(pessoa.cadastroPessoa("Gabriel", 17))
console.log(pessoa.cadastroPessoa("Julia", 17))

//Retorna todas as pessoas
console.log(pessoa.consultaTodasAsPessoas());

//deleta a pessoa do ID = 6
pessoa.deletePessoa(6);

//Retorna todas as pessoas
console.log(pessoa.consultaTodasAsPessoas());

//Retorna a pessoa do ID = 4
console.log(pessoa.consultaPessoaID(4));

//Atualiza a pessoa do ID = 1
console.log(pessoa.atualizaPessoa(1, "Guilherme Emanuel Pires", 25));

//Retorna todas as pessoas
console.log(pessoa.consultaTodasAsPessoas());