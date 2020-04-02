
    'use strict';

let a = 1, b = 1, c, d;
c = ++a; alert(c);     // 2 префиксная форма записи, сначала идет увеличение перемнной "а" на 1 потом присваивание
d = b++; alert(d);     // 1 постфиксная форма записи, сначала идет присваиваиние d = 1, потом увеличение "b" на 1
c = (2+ ++a); alert(c); // 5 сначала увеличение переменной "а" на 1 потом оператор сложения и присваивания с = (2+ 3)
d = (2+ b++); alert(d); // 4 сначала операторы сложения и присваивания, потом увеличение переменной "b" на 1
alert(a);               // 3 переменная дважды была увеличена на 1
alert(b);               // 3 переменная дважды была увеличена на 1


a = 2;  // присваиваем значение 2
let x = 1 + (a *= 2); // сокращенная форма записи выражения x = 1 + (a = 2 * a), соответственно x = 5, a = 4




 a = 7;
 b = 9;
let result = 0;

if (a >= 0 && b >= 0) {           // Проверка если переменные a и b положительные
    result = a - b;
    console.log(result);
}
if (a < 0 && b < 0) {            // Проверка если переменные a и b отрицательные
    result = a * b;
    console.log(result);
}
if ((a * b) < 0 ) {              // Проверка если переменные a и b с разными знаками (решение подсмотрел у вас)
    result = a * b;
    console.log(result);
}



/**
 * Функция сложения параметров
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function getSum(a , b) {        // фунукция возвращающая сумму параметров
    return a + b;
}

/**
 * Функция вычитания параметров
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function getDifference(a , b) {       // фунукция возвращающая разность параметров
    return a - b;
}

/**
 * Функция умножения параметров
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function getMultiplication( a , b) {   // фунукция возвращающая произведение параметров
    return a * b;
}

/**
 * Функция деления параметров
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function getDel(a , b) {
    return a / b;
}

/**
 * Функция получает в параметры 2 числа и название операции в виде строк: 'sum', 'diff', 'multi', 'del'
 * и осуществляет выбранную операцию
 * @param {number} arg1
 * @param {number} arg2
 * @param {string} operation передается строками: 'sum', 'diff', 'multi', 'del'
 * @returns {number}
 * @throws {Error} функция выбросит ошибку если будет передана не предусмотренная операция
 */
function mathOperation(arg1 , arg2, operation) {
    switch (operation) {
        case 'sum' :
            return getSum(arg1, arg2);
        case 'diff' :
            return getDifference(arg1, arg2);
        case 'multi' :
            return getMultiplication(arg1, arg2);
        case 'del' :
            return getDel(arg1, arg2);
        default:
            throw new Error('Такая операция не предусмотрена');
    }
}
