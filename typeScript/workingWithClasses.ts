class Employee {
    empName: string = "";
    empAge: number = 0;
    empDesignation: string = "";
    empSalary: number = 0;
    empBonus: number = 0;
    address: string = "";
  
    constructor(name: string, age: number, designation: string, salary: number, bonus: number, address: string) {
      this.empName = name;
      this.empAge = age;
      this.empDesignation = designation;
      this.empSalary = salary;
      this.empBonus = bonus;
      this.address = address;
    }
  
    getDetails() {
      console.log(this.empName)
      console.log(`Age is ${this.empAge}`)
      console.log(`Designation is ${this.empDesignation}`)
    }
  
    updateSalary(percent: number) {
      this.empSalary = Math.floor((1 + (percent / 100)) * this.empSalary);
    }
  }
  
  var employeeOne = new Employee("Mayank", 10, "Developer", 100, 10, "India");
  employeeOne.getDetails()
  console.log(`Initial Salary ${employeeOne.empSalary}`);
  employeeOne.updateSalary(10);
  console.log(`Final Salary ${employeeOne.empSalary}`);
  
  var employeeTwo = new Employee("Aniket", 10, "Developer", 100, 10, "Delhi");
  employeeTwo.getDetails();
  employeeTwo.updateSalary(20);
  console.log(`Final Salary for ${employeeTwo.empName} is ${employeeTwo.empSalary}`);
  
  var employeeThree = new Employee("Anshul", 10, "Developer", 100, 10, "Indonasia");
  employeeThree.getDetails();
  console.log(employeeThree.empSalary)