import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeComponent } from "./employee/employee.component";
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpCardComponent } from './emp-card/emp-card.component';
import { ThemeComponent } from './theme/theme.component';

@NgModule({
    declarations: [EmployeeComponent, EmpDetailsComponent, EmpCardComponent, ThemeComponent],
    imports: [BrowserModule],
    bootstrap: [ThemeComponent]
})
export class AppModule {}