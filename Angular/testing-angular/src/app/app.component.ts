import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testing-angular';
  userName = "Mayank Gupta"

  updateName() {
    this.userName = "Aniket Gupta";
  }

  employeeList = [{
    name: "Mayank Gupta",
    age: 10
  }, {
    name: "Anshul Gupta",
    age: 30
  }]
}
