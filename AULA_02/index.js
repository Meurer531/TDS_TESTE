function soma(a, b){
    return a + b;
}

function multi(a, b){
    return a * b;
}

function divi(a, b){
    return a / b;
}

function pessoa(){
    return{
        id: 2,
        nome : "Guilherme Meurer",
        idade : 16
    }
}

module.exports = {
    soma,
    multi,
    divi,
    pessoa
}