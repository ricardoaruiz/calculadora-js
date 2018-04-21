var Calculadora = {
    adicionar: (num1, num2) => {

        if(isNaN(num1) || isNaN(num2)) {
            throw new Error('Valores informados inválidos');
        }

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        return num1 + num2;
    },
    subtrair: (num1, num2) => {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Valores informados inválidos');
        }
        return num1 - num2;
    },
    dividir: (num1, num2) => {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Valores informados inválidos');
        }
        if (num2 == 0) {
            throw new Error('Divisão por zero');
        }
        return num1 / num2;
    },
    multiplicar: (num1, num2) => {
        return 0;
    }
};

// usado na função 'require' do NodeJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = Calculadora;
}