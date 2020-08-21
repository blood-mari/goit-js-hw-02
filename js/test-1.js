
/*
 * Найти сумму чётных чисел массива.
 */

const numbers = [1, 3, 5, 7, 9, 10, 20, 40, 55, 4, 4];
let total = 0;

/* for (let i = 0; i < numbers.length; i += 1)
{
    const number = numbers[i];
    if (number % 2 === 0) {
        console.log(number);
        total += number;
    }
} */

for (const number of numbers) {
    console.log(number);

    if (number % 2 === 0) {
        total += number;
    }
}
console.log('Total: ', total);

/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'poly1scute';
// let message = `Пользователь ${loginToFind} не найден.`;

//1й вариант
/* for (let i = 0; i < logins.length; i += 1) {
    const login = logins[i];
    if (login === loginToFind) {
        message = `Пользователь ${loginToFind} найден.`
        break;
    }

    message = `Пользователь ${loginToFind} не найден.`;
}
console.log(message);
*/

//2й вариант
/* for (const login of logins) {
    if (login === loginToFind) {
        message = `Пользователь ${loginToFind} найден.`
        break;
    }

}
console.log(message);
*/

//3й вариант: если в массиве элемент или нет

const message = logins.includes(loginToFind)
  ? `Пользователь ${loginToFind} найден.`
  : `Пользователь ${loginToFind} не найден.`;

  console.log(message);