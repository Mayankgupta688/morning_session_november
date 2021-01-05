import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  redirectToAddEmployee() {
    this._router.navigate(["addemployee"])
  }

  redirectToModifyEmployee() {
    this._router.navigate(["modifyemployee"])
  }

  redirectToSamplePage() {
    this._router.navigate(["xyz"])
  }

  redirectToEmployee(empId) {
    this._router.navigate(['employee', empId])
  }

}
