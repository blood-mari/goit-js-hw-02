/*
 * Напиши скрипт который считает сумму элементов двух массивов.
 */

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;

const numbers = array1.concat(array2);

for (const number of numbers) {
    total += number;
}

console.log(`total: ${total}`);

/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];
/*
 * Удаление (по индексу), метод indexOf()
 */
const cardToRemove = 'Карточка-3';

//ищем индекс элемента
const index = cards.indexOf(cardToRemove);
console.log(index);
//удаляем элемент с его индексом
cards.splice(index, 1);
console.log(cards);
/*
 * Добавление (по индексу)
 */
const cardToInsert = 'Карточка-6';
//Вставлем карту в начало:
cards.unshift(cardToInsert);
console.log(cards);
//Добавляем карту в конец:
cards.push(cardToInsert);
console.log(cards);
//Вставляем в произвольное место с массива:
cards.splice(2, 0, 4, 5, 6, 7);
console.log(cards);

// Обновление (по индексу) + замена символа в строке

const cardToUpdate = 'Карточка-4';
const index1 = cards.indexOf(cardToUpdate);
let newCard = '';
newCard = cardToUpdate.replace('-', ' ');


cards.splice(index1, 1, newCard);
console.log(cards);
