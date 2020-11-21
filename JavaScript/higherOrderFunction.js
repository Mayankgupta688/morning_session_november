var userList = [{
    name: "Mayank",
    age: 20
}, {
    name: "Anshul",
    age: 15
}, {
    name: "Ankit", 
    age: 50
}];

debugger;

var newArray = userList.map(function(employee, index, originalArray) {
    return {
        name: originalArray[index].name + " Gupta",
        age: employee.age + 1
    }
})

var newArray = userList.filter(function(employee) {
    return employee.age % 2 == 0;
})

var userList = [1, 2, 3, 4]


var newArray = userList.reduce(function(total = 0, data) {
    debugger;
    return total * data
})

var userDetails = [{
    name: "Mayank",
    age: 20
}, {
    name: "Anshul",
    age: 15
}, {
    name: "Ankit", 
    age: 50
}];

var isDivisible = userDetails.some(function(employee) {
    return employee.age > 40
})

console.log(isDivisible)