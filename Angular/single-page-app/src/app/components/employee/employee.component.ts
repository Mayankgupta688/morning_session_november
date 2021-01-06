import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient} from "@angular/common/http";
import { Location } from "@angular/common";
import DataService from 'src/app/services/data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  empDetails = {};
  constructor(public _route: ActivatedRoute, private _http: HttpClient, private _router: Router, private _location : Location, private _dataService: DataService) {
    debugger;
    this.empDetails = this._dataService.getSpecificEmployee(_route.snapshot.params.userIdData)
  }

  goBackFunction(): void {
    this._location.back();
  }

}
