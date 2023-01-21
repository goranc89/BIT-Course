function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}

function Employee(name, surname, job, salary) {
  Person.call(this, name, surname);
  this.job = job;
  this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getData = function () {
  return this.name + " " + this.surname + " " + this.salary;
};

Employee.prototype.getSalary = function () {
  return "The salary is: " + this.salary;
};

Employee.prototype.increaseSalary = function () {
  return (this.salary = this.salary + this.salary * 0.1);
};

var john = new Employee("John", "Roberts", "developer", 3000);
console.log(john.getSalary());
console.log(john.increaseSalary());
console.log(john.getSalary());
console.log(john.getData());

function Developer(name, surname, job, salary, specialization) {
  Employee.call(this, name, surname, job, salary);
  this.specialization = specialization;
}
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function () {
  return "The name of specialization is: " + this.specialization;
};

var simonDeveloper = new Developer("Simon", "Cage", "backend", 25000, "tester");
console.log(simonDeveloper.getSpecialization());

function Manager(name, surname, job, salary, department) {
  Employee.call(name, surname, job, salary);
  this.department = department;
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function () {
  return "The name of department is: " + this.department;
};

Manager.prototype.changeDepartment = function (newDepartment) {
  return (this.department = newDepartment);
};

var joeManager = new Manager("Joe", "Quinton", "team leader", 60000, "it");
console.log(joeManager.getDepartment());
console.log(joeManager.changeDepartment("finance"));
console.log(joeManager.getDepartment());
