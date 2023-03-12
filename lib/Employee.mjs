// TODO: Write code to define and export the Employee class



export default class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email
  }

  getRole() {
    return "Employee"
  }
}

// let testEmp=new Employee("Prince", 2, "gdhd@gmai.com");
// console.log(testEmp.getName());
// console.log(testEmp.getId());
// console.log(testEmp.getEmail());
// console.log(testEmp.getRole());

