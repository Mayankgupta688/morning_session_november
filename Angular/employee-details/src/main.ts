import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NgModule, Component } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';


@Component({
    selector: "app-header",
    template: "<h1>Hello World... This is Mayank</h1>"
})
class EmployeeComponent {}

@Component({
    selector: "app-footer",
    template: "<h2>Welcome to Angular First Session...</h2>"
})
class EmployeeFooterComponent {}


@NgModule({
    declarations: [EmployeeComponent, EmployeeFooterComponent],
    imports: [BrowserModule],
    bootstrap: [EmployeeComponent, EmployeeFooterComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)