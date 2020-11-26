function updateSalutation() {
    // 1. Get the value of Input Box
    // 2. Replace the innerText of div
    // 3. Update Input Box to Blank

    var inputValue = document.getElementById("user_input").value;
    document.getElementById("my_container").innerText = `Hello ${inputValue}....`
    document.getElementById("user_input").value = "";
}

function changeData() {
    document.getElementById("my_container").innerText = "Welcome to the Session...";
}

function updateDefaultColor(event, color) {
    event.target.style.color = color;
}


function updateColor(color) {
    document.getElementById("my_container").style.color = color;
}

function updateInputColor(color) {
    document.getElementsByTagName("input")[0].style.color = color;
}

function updateHeaderData() {
    document.getElementById("dynamic_text").innerText = document.getElementById("dynamic_input").value;
}