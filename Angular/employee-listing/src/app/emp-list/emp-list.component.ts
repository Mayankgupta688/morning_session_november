import { Component } from '@angular/core';
import * as data from "../data/employees.json";

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent {
  empList = [];
  constructor() { 
    this.empList = data.empList;
  }

}
