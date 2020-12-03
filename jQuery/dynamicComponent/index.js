function addElements() {
    $("#container").append("<h2>This is the Other Header Tag</h2>")
}

$("#my_section").on("mouseover", "h1", function(event) {
    $(event.target).css("color", "red")
});

$("#my_section").on("mouseout", "h1",  function(event) {
    $(event.target).css("color", "black")
})

$("#container").on("mouseover", "h2", function(event) {
    debugger;
    $(event.target).css("color", "green")
});

$("#container").on("mouseout", "h2", function(event) {
    $(event.target).css("color", "black")
})