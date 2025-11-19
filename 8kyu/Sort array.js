//✨Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
//
// For example, if this array were passed as an argument:
//
// ["Telescopes", "Glasses", "Eyes", "Monocles"]
// Your function would return the following array:
//
// ["Eyes", "Glasses", "Monocles", "Telescopes"]
// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

//👀TESTS
// Test.assertDeepEquals(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);
//Test.assertDeepEquals(sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"]);
//Test.assertDeepEquals(sortByLength(["Longer", "Longest", "Short"]),["Short", "Longer", "Longest"]);
//
// //✔🐱‍🚀❤SOLUTION
// function sortByLength(array) {
//     let newArray = array.sort((a, b) => a.length - b.length)
//     return newArray;
// }
// // function sortByLength(array) {
// //     let newArray = [...array]; // создаем копию массива
// //
// //     // Пузырьковая сортировка по длине строк
// //     for (let i = 0; i < newArray.length - 1; i++) {
// //         for (let j = 0; j < newArray.length - 1 - i; j++) {
// //             if (newArray[j].length > newArray[j + 1].length) {
// //                 // Меняем местами
// //                 let temp = newArray[j];
// //                 newArray[j] = newArray[j + 1];
// //                 newArray[j + 1] = temp;
// //             }
// //         }
// //     }
// //
// //     return newArray;
// // }
//
// console.log(sortByLength(["Beg", "Life", "I", "To"]));
// console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]));
// console.log(sortByLength(["Longer", "Longest", "Short"]));

var isPalindrome = function (x) {
    if (x < 0) return false;
    const str = x.toString();
    return str === Str.split('').reverse().join('');
};
