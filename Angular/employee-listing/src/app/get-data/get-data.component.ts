import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent {
  empList: any = [];
  constructor(private _http: HttpClient) { 
    debugger;
    this._http.get("https://5a530e1477e1d20012fa066a.mockapi.io/employeedata").subscribe((data: any) => {
      debugger;
      this.empList = data
    })
  }

  doNothing() {
    console.log("Do Nothing")
  }

}
