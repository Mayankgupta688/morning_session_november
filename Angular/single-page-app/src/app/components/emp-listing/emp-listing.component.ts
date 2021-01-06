import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router} from "@angular/router";
import DataService from 'src/app/services/data.service';

@Component({
  selector: 'app-emp-listing',
  templateUrl: './emp-listing.component.html',
  styleUrls: ['./emp-listing.component.css']
})
export class EmpListingComponent {
  empList = [];
  constructor(private _http: HttpClient, private _router: Router, private _dataService: DataService) { 
    this._dataService.getData().subscribe((data: any) => {
      this.empList = data;
      this._dataService.employees = data;
    })
  }

  showDetails(empId) {
    this._router.navigate(["employeedetails", empId]);
  }

  modifyDetails(empId) {
    this._router.navigate(["modifyemployee",empId]);
  }
}
