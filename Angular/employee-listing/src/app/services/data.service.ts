import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export default class DataService {
    constructor(private _http: HttpClient) { }

    getData() {
        return this._http.get("http://localhost:3000/empList");
    }

    deleteData(empId) {
        return this._http.delete("http://localhost:3000/empList/" + empId)
    }
}