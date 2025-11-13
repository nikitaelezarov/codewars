//✨ Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
//
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
//
// Mind the input validation.
//
// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.


//👀TESTS
// assert.strictEqual( sumArray(null)                     , 0 );
// assert.strictEqual( sumArray([ ])                      , 0 );
// assert.strictEqual( sumArray([ 3 ])                    , 0 );
// assert.strictEqual( sumArray([ 6, 2, 1, 8, 10 ])       , 16 );
//   assert.strictEqual( sumArray([ 0, 1, 6, 10, 10 ])      , 17 );
//   assert.strictEqual( sumArray([ -6, -20, -1, -10, -12 ]), -28 );
//   assert.strictEqual( sumArray([ -6, 20, -1, 10, -12 ])  , 3 );
//✔🐱‍🚀❤SOLUTION
function sumArray(array) {
    // Проверяем граничные случаи
    if (array == null || !array || array.length <= 1) {
        return 0;
    }
    let newArraySum = array.reduce((sum, num) => sum + num, 0);
    let newArray1 = Math.max(...array);
    let newArray2 = Math.min(...array);
    let result = newArraySum - newArray1 - newArray2;
    return result;
}
console.log(sumArray(null));//0
console.log(sumArray([ ]));//0
console.log(sumArray([ 3 ]));//0
console.log(sumArray([6, 2, 1, 8, 10]));//16
console.log(sumArray([ 0, 1, 6, 10, 10 ]))//17




