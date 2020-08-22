
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

/* for (const login of allLogins) {
    if (ligin === loginToFind) {
    return `Пользователь ${loginToFind} найден.`;
    }
}
return `Пользователь ${loginToFind} не найден.`;
*/

const findLogin = function (allLogins, loginToFind) {
    return allLogins.includes(loginToFind)
      ? `Пользователь ${loginToFind} найден.`
      : `Пользователь ${loginToFind} не найден.`;
  };

  console.log(findLogin(logins, 'avocod3r'));
  console.log(findLogin(logins, 'k1widab3st'));
  console.log(findLogin(logins, 'jam4l'));
  console.log(findLogin(logins, 'poly1scute'));

/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

const string = 'qWeRTzxCv';
const letters = string.split('');
let invertedString = '';

/* for (const letter of letters) {
    if (letter === letter.toUpperCase()) {
        invertedString += letter.toLowerCase();
    }
    else {
        invertedString += letter.toUpperCase();
    }
} */

for (const letter of letters) {
    const isEqual = letter === letter.toUpperCase();

    invertedString += isEqual ? letter.toLowerCase() : letter.toUpperCase();
}
console.log(`invertedString: ${invertedString}`);

const changeCase = function (string) {
    const letters = string.split('');
    let invertedString = '';

    for (const letter of letters) {
      const isInLowerCase = letter === letter.toLowerCase();

      invertedString += isInLowerCase
        ? letter.toUpperCase()
        : letter.toLowerCase();
    }

    return invertedString;
  };

  console.log(changeCase('qweRTY')); // QWErty
  console.log(changeCase('mAnGo')); // MaNgO
console.log(changeCase('AjAx')); // aJaX

/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// Должно получиться top-10-benefits-of-react-framework
const title = 'Top 10 benefits of React framework';

//привести к нормализации - привести к массиву c разделителем "пробел" - его же объединить через "-":
const words = title.toLowerCase().split(' ').join('-');
console.log(words);

const slugify = function (string) {
    return string.toLowerCase().split(' ').join('-');
};

console.log(slugify('Top 10 benefits of React framework'));
console.log(slugify('Azure Static Web Apps are Awesome'));
console.log(slugify('Technical writing tips for non-native English speakers'));

