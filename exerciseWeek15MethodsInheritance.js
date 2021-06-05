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
    return this.name + ' ' + this.surname + ', ' + this.salary;
}

Employee.prototype.getSalary = function () {
    console.log(this.salary);
}

Employee.prototype.increaseSalary = function () {
    return this.salary = this.salary + ((this.salary *10) / 100);
}


function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function () {
    console.log(this.specialization);
}


function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function () {
    console.log(this.department);
}

Manager.prototype.changeDepartment = function (newDepartment) {
    this.department = newDepartment;
    return this.department;
}


//testing

var osoba = new Person('Marina', 'Varadjanin');
var zaposleni = new Employee('Marina', 'Varadjanin', 'non stop blabber', 1000 );
var developer = new Developer('Pera', 'Peric', 'programmer', 1500, 'JS');
var menadzer = new Manager('Zorica', 'Zoric', 'Audit Manager', 2000, 'Financial');

console.log(zaposleni.getData());
zaposleni.getSalary();
console.log(zaposleni.increaseSalary());
zaposleni.getSalary();
console.log(zaposleni.increaseSalary());
zaposleni.getSalary();


developer.getSpecialization();

menadzer.getDepartment();
menadzer.changeDepartment('HR');
menadzer.getDepartment();

console.log(menadzer.getData());