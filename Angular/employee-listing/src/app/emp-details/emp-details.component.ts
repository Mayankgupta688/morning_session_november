import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent {
  empDetails: any = {
    name: "Mayank",
    id: 1,
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjIdJs-5Tc337X2xldrsr-H0UZSrhJZM-BwA&usqp=CAU",
    createdAt: this.getCurrentTime()
  }

  currentTime = this.getCurrentTime();

  getCurrentTime() {
    return `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
  }

  triggerInterval() {
    setInterval(() => {
      this.currentTime = this.getCurrentTime();
    }, 1000);
  }

  triggerTimeout() {
    setTimeout(() => {
      this.empDetails.name = "Ankit..."
    }, 4000);
  }

  constructor() {
    this.triggerTimeout();
    this.triggerInterval();
  }
}
