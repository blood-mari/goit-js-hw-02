/*
Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате [номер элемента] - [значение элемента].

Нумерация должна начинаться с 1. */

const getItemsString = function (array) {
    'use strict';
    let number =0;
    let result ="";
    // Write code under this line
     for (let i = 0; i < array.length; i += 1) {
         number = i + 1;
         result += `${number} - ${array[i]}\n`;
      }
          return result;
  };

  console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
  /*
  '1 - Mango
  2 - Poly
  3 - Ajax
  4 - Lux
  5 - Jay
  6 - Kong
  '
  */

  console.log(getItemsString([5, 10, 15]));
  /*
  '1 - 5
  2 - 10
  3 - 15
  const result = array.join('\n');
  '
  */