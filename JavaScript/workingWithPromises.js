var myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({name: "Mayank", age: 20})
        resolve({name: "Anshul", age: 20})
    }, 5000);
});



myPromise.then((data) => {
    console.log("Resolved: " + data.name)
}, (data => {
    console.log("Rejected: " + data)
}))

myPromise.then((data) => {
    alert("Other Resolved: " + data.name)
}, (data => {
    console.log(" OtherRejected: " + data)
}))

myPromise.then((data) => {
    console.log("Other Resolved: " + data.name)
}, (data => {
    console.log(" OtherRejected: " + data)
}))

console.log("dshfgkdsf");