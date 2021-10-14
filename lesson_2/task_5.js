'use strict';

function getSum(a, b) {
    return a + b;
}

function getDifference(a, b) {
    return a - b;
}

function getMultiplication(a, b) {
    return a * b;
}

function getDivision(a, b) {
    return (a / b).toFixed(2);
}

/**
 * Функция примитивного калькулятора
 * @param {number} arg_1 Первое число
 * @param {number} arg_2 Второе число
 * @param {string} operation_sign Знак операции
 * @returns {string}
 */
function mathOperation(arg_1, arg_2, operation_sign) {
    switch (operation_sign) {
        case operation_sign = '+':
            return `Сумма: ${getSum(arg_1, arg_2)}`;
        case operation_sign = '-':
            return `Разность: ${getDifference(arg_1, arg_2)}`;
        case operation_sign = '*':
            return `Умножение: ${getMultiplication(arg_1, arg_2)}`;
        case operation_sign = '/':
            return `Деление: ${getDivision(arg_1, arg_2)}`;
        default:
            alert('Неверный знак операции');
    }
}

alert(mathOperation(3, 5, '+'));
