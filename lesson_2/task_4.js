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

let result_1 = getSum(2, 3);
alert(result_1);

let result_2 = getDifference(5, 2);
alert(result_2);

let result_3 = getMultiplication(4, 6);
alert(result_3);

let result_4 = getDivision(15, 6);
alert(result_4);