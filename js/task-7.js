/* Создание нового массива на основе отбора из исходного массива
используя Number.isFinite, и с помощью for, со старых массивов взять только числа и положить в новый массив массив numbers.
 */

function filterArray(array) {
    'use strict';
    const numbers = [];
    for (let i = 0; i < array.length; i += 1) {
        // Write code under this line
        if (Number.isFinite(array[i]) !== true) { continue; }
        numbers.push(array[i]);

    }
    return numbers;
}

  console.log(filterArray([-2, 0, 2]));
  // [-2, 0, 2]

  console.log(filterArray([1, NaN, Infinity]));
  // [1]

  console.log(filterArray([0, -0, 100, '100']));
  // [0, 0, 100]

  console.log(filterArray([undefined, false, null, [], 1]));
  // [1]

  console.log(filterArray([{}, () => {}, 2]));
  // [2]