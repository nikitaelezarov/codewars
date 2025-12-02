//✨ Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.
//
// keep order of values like in input array
// if type is not presented in input, no corresponding property are expected
// So, for this input:
//
// ['a', 1, 2, false, 'b']
// expected output is:
//
// {
//   number: [1, 2],
//   string: ['a', 'b'],
//   boolean: [false]
// }

//👀TESTS
//   assert.deepEqual(separateTypes(['a', 1, 2, false, 'b']), {number: [1, 2],  string: ['a', 'b'], boolean: [false]});
//assert.deepEqual(separateTypes(['a', 1, 2 ]), {number: [1, 2],  string: ['a']});
//✔🐱‍🚀❤SOLUTION
function separateTypes(input) {
    const result = {};
        for (const item of input) {
            const type = typeof item;

            if (!result[type]) {
                result[type] = [];
            }
            result[type].push(item);
        }
        return result;
}

console.log(separateTypes(['a', 1, 2, false, 'b']))
console.log(separateTypes(['a', 1, 2 ]))