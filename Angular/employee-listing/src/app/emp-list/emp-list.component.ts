import { Component } from '@angular/core';
import * as data from "../data/employees.json";

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent {
  empList = [];
  filterListData = [];
  filterText = "";
  constructor() { 
    this.empList = data.empList;
    this.filterListData = this.empList;
  }

  filterList(inputFilter) {
    this.filterListData = this.empList.filter((emp) => {
      return emp.name.indexOf(inputFilter) > -1;
    });
  }

  deleteEmployee(empObject) {
    this.empList = this.empList.filter((emp) => {
      return emp.id != empObject.employeeId && emp.name != empObject.employeeName;
    })

    this.filterListData = this.empList;
  }

}
