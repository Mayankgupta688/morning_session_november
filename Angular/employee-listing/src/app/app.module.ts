import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeComponent } from "./employee/employee.component";
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpCardComponent } from './emp-card/emp-card.component';
import { ThemeComponent } from './theme/theme.component';
import { UsePipesComponent } from './use-pipes/use-pipes.component';
import ConvertDataPipe from "./pipes/convert-data.pipe";
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpCardDetailsComponent } from './emp-card-details/emp-card-details.component'; 

@NgModule({
    declarations: [
        EmployeeComponent, 
        EmpDetailsComponent, 
        EmpCardComponent, 
        ThemeComponent, 
        UsePipesComponent,
        ConvertDataPipe,
        EmpListComponent,
        EmpCardDetailsComponent
    ],
    imports: [BrowserModule],
    bootstrap: [EmpListComponent]
})
export class AppModule {}