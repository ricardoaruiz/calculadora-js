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

    it('deve retornar exceção quando valor1 não for numérico', () => {
        expect(() => {calculadora.adicionar(undefined, 2)}).toThrowError('Valores informados inválidos');
    });

    it('deve retornar exceção quando valor2 não for numérico', () => {
        expect(() => {calculadora.adicionar(2, undefined)}).toThrowError('Valores informados inválidos');
    });

});