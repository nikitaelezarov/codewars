//✨ DESCRIPTION
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
//
//     For example, for [1, 2, 2] it should return 9 because


//👀TESTS
// assert.strictEqual(squareSum([1,2]), 5);
// assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
// assert.strictEqual(squareSum([]), 0);

//✔🐱‍🚀❤SOLUTION
function squareSum(numbers) {
//     const el1 = numbers[0];
//     const squareEl1 = Math.pow(el1, 2);
//
//     const el2 = numbers[1];
//     const squareEl2 = el2 ** 2;
//     console.log('squareEl1 :', squareEl1,);
//     console.log('squareEl2 :', squareEl2,);
// }

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    const el = numbers[i];
    const squareEl = el ** 2;
    sum = sum + squareEl
}
return sum
}

console.log(squareSum([1,2]));
console.log(squareSum([0, 3, 4, 5]));
console.log(squareSum([]));