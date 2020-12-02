document.getElementById("container").innerHTML = "<h1>Welcome to the Application....";

$("#container").append("<h1>Welcome to the Application.... jQuery</h1>");

$(".otherDiv").append("<h2>This is Sample Data...");

function addClass() {
    $(".otherDiv").addClass("colorRed");
}

function removeClass() {
    $(".otherDiv").remove();
}

function applyColor() {
    //document.getElementById("colorInput").value
    var colorSelected = $("#colorInput").val();
    $("body").css("color", colorSelected);
    $("#colorInput").val("");
    $("#colorInput").css("margin-left", "10px")
}