describe('Suite de testes de subtração', () => {

    var calculadora = require('../../src/js/calculadora');

    it('deve retornar 3 para 5 e 2', () => {
        expect(calculadora.subtrair(5, 2)).toEqual(3);
    });

    it('deve retornar 3 para 5 e 2 em formato texto', () => {
        expect(calculadora.subtrair('5', '2')).toEqual(3);
    });

    it('deve retornar -3 para 2 e 5', () => {
        expect(calculadora.subtrair(2, 5)).toEqual(-3);
    })

    it('deve retornar 3 para 5.5 e 2.5', () => {
        expect(calculadora.subtrair(5.5, 2.5)).toEqual(3);
    });

    it('deve retornar 0 para valor1 não numérico', () => {
        expect(calculadora.subtrair(undefined, 2)).toEqual(0);
    });

    it('deve retornar 0 para valor2 não numérico', () => {
        expect(calculadora.subtrair(3, undefined)).toEqual(0);
    });

});