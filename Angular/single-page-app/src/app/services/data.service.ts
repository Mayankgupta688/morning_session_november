import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
    providedIn: "root"
})
export default class DataService {

    employees = [];
    constructor(private _http: HttpClient, private _router: Router) {}

    getData() {
        return this._http.get("https://5a530e1477e1d20012fa066a.mockapi.io/employeedata");
    }

    getSpecificEmployee(employeeId) {
        return this.employees.filter((employee) => {
            return employee.id == employeeId
        })[0]
    }

    updateEmployee(empDetails) {
        debugger;
        this._http.put("https://5a530e1477e1d20012fa066a.mockapi.io/employeedata/" + empDetails.id, empDetails).subscribe((data) => {
            alert("Employee Updated");
            this._router.navigate(["home"]);
        })  
    }

    addEmployee(empDetails) {
        debugger;
        return this._http.post("https://5a530e1477e1d20012fa066a.mockapi.io/employeedata", empDetails)
    }
}