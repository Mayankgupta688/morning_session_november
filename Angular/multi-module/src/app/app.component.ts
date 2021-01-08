import { Component, ViewChild, ViewChildren } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("myName") reference;
  @ViewChildren(NgModel) modelUpdate;
  userName = "Mayank Gupta";
  userAge = "10";
  userDesignation = "Developer";

  onbuttonClick() {
    this.reference.nativeElement.style.color = "red";
    this.reference.nativeElement.style.border = "1px solid black";
    this.reference.nativeElement.style.padding = "10px";
  }

  startTracking() {
    debugger;
    this.modelUpdate._results[0].valueChanges.subscribe(() => {
      alert("Name is getting Updated...")
    })

    this.modelUpdate._results[1].valueChanges.subscribe(() => {
      alert("Age is getting Updated...")
    })

    this.modelUpdate._results[2].valueChanges.subscribe(() => {
      alert("Designation is getting Updated...")
    })
  }
}
