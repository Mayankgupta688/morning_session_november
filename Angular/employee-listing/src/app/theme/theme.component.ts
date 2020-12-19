import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
  employee = {
    "id":"11",
    "createdAt":"2019-07-11T08:05:38.164Z",
    "name":"mayank gupta",
    "avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjIdJs-5Tc337X2xldrsr-H0UZSrhJZM-BwA&usqp=CAU"
  } 


  theme = "white-theme";

  updateThemeFromInput(inputDOM) {
    this.theme = `${inputDOM.value}-theme`;
    inputDOM.value = "";
  }

  updateTheme(color) {
    debugger;
    this.theme = `${color}-theme`
  }

  constructor() { }

  ngOnInit(): void {
  }

}
