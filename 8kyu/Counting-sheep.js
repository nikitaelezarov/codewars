//✨ Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
//
// For example,
//
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
//
// Hint: Don't forget to check for bad values like null/undefined


//👀TESTS
// assert.strictEqual(countSheeps(sheep), expected);

//✔🐱‍🚀❤SOLUTION
function countSheeps(sheep) {
    let numSheeps = sheep.filter((item) => item === true);
    return numSheeps.length;
  //   let result = 0;
  //   for(const item of sheep) {
  //       if(item === true) {
  //           result += 1;
  //       }
  //   }
  // return result;
}

console.log(countSheeps([]))
console.log(countSheeps([undefined]));
console.log(countSheeps([null]));
console.log(countSheeps([false]));
console.log(countSheeps([true]));
console.log(countSheeps([undefined,null,false,true]));
console.log(countSheeps([undefined,null,false,true,true,false,null,undefined]));
console.log(countSheeps([true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true]));
