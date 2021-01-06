import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import DataService from 'src/app/services/data.service';

@Component({
  selector: 'app-modify-employee',
  templateUrl: './modify-employee.component.html',
  styleUrls: ['./modify-employee.component.css']
})
export class ModifyEmployeeComponent {
  employee = {};
  constructor(private _http: HttpClient, private _dataService: DataService, private _route: ActivatedRoute) { 
    this.employee = this._dataService.getSpecificEmployee(this._route.snapshot.params.id);
  }

  updateEmployeeData() {
    this._dataService.updateEmployee(this.employee)
  }
}
