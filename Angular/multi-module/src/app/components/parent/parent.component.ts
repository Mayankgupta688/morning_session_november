import { Component, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent{
  @ViewChildren("childComponent") childComponentReference;
  constructor() { }

  referChildData() {
    debugger;
    alert(this.childComponentReference._results[0].userName);
    this.childComponentReference._results[1].updateUserName("Anshul Gupta");
    this.childComponentReference._results[0].updateUserName("Aniket Gupta");
  }
}
