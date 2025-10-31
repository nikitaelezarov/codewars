//✨It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.

//👀TESTS
// Test.assertEquals(getAverage([2,2,2,2]),2);
// Test.assertEquals(getAverage([1,2,3,4,5,]),3);
// Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);

//✔🐱‍🚀❤SOLUTION
function getAverage(marks) {
    // Суммируем все баллы и делим на количество предметов
    // Math.floor округляет в меньшую сторону до ближайшего целого
    let sumArithmetic = 0;
    // Суммируем все баллы через цикл for
    for (let i = 0; i < marks.length; i++) {
        sumArithmetic += marks[i];
    }
    let result = Math.floor(sumArithmetic / marks.length);
    return result
}

console.log(getAverage([2, 2, 2, 2]))//2
console.log(getAverage([1, 2, 3, 4, 5]))//3
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]))//1

