import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export default class DataService {
    employees: any = [];
    constructor(private _http: HttpClient) { }

    getData() {
        if(this.employees.length == 0) {
            return this._http.get("http://localhost:3000/empList");
        } else {
            return this.employees;
        }
    }

    deleteData(empId) {
        return this._http.delete("http://localhost:3000/empList/" + empId)
    }
}