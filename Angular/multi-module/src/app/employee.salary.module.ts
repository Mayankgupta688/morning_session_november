import { NgModule } from "@angular/core";
import { SalaryInfoComponent } from "./salaryComponents/salary-info/salary-info.component";

@NgModule({
    declarations: [SalaryInfoComponent],
    exports: [SalaryInfoComponent]
})
export class EmployeeSalaryModule {}