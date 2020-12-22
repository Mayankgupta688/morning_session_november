import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-emp-card-details',
  templateUrl: './emp-card-details.component.html',
  styleUrls: ['./emp-card-details.component.css']
})
export class EmpCardDetailsComponent {
  @Input() employeeInput: any;
  constructor() { }
}
