//✨ Write a function that adds a named property to an object. It must be possible to set the property to a new value. If the property already exists on the object, and error should be thrown.


//👀TESTS
// Test.expect(obj.name === "Palle");
// Test.expect(obj.name === "Dylan");

//✔🐱‍🚀❤SOLUTION
function addProperty(obj, prop, value) {
    // Проверяем, что свойства еще нет в объекте
    if(obj && prop && !(prop in obj)) {
        obj[prop] = value;
        return obj;
    }else{
        throw new Error("Property already exists or invalid parameters")
    }
}
const person = { name: "Palle" };
addProperty(person, "age", 30);
console.log(person); // { name: "Palle", age: 30 }
console.log(person.name === "Palle"); // true
console.log(person.name === "Dylan"); // false

// function addProperty(obj, prop, value) {
//     if (prop in obj) throw new Error()
//     obj[prop] = value
// }
// throw new Error('Error message')
// throw "Error2"; // генерирует исключение, значением которого является строка
// throw 42; // генерирует исключение, значением которого является число 42
// throw true; // генерирует исключение, значением которого является логическое значение true
