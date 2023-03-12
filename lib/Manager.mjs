// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// const Employee = require("./Employee");

import Employee from "./Employee.mjs";

export default class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

// let testManager = new Manager("James", 3, "frank@gmail.com", 653);
// console.log(testManager.getRole());
// console.log(testManager);
