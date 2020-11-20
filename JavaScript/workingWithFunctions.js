function getName() {
    console.log("Mayank")
    console.log(Math.floor(Math.random() * 100))
}

getName();

function add(a, b) {
    return a + b;
}

var a = add(19, 10);
var b = add(30, 40);
var c = add(50, 2);

console.log(a + b - c)

// Represent Default Parameter Scenerio:

function add(numberOne = 10, numberTwo = 20) {
    return numberOne + numberTwo;
}

var a = add(50, 50, 100);

console.log(a);


