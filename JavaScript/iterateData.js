var myData = [1, 2, 3, 4, 5 , 7, 8];

// For Loop

for(var i = 0; i < myData.length; i++) {

    debugger;

    if(myData[i] % 2 == 1) {
        continue;
    }

    console.log(myData[i])
}


for(var data of myData) {
    console.log(data)
}


myData.forEach(function(x) {
    console.log(x);
})

myData.forEach(abc);

function abc(x) {
    console.log(x);
}