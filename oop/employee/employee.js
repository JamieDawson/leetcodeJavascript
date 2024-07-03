/* Given a class Employee generate a sub-class Manager. The Employee class contains properties like id,
name,email and methods like getDetails()

The Manager class should inherit these properties and methods from the Employee class. Additionally, 

the Manager class should also have its own unique method assignWork() which takes in an array of Employee
instances and a string taskName,and assigns the task to each employee.
*/

class Employee {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  getDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}`;
  }
}

class Manager extends Employee {
  constructor(id, name, email) {
    super(id, name, email);
  }

  assignWork(employeeArray, taskName) {
    //loop thorugh each item in array and console log their task
    for (var i = 0; i < employeeArray.length; i++) {
      console.log(`${employeeArray[i].name} must ${taskName}`);
    }
  }
}

let employeeOne = new Employee(1, "jamie", "jamie@gmail.com");
let employeeTwo = new Employee(2, "john", "john@gmail.com");

let arr = [employeeOne, employeeTwo];

let manager = new Manager();
manager.assignWork(arr, "fix printer");

/*
1) Make class called Manager
2) inherite properties and methods from Employee inside Manager
3) Create assignWork() method. Parameters: employeeArray (array) taskName (string)
Loop thorugh the array and console log the Employee's name with the task.
*/

/*
Edge cases:
1) Empty array: 

*/
