var name = "Ankit";
var age = 1;

if(name == "Mayank" && age > 5) {
    console.log("Success");
} else if(name == "Ankit" && age > -1) {
    console.log("Partial Success... 1")
} else if(name == "Ankit" && age == 1) {
    console.log("Partial Success... 2")
} else if(name == "Ankit" && age > 0) {
    console.log("Partial Success... 3")
} else {
    console.log("Failure...")
}

switch(age > 15) {
    case true:
        console.log("This is True")
        break;
    
    case false:
        console.log("This is False");
}