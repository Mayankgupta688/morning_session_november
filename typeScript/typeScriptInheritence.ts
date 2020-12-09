class Employee {
    name: string;
    age: number;
    designation: string;
    private salary: number
    constructor(name: string, age: number, designation: string) {
      this.name = name;
      this.age = age;
      this.designation = designation;
      this.salary = 1000;
    }
  
    protected calculateGrade(): number {
      if(this.salary > 500) {
        return 1;
      } else {
        return 2;
      }
    }
  
    getSalaryGrade(): number {
      return this.calculateGrade()
    }
  }
  
  class Manager extends Employee {
    teamSize: number;
    teamSalary: number;
  
    constructor(name: string, age: number, designation: string, size: number, salary: number) {
      super(name, age, designation);
      this.teamSalary = salary;
      this.teamSize = size;
    }
  
    getManagerSalary() {
      return this.calculateGrade;
    }
  }
  
  class Director extends Manager {
    managerIncharge: number;
    constructor(name: string, age: number, designation: string, size: number, salary: number, charge: number) {
      super(name, age, designation, size, salary);
      this.managerIncharge = charge;
    }
  
    getManagerCount() {
      return this.managerIncharge;
    }
  }
  
  var employeeOne = new Employee("Mayank", 20, "Developer");
  var managerOne = new Manager("Mayank", 20, "Manager", 10, 10000);
  var directorOne = new Director("Mayank", 20, "Manager", 10, 10000, 20);
  directorOne.
  
  console.log(managerOne.getManagerSalary())
  
  console.log(employeeOne.getSalaryGrade())
  console.log(employeeOne.age)