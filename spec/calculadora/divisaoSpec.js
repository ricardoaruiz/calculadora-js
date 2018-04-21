describe('Suite de testes de divisão', () => {

    var calculadora = require('../../src/js/calculadora');

    it('deve retornar 3 para 6 e 2', () => {
        expect(calculadora.dividir(6, 2)).toEqual(3);
    });

    it('deve retornar 3 para 6 e 2 no formato texto', () => {
        expect(calculadora.dividir('6', '2')).toEqual(3);
    });

    it('deve retornar 2 para 4.4 e 2.2', () => {
        expect(calculadora.dividir(4.4, 2.2)).toEqual(2);
        expect(calculadora.dividir('4.4', '2.2')).toEqual(2);
    });

    it('deve retornar exceção para divisão por 0', () => {
        expect(() => {calculadora.dividir(5, 0)}).toThrowError('Divisão por zero');
    });

    it('deve retornar exceção para valor1 não numérico', () => {
        expect(() => {calculadora.dividir(undefined, 5)}).toThrowError('Valores informados inválidos')
    });

    it('deve retornar exceção para valor2 não numérico', () => {
        expect(() => {calculadora.dividir(5, undefined)}).toThrowError('Valores informados inválidos')
    });

});