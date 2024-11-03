interface Person {
  name: string;
  age: number;
  isActive: boolean;
}

// declaration merging (only in interfaces):
interface Person {
  surname?: string;
}

interface Employee {
  salary: number;
  position: string;
  department?: string;
}

// Class fulfilling the contract of the Interface
class User implements Person, Employee {
  name: string;
  age: number;
  isActive: boolean;
  position: string;
  salary: number;

  constructor(
    name: string,
    age: number,
    isActive: boolean,
    position: string,
    salary: number
  ) {
    this.name = name;
    this.age = age;
    this.isActive = isActive;
    this.position = position;
    this.salary = salary;
  }
}

interface Manager extends Employee, Person {
  // "extends" keyword - only in interfaces
  teamSize: number;
}

class BigBoss implements Manager {
  // "implements" keyword - works for both interfaces and classes
  name: string;
  age: number;
  isActive: boolean;
  position: string;
  department?: string | undefined;
  salary: number;
  teamSize: number;

  constructor(
    name: string,
    age: number,
    isActive: boolean,
    position: string,
    department: string,
    salary: number,
    teamSize: number
  ) {
    this.name = name;
    this.age = age;
    this.isActive = isActive;
    this.position = position;
    this.department = department;
    this.salary = salary;
    this.teamSize = teamSize;
  }
}

const ourBoss = new BigBoss(
  "John Doe",
  45,
  true,
  "CEO",
  "Management",
  100000,
  10
);
