$("#removeAllButton").on("click", function(event) {
    removeAll();
})

$("#addNewEmployee").on("click", function(event) {
    addNewEmployeeToList()
})

function addNewEmployeeToList() {

    var userName = $("#userName").val();
    var userAge = $("#userAge").val();
    var userDesignation = $("#userDesignation").val();

    var allHeadings = $(".employee_name");
    
    var nameExist = false;
    for(var i = 0; i< allHeadings.length; i++) {
        var innerTextValue = allHeadings[i].innerText;
        if(innerTextValue == `Employee Name: ${userName}`) {
            nameExist = true;
            break;
        }
    }

    if(nameExist) {
        alert("Name already exists");
        return;
    }
    
    if(userName && userAge && userDesignation) {
        containerReference.append(`
            <div>
                <h1 class="employee_name">Employee Name: ${userName}</h1>
                <h3>Employee Age: ${userAge}</h3>
                <h3>Employee Designation: ${userDesignation}</h3>
                <input type="button" value="Delete" onclick="deleteEmployee('${userName}')" />
                <hr/>
            </div>
        `)

        $("#userName").val("");
        $("#userAge").val("");
        $("#userDesignation").val("");
    } else {
        alert("Complete the Form");
    }
}