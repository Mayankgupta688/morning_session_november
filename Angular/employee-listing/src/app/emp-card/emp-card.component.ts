import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-card',
  templateUrl: './emp-card.component.html',
  styleUrls: ['./emp-card.component.css']
})
export class EmpCardComponent {
  empDetails: any = [{
    name: "Mayank Gupta",
    id: 1,
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjIdJs-5Tc337X2xldrsr-H0UZSrhJZM-BwA&usqp=CAU",
    createdAt: new Date().toDateString()
  }, {
    name: "Anshul Gupta",
    id: 2,
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjIdJs-5Tc337X2xldrsr-H0UZSrhJZM-BwA&usqp=CAU",
    createdAt: new Date().toDateString()
  }];

  constructor() { }

}
