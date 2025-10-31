//✨Complete the solution so that it reverses the string passed into it.
//👀TESTS
// assert.strictEqual(solution('world'), 'dlrow');
// assert.strictEqual(solution('hello'), 'olleh');
// assert.strictEqual(solution(''), '');
//assert.strictEqual(solution('h'), 'h');

//✔🐱‍🚀❤SOLUTION
function solution(str) {
    let newWorld = ''
    for (let i= str.length - 1; i >= 0; i--) {
         newWorld += str[i]
    }
    return newWorld;
}

console.log(solution('world'))//'dlrow'

// function solution(str) {
//     // Разбиваем строку на массив символов
//     const arr = str.split('');
//     // Переворачиваем массив
//     arr.reverse();
//     // Объединяем символы обратно в строку
//     const reversedStr = arr.join('');
//     return reversedStr;
// }

// function solution(str) {
//     return [...str].reverse().join('');
// }