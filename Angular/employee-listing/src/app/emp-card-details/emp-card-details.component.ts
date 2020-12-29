import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-emp-card-details',
  templateUrl: './emp-card-details.component.html',
  styleUrls: ['./emp-card-details.component.css']
})
export class EmpCardDetailsComponent {
  @Input() employeeInput: any;
  @Output() notifyToDelete: EventEmitter<any> = new EventEmitter<any>();

  deleteEmployeeWithId(empId, empName) {
    this.notifyToDelete.emit({
      employeeId: empId,
      employeeName: empName
    });
  }
  constructor() { 
  }
}
