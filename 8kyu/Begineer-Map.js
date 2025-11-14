//✨ Given an array of integers, return a new array with each value doubled.
//
// For example:
//
// [1, 2, 3] --> [2, 4, 6]


//👀TESTS
// assert.deepEqual(maps([1, 2, 3]), [2, 4, 6]);
//     assert.deepEqual(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]);
//     assert.deepEqual(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);

//✔🐱‍🚀❤SOLUTION
function maps(x){
let newArray = x.map(x => x * 2)
    return newArray;
}
// function maps(x){
//     let newArray = [];
//     x.forEach(item => {
//         newArray.push(item * 2);
//     });
//     return newArray;
// }

console.log(maps([1, 2, 3]));
console.log(maps([4, 1, 1, 1, 4]));
console.log(maps([2, 2, 2, 2, 2, 2]));
