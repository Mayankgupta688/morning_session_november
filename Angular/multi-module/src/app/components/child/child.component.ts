import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  userName = "Mayank Gupta"
  constructor() { }

  updateUserName(userName) {
    this.userName = userName;
  }

}
