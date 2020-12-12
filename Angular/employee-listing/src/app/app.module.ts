import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeComponent } from "./employee/employee.component";

@NgModule({
    declarations: [EmployeeComponent],
    imports: [BrowserModule],
    bootstrap: [EmployeeComponent]
})
export class AppModule {}