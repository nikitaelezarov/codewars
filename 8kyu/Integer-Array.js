//✨Given an array of integers your solution should find the smallest integer.
// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

//👀TESTS
// assert.strictEqual(findSmallestInt([78,56,232,12,8]),8, `findSmallestInt([78,56,232,12,8])`);
//     assert.strictEqual(findSmallestInt([78,56,232,12,18]),12, `findSmallestInt([78,56,232,12,18])`);
//     assert.strictEqual(findSmallestInt([78,56,232,412,228]),56, `findSmallestInt([78,56,232,412,228])`);
//     assert.strictEqual(findSmallestInt([78,56,232,12,0]),0, `findSmallestInt([78,56,232,12,0])`);
//     assert.strictEqual(findSmallestInt([1,56,232,12,8]),1, `findSmallestInt([1,56,232,12,8])`);

//✔🐱‍🚀❤SOLUTION

function findSmallestInt(arr) {
    let smallest = arr[0];// Предполагаем, что первый элемент — наименьший
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];// Находим меньшее число и обновляем smallest
        }
    }
    return smallest;
}

console.log(findSmallestInt([78, 56, 232, 12, 8]))

// function findSmallestInt(arr) {
//     return Math.min(...arr);
// }


