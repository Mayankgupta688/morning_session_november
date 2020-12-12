import { Component } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./employee.component.html",
    styleUrls: ["./employee.component.css", "../styles/employee.other.component.css"]
})
export class EmployeeComponent {
    userName: string = "Mayank";
    currentTime: string = `${new Date().getHours()} : ${new Date().getMinutes()}: ${new Date().getSeconds()}`;
    counter: number = 0;
    randomNumber: number = 0;

    imageUrl: string = "https://static.toiimg.com/thumb/msid-58475411,width-748,height-499,resizemode=4,imgsize-142947/.jpg";
    imageTitle: string = "Some Random Image New..";
    imageAlt: string = "Image Broken..."

    buttonName: string = "Update Name for Current User...";
    buttonNameOne: string = "Update Name for Current User One...";
    buttonNameTwo: string = "Update Name for Current User Two...";

    constructor() {
        setTimeout(() => {
            this.userName = "Anshul";
            this.buttonName ="The Content is Already Updated..."
        }, 5000)

        setInterval(() => {
            this.currentTime = `${new Date().getHours()} : ${new Date().getMinutes()}: ${new Date().getSeconds()}`;
            this.randomNumber = Math.floor(Math.random() * 1000);
            this.counter = this.counter + 1;
        }, 1000);
    }
}