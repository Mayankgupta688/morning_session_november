import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeComponent } from "./employee/employee.component";
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpCardComponent } from './emp-card/emp-card.component';

@NgModule({
    declarations: [EmployeeComponent, EmpDetailsComponent, EmpCardComponent],
    imports: [BrowserModule],
    bootstrap: [EmpCardComponent]
})
export class AppModule {}