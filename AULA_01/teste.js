function doisSoma(a, b) {
    return a + b;
};

console.log("a soma final foi:", doisSoma(4, 2));

function doisMultiplica(a, b) {
    return a * b;
}

console.log("a multiplicação final foi:", doisMultiplica(5, 5));

function doisDivisao(a, b) {
    return a / b;
}

console.log("a divisão final foi:", doisDivisao(16, 2));






const data = []

data.push(1);
data.push(1);
data.push(1);
data.push(1);
data.push(1);

console.log(data);

data.splice(0, 1);

console.log(data);



const pessoa = {
    id: 1,
    nome: "Guilherme",
    idade: 16,
}

console.log(pessoa);
console.log(pessoa.idade);


module.exports = {
    doisSoma,
    doisMultiplica,
    doisDivisao
}


