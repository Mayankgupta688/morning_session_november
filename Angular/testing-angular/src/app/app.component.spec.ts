import { componentFactoryName } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const component = TestBed.createComponent(AppComponent);
    const app = component.nativeElement;
    expect(app).toBeTruthy();
  });

  it("should render H1 Element", () => {
    const component = TestBed.createComponent(AppComponent);
    component.detectChanges();
    var app = component.nativeElement;
    expect(app.querySelector("h1")).toBeTruthy();
  })

  it("should render the specific text inside H1 Element", () => {
    const component = TestBed.createComponent(AppComponent);
    component.detectChanges();
    var app = component.nativeElement;
    expect(app.querySelector("h1").textContent).toBe("Hello World.... This is Testing Application...");
  })

  it("should render H2 Element", () => {
    const component = TestBed.createComponent(AppComponent);
    component.detectChanges();
    var app = component.nativeElement;
    expect(app.querySelector("h2")).toBeTruthy();
  })

  it("should render H2 Element", () => {
    const component = TestBed.createComponent(AppComponent);
    component.detectChanges();
    var app = component.nativeElement;
    expect(app.querySelector("h2").textContent).toBe("Lets Start with Testing This Component");
  })

  it("should render user Name", () => {
    const component = TestBed.createComponent(AppComponent);
    component.detectChanges();
    var app = component.nativeElement;
    expect(app.querySelector("b").textContent).toBe("User Name is Mayank Gupta");
  })

  it("should render updated user Name", () => {
    const component = TestBed.createComponent(AppComponent);
    component.detectChanges();
    var app = component.nativeElement;
    expect(app.querySelector("b").textContent).toBe("User Name is Mayank Gupta");

    var componentInstance = component.componentInstance;
    componentInstance.userName = "Anshul Gupta";
    component.detectChanges();
    expect(app.querySelector("b").textContent).toBe("User Name is Anshul Gupta");

  })

  it("should render updated user Name calling Function", () => {
    const component = TestBed.createComponent(AppComponent);
    component.detectChanges();
    var app = component.nativeElement;
    expect(app.querySelector("b").textContent).toBe("User Name is Mayank Gupta");

    var componentInstance = component.componentInstance;
    componentInstance.updateName()
    component.detectChanges();
    expect(app.querySelector("b").textContent).toBe("User Name is Aniket Gupta");

  })

  it("should contain user information", () => {
    const component = TestBed.createComponent(AppComponent)
    var app = component.nativeElement;
    expect(app.getElementsByClassName("user_details").length).toBe(3)
  })

  it("should contain employee length to be equal to 3", () => {
    const component = TestBed.createComponent(AppComponent)
    var app = component.nativeElement;
    component.detectChanges();
    expect(app.getElementsByClassName("emp_name").length).toBe(2)

    var componentInstance = component.componentInstance;
    componentInstance.employeeList = [{
      name: "Mayank Gupta",
      age: 10
    }, {
      name: "Anshul Gupta",
      age: 30
    }, {
      name: "Aniket",
      age: 30
    }]

    component.detectChanges();
    expect(app.getElementsByClassName("emp_name").length).toBe(3)
  })

  it("should update user name to Aniket Gupta", () => {
    const component = TestBed.createComponent(AppComponent)
    var app = component.componentInstance;
    expect(app.userName).toBe("Mayank Gupta");
    app.updateName();
    expect(app.userName).toBe("Aniket1 Gupta");
  })

});


