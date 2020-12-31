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
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component'; 
import { FormsModule } from "@angular/forms";
import { GetDataComponent } from './get-data/get-data.component';
import { HttpClientModule } from "@angular/common/http";
import { FirstEmployeeComponent } from './first-employee/first-employee.component'

@NgModule({
    declarations: [
        EmployeeComponent, 
        EmpDetailsComponent, 
        EmpCardComponent, 
        ThemeComponent, 
        UsePipesComponent,
        ConvertDataPipe,
        EmpListComponent,
        EmpCardDetailsComponent,
        TwoWayBindingComponent,
        GetDataComponent,
        FirstEmployeeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    bootstrap: [GetDataComponent, FirstEmployeeComponent]
})
export class AppModule {}