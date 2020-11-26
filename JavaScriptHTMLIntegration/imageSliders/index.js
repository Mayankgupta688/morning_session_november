var imageIndex = 0;

function updateImage(operation) {
    if(operation == "next") {
        imageIndex = (imageIndex + 1) % 3
    }
    document.getElementById("image_container").src = `./images/1.PNG`;
}

var returnedInterval = setInterval(function() {
    imageIndex = (imageIndex + 1) % 3;
    document.getElementById("image_container").src = `./images/${imageIndex}.PNG`;
}, 1000)

function stopUpdate() {
    clearInterval(returnedInterval)
}

function removeImage() {
    document.getElementById("image_container").remove();
}

var colors = ["red", "green", "blue"]
colorIndex = 0;
setInterval(function() {
    colorIndex = (colorIndex + 1)%3
    document.getElementById("app_header").style.color = colors[colorIndex];
}, 500)