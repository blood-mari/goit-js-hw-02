/*
 * Напиши скрипт поиска самого большого числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

const numbers = [51, 18, 13, 24, 7, 85, 19];
let biggestNumber = numbers[0];

for (const number of numbers) {
    if (number > biggestNumber) {
        biggestNumber = number;
    }
}
console.log(`biggestNumber: ${biggestNumber}`);

/*
 * Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
 * Элементов может быть произвольное кол-во.
 * Пусть элементы массива  в строке будут разделены запятой.
 * - Сначала через for
 * - Потом через join()
 */

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

//1й способ ч/з конкатенацию
/* let string = '';

for (const friend of friends) {
    string += friend + ",";
}
string = string.slice(0, (string.length - 1));
console.log(string); */

//2й способ ч/з join()
const string = friends.join(",")
console.log(string);