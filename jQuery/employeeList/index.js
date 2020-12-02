var employeeList = [{
    name: "Mayank",
    age: 10,
    designation: "Developer"
}, {
    name: "Ankit",
    age: 10,
    designation: "Developer"
}, {
    name: "Anshul Gupta",
    age: 10,
    designation: "Developer"
}, {
    name: "Meha",
    age: 20,
    designation: "Manager"
}];

var filteredList = employeeList;

var containerReference = $("#container");

function showEmployees() {
    containerReference.empty();

    if(filteredList.length > 0) {
        filteredList.forEach(function(employee) {
            containerReference.append(`
                <div>
                    <h1 class="employee_name">Employee Name: ${employee.name}</h1>
                    <h3>Employee Age: ${employee.age}</h3>
                    <h3>Employee Designation: ${employee.designation}</h3>
                    <input type="button" value="Delete" onclick="deleteEmployee('${employee.name}')" />
                    <hr/>
                </div>
            `)
        });
    } else {
        containerReference.append("<h1>No Employees in the List...");
    }
}

function deleteEmployee(name) {
    alert("Employee Delete" + name);

    employeeList = employeeList.filter(function(employee) {
        return employee.name != name;
    })

    filteredList = employeeList;

    showEmployees();
}

function removeAll() {
    employeeList = [];
    filteredList = [];
    showEmployees();
}

function filterData(event) {
    var textValue = event.target.value;
    filteredList = employeeList.filter(function(employee) {
        return employee.name.indexOf(textValue) > -1
    })

    showEmployees();
}

showEmployees();