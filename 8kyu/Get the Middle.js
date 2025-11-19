//✨ You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
//
// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

//👀TESTS
//   doTest("test", "es");
//         doTest("testing", "t");
//         doTest("middle", "dd");
//         doTest("A", "A");
//✔🐱‍🚀❤SOLUTION
function getMiddle(s) {
    const middle = Math.floor(s.length / 2)
    if (s.length % 2 === 0) {
        return s.substring(middle - 1, middle + 1)
    } else {
        return s.substring(middle, middle + 1)
    }
}

console.log(getMiddle("test"));    // "es"
console.log(getMiddle("testing")); // "t"
console.log(getMiddle("middle"));  // "dd"
console.log(getMiddle("A"));       // "A"


