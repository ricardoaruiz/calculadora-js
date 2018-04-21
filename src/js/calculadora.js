var Calculadora = {

    ADICAO: '+',
    SUBTRACAO: '-',
    DIVISAO: '/',
    MULTIPLICACAO: '*',

    adicionar: (num1, num2) => {
        return Calculadora.calcular(num1, num2, Calculadora.ADICAO);
    },
    subtrair: (num1, num2) => {
        return Calculadora.calcular(num1, num2, Calculadora.SUBTRACAO);
    },
    dividir: (num1, num2) => {
        if (num2 == 0) {
            throw new Error('Divisão por zero');
        }
        return Calculadora.calcular(num1, num2, Calculadora.DIVISAO);
    },
    multiplicar: (num1, num2) => {
        return Calculadora.calcular(num1, num2, Calculadora.MULTIPLICACAO);
    },
    calcular: (num1, num2, operacao) => {
        var resultado = 0;

        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Valores informados inválidos');
        }
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        switch (operacao) {
            case Calculadora.ADICAO:
                resultado = num1 + num2;
                break;
            case Calculadora.SUBTRACAO:
                resultado = num1 - num2;
                break;
            case Calculadora.DIVISAO:
                resultado = num1 / num2;
                break;
            case Calculadora.MULTIPLICACAO:
                resultado = num1 * num2;
                break;                
            default:
                resultado = 0;
        }

        return resultado;
    }    
};

// usado na função 'require' do NodeJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = Calculadora;
}