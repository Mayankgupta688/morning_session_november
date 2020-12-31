import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import DataService from "../services/data.service";

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['../styles/card-style.css']
})
export class GetDataComponent {
  empList: any = [];
  errorMessage = "";
  showList = false;
  user = {
    userName: "",
    userId: "",
    userAvatar: "",
    createdAt: "" 
  };
  constructor(private _http: HttpClient, private _dataService: DataService) { }

  getEmployeeList() {
    var returnData: any = this._dataService.getData();
    if(returnData.operator) {
      returnData.subscribe((list: any[]) => {
       this.empList = list;
       this._dataService.employees = list;
      })
    } else {
      this.empList = this._dataService.employees;
    }

    this.showList = true;
  }

  doNothing(empId) {
    this._dataService.deleteData(empId).subscribe((data) => {
      alert("Data Deleted Sucessfully....")
    }, (err) => {
      debugger;
    })
  }

  addEmployee() {
    this.user.createdAt = new Date().toTimeString();
    this._http.post("http://localhost:3000/empList", {
      id: this.user.userId,
      name: this.user.userName,
      avatar: this.user.userAvatar,
      createdAt: this.user.createdAt
    }).subscribe(() => {
      alert("Employee Added to Database....")
    })
  }

  updateEmployee(employeeId) {


    var employee = this.empList.filter((emp) => {
      return emp.id == employeeId
    })[0];

    this.user.createdAt = new Date().toTimeString();
    this._http.put("http://localhost:3000/empList/" + employeeId, {
      id: employeeId,
      name: employee.name + " Updated",
      avatar: employee.avatar,
      createdAt: employee.createdAt
    }).subscribe(() => {
      alert("Employee Added to Database....")
    })

    // this._http.patch("http://localhost:3000/empList/" + employeeId, {
    //   name: employee.name + " Patched"
    // }).subscribe(() => {
    //   alert("Employee Added to Database....")
    // })
  }

}
