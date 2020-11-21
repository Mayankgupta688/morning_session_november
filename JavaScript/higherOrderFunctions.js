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

var nameList = [];

userList.forEach(function(data) {
    nameList.push(data.name)
})

console.log(nameList)