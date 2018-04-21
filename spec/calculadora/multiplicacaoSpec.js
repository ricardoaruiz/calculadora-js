describe('Suite de testes para multiplicação', () => {

    var calculadora = require('../../src/js/calculadora');

    it('deve retornar 8 para 2 e 4', () => {
        expect(calculadora.multiplicar(2, 4)).toEqual(8);
    });

    it('deve retornar 0 para 2 e 0', () => {
        expect(calculadora.multiplicar(2, 0)).toEqual(0);
    });    

    it('deve retornar 0 para 0 e 2', () => {
        expect(calculadora.multiplicar(0, 2)).toEqual(0);
    });

    it('deve retornar 8 para 2 e 4 em formato texto', () => {
        expect(calculadora.multiplicar('2', '4')).toEqual(8);
    });

    it('deve retornar 10.08 para 4.2 e 2.4', () => {
        expect(calculadora.multiplicar(4.2, 2.4)).toEqual(10.08);
        expect(calculadora.multiplicar('4.2', '2.4')).toEqual(10.08);
    });

    it('deve retornar exceção para valor1 não numérico', () => {
        expect(() => {calculadora.multiplicar(undefined, 2)}).toThrowError('Valores informados inválidos');
    });

    it('deve retornar exceção para valor2 não numérico', () => {
        expect( () => {calculadora.multiplicar(2, undefined)}).toThrowError('Valores informados inválidos');
    });

});