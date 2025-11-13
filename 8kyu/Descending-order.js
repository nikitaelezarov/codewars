//✨ Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//
// Examples:
// Input: 42145 Output: 54421
//
// Input: 145263 Output: 654321
//
// Input: 123456789 Output: 987654321

//👀TESTS
//      assert.strictEqual(descendingOrder(0), 0)
//     assert.strictEqual(descendingOrder(1), 1)
//     assert.strictEqual(descendingOrder(111), 111)
//     assert.strictEqual(descendingOrder(15), 51)
//     assert.strictEqual(descendingOrder(1021), 2110)
//     assert.strictEqual(descendingOrder(123456789), 987654321);

//✔🐱‍🚀❤SOLUTION
function descendingOrder(n){
     let newOrder = (String(n).split('').sort((a,b) => b - a).join(''));
    return  parseInt(newOrder);
}
function descendingOrder1(n){
    // Преобразуем число в строку, затем в массив символов
    let str = n.toString()
    let arr = []
    for (let i = 0; i < str.length; i++) {
        arr.push(parseInt(str[i]))
    }
    // Сортируем массив в порядке убывания с помощью пузырьковой сортировки
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                // Меняем местами
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    // Преобразуем отсортированный массив обратно в число
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return parseInt(result);
}

console.log(descendingOrder(0))
console.log(descendingOrder(1))
console.log(descendingOrder(111))
console.log(descendingOrder(15))
console.log(descendingOrder(1021))
console.log(descendingOrder(123456789))