var randomNumberGenerator = Rx.Observable.create((observer) => {
    setInterval(() => {
        observer.next(`${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`);
    }, 1000);
});


randomNumberGenerator.subscribe((data) => {
    document.getElementById("random_number").textContent = "Current Time is: " + data;
});


randomNumberGenerator.subscribe((data) => {
    document.getElementById("get_random_number").textContent = "Current Time is: " + data;
});


