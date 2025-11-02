//✨Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//👀TESTS
// assert.deepEqual(digitize(35231),[1,3,2,5,3]);
// assert.deepEqual(digitize(0),[0]);

//✔🐱‍🚀❤SOLUTION
function digitize(n) {
    let newAArray = []
    // Преобразуем число в строку, чтобы можно было перебирать цифры
    let str = n.toString();
    for (let i = str.length - 1; i >= 0; i--) {
        // Преобразуем каждый символ обратно в число и добавляем в массив
        newAArray.push(Number(str[i]))
    }
    return newAArray
}

console.log(digitize(35231))//[1,3,2,5,3]