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

var nameList = [];
var sumAge = 0;
var evenList = []

userList.forEach(function(data) {
    nameList.push(data.name);
    sumAge = sumAge + data.age;

    if(data.age % 2 == 0){
        evenList.push(data);
    } 
})

console.log(nameList)
console.log(sumAge)
console.log(evenList)

debugger;