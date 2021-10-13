'use strict';

let a = -3,
    b = 5;

switch (true) {
    case a >= 0 && b >= 0:
        alert(`Разность: ${a - b}`);
        break;
    case a < 0 && b < 0:
        alert(`Произведение: ${a * b}`);
        break;
    case a >= 0 && b < 0 || a < 0 && b >= 0:
        alert(`Сумма: ${a + b}`);
        break;
}