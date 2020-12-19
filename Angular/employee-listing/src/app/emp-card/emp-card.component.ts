import { Component, OnInit } from '@angular/core';
import * as data from "../data/employees.json";

@Component({
  selector: 'app-emp-card',
  templateUrl: './emp-card.component.html',
  styleUrls: ['./emp-card.component.css']
})
export class EmpCardComponent {
  empDetails: any = [];
  debugger;
  constructor() {
    this.empDetails = data["default"].empList;
    
    setTimeout(() => {
      this.empDetails[0].name = "Random Name";
    }, 10000)
  }

  deleteEmployee(empId) {
    debugger;
    this.empDetails = this.empDetails.filter((emp) => {
      return emp.id != empId;
    })
  }

  addNewEmployee() {
    debugger;
    this.empDetails.push({
      name: "Fsdfds Gupta",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjIdJs-5Tc337X2xldrsr-H0UZSrhJZM-BwA&usqp=CAU",
      createdAt: new Date().toDateString()
    });
  }

}
