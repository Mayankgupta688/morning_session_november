import { Component } from '@angular/core';
import DataService from '../services/data.service';

@Component({
  selector: 'app-first-employee',
  templateUrl: './first-employee.component.html',
  styleUrls: ['../styles/card-style.css']
})
export class FirstEmployeeComponent{
  empList =  [];
  showTemplate = false;
  constructor(private _dataService: DataService) { }

  getData() {
    this.showTemplate = true;

    var returnData: any = this._dataService.getData();
    if(returnData.operator) {
      returnData.subscribe((list: any[]) => {
       this.empList = list;
       this._dataService.employees = list;
      })
    } else {
      this.empList = this._dataService.employees;
    }
    debugger;
  }

  hideArticle() {
    this.showTemplate = false;
  }

}
