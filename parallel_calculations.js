/*
Необходимо реализовать метод, который принимает два аргумента. Первый аргумент - массив
синхронных функций, а второй - функция любого типа. Метод должен вызывать функции из первого
аргумента и затем, когда они все выполнятся, запустить функцию, переданную вторым аргументом. В
фукнции из массива необходимо передать callback , который вызывается по окончании
выполнения.
В методы, которые передаются в массиве, обязательно должен быть передан метод обратного
вызова callback .
Количество методов в массиве может быть любым. И в каждом есть callback .
Метод parallelComputing должен после выполнения вызвать метод, переданный вторым
аргументом.
 */

function first(callback) {
    setTimeout(callback, 1000);
}
function second(callback) {
    setTimeout(_ => {
    // Пример. Здесь можент быть логика метода.
        callback();
    });
}
function mainFunction() {
    console.log('main function');
}

function parallelComputing(arr, afterFunction) {
    // Реализация метода
    // После того, как first и second будут выполнены
    const callback = () => console.log('Done');
    Promise.all(arr.map(f => new Promise(f(callback)))).then(mainFunction());
}

const arr = [first, second];
const afterFunction = mainFunction;
parallelComputing(arr, afterFunction);