import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { EmpListingComponent} from "./components/emp-listing/emp-listing.component"; 
import { AddEmployeeComponent } from "./components/add-employee/add-employee.component";
import { ModifyEmployeeComponent } from "./components/modify-employee/modify-employee.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { EmployeeComponent } from './components/employee/employee.component';

import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from '@angular/forms';

var _routes: Routes = [
  { path: "home", component: EmpListingComponent },
  { path: "addemployee", component: AddEmployeeComponent },
  { path: "modifyemployee/:id", component: ModifyEmployeeComponent },
  { path: "employeedetails/:userIdData", component: EmployeeComponent },
  { path: "employee/:userIdData", component: EmployeeComponent },
  { path: "", redirectTo: "home", pathMatch: "full"},
  { path: "**", component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    HomePageComponent,
    EmpListingComponent,
    AddEmployeeComponent,
    ModifyEmployeeComponent,
    PageNotFoundComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(_routes)
  ],
  bootstrap: [ HomePageComponent ]
})
export class AppModule { }
