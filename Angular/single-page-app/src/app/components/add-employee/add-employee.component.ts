import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import DataService from 'src/app/services/data.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  employeeDetails = {
    id: "",
    avatar: "",
    name: "",
    createdAt: new Date().toDateString()
  }
  constructor(private _dataService: DataService, private _router: Router) { }

  addEmployee() {
    debugger;
    this._dataService.addEmployee(this.employeeDetails).subscribe((data) => {
      alert("Employee Added to the Database");
      this._router.navigate(["home"])
    })
  }

}
