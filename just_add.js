/*
Необходимо реализовать метод, который будет принимать два аргумента. Первый аргумент - массив,
состоящий из цифр от 0 до 9. Второй - любое целое положительное число. Метод должен возвращать
массив из цифр от 0 до 9, который получается путем прибавления второго аргумента к числу,
составленного из элементов массива. Если в массиве есть элементы, не являющиеся числами от 0 до
9, метод должен возвращать null .
Корректными в массиве могут быть только числа от 0 до 9.
Число, которое можно прибавить, может быть любым целым положительным.
Если значение в массиве не является числом от 0 до 9, то должен возвращаться null
 */

function justAddOne(array, number) {
    if (array.filter(elem => typeof elem === 'number' && 0 <= elem <= 9).length !== array.length) {
        return null;
    }
    let degree = array.length - 1;
    const arrNumber = array.reduce(function (sum, current) {
        sum += current * (10 ** degree);
        degree--;
        return sum;
    }, 0);
    const newNumber = arrNumber + number;
    return newNumber.toString().split('').map(elem => Number(elem));
}

justAddOne([1, 0, 9], 2); // 109 + 2 = 111; => [1, 1, 1]
justAddOne([2, 5, 1], 5); // 251 + 5 = 256; => [2, 5, 6]
justAddOne([1], 4020); // 1 + 4020 = 4021; => [4, 0, 2, 1]
justAddOne([1, '4', 11, null], 1); // '4' - строка и есть null => null
