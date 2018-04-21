describe('Suite de testes de adição', () => {

    var calculadora = require('../../src/js/calculadora.js');

    it('deve retornar 5 para 2 e 3', () => {
        expect(calculadora.adicionar(2,3)).toEqual(5);
    });

    it('deve retornar 6 para 9 e -3 no formato texto', () => {
        expect(calculadora.adicionar('9','-3')).toEqual(6);
    });

    it('deve retornar 4.5 para 1.5 e 3', () => {
        expect(calculadora.adicionar(1.5, 3)).toEqual(4.5);
    });

    it('deve retornar 0 quando valor1 não for numérico', () => {
        expect(calculadora.adicionar(undefined, 2)).toEqual(0);
    });

    it('deve retornar 0 quando valor2 não for numérico', () => {
        expect(calculadora.adicionar(2, undefined)).toEqual(0);
    });

});