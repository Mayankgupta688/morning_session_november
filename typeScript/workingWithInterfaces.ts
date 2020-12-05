var userName: string = "Mayank";

interface IAddress {
  street: string;
  city: string,
  country: string
}

interface IEmployee {
  name: string,
  age: number,
  designation: string,
  salary?: number,
  bonus?: number,
  previousCompanies?: string[],
  address?: IAddress
}

var user: IEmployee = {
  name: "Mayank",
  age: 10,
  designation: 'Developer',
  salary: 1000,
  bonus: 10,
  previousCompanies: ["Stryker", "Bechtel", "Google"],
  address: {
    street: "Rohini",
    city: "Delhi",
    country: "India"
  }
}


var userTwo: IEmployee = {
  name: "Mayank",
  age: 10,
  designation: "Manager"
}

