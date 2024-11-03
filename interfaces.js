"use strict";
// Class fulfilling the contract of the Interface
class User {
    constructor(name, age, isActive, position, salary) {
        this.name = name;
        this.age = age;
        this.isActive = isActive;
        this.position = position;
        this.salary = salary;
    }
}
class BigBoss {
    constructor(name, age, isActive, position, department, salary, teamSize) {
        this.name = name;
        this.age = age;
        this.isActive = isActive;
        this.position = position;
        this.department = department;
        this.salary = salary;
        this.teamSize = teamSize;
    }
}
const ourBoss = new BigBoss("John Doe", 45, true, "CEO", "Management", 100000, 10);
