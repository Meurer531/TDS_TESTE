const index = require("./index");

test("Soma de dois valores!", ()=>{
    expect(index.soma(3, 4)).toBe(7);
});

test("Multiplicação de dois valores!", ()=>{
    expect(index.multi(5, 5)).toBe(25);
});

test("Divisão de dois valores!", ()=>{
    expect(index.divi(72, 9)).toBe(8);
});

test("Retorno de pessoas!", ()=>{
    expect(index.pessoa()).toEqual({
            id: 2,
            nome: "Guilherme Meurer",
            idade: 16
        })
});