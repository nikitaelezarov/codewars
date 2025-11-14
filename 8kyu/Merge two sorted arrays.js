//✨You are given two sorted arrays that contain only integers. These arrays may be sorted in either ascending or descending order. Your task is to merge them into a single array, ensuring that:
//
// The resulting array is sorted in ascending order.
//
// Any duplicate values are removed, so each integer appears only once.
//
// If both input arrays are empty, return an empty array.
//
// No input validation is needed, as both arrays are guaranteed to contain zero or more integers.
//
// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

//👀TESTS
// assert.deepEqual(mergeArrays([1,2,3,4], [5,6,7,8]), [1,2,3,4,5,6,7,8], "Basic tests");
// assert.deepEqual(mergeArrays([1,3,5,7,9], [10,8,6,4,2]), [1,2,3,4,5,6,7,8,9,10], "Basic tests");
// assert.deepEqual(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]), [1,2,3,4,5,7,9,10,11,12], "Basic tests");

//✔🐱‍🚀❤SOLUTION
function mergeArrays(arr1, arr2) {
    let newArr = [];

    // Добавляем все элементы из первого массива
    for (let i = 0; i < arr1.length; i++) {
        if (!newArr.includes(arr1[i])) {
            newArr.push(arr1[i]);
        }
    }
    // Добавляем элементы из второго массива
    for (let j = 0; j < arr2.length; j++) {
        if (!newArr.includes(arr2[j])) {
            newArr.push(arr2[j]);
        }
    }
    // Сортируем результат
    return newArr.sort((a, b) => a - b);
}
// function mergeArrays(arr1, arr2) {
//     // Объединяем массивы и убираем дубликаты с помощью Set
//     let merged = [...arr1, ...arr2];
//     let unique = [...new Set(merged)];
//     // Сортируем по возрастанию
//     return unique.sort((a, b) => a - b);
// }

console.log(mergeArrays([1,2,3,4], [5,6,7,8]));
console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2]));
console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]));