"use strict";
class Animal {
    constructor(name, legs, sound) {
        this.name = name;
        this.legs = legs;
        this.sound = sound;
        this.head = 1;
    }
    makeSound() {
        console.log(this.sound);
    }
    numberOfLegs() {
        console.log(`I have ${this.legs} legs`);
    }
    headCount() {
        console.log(`I have ${this.head} head`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name, 4, "Bark");
    }
    describe() {
        // no access modifier, so it's public by default
        console.log(`I am a dog, my name is ${this.name} and I have ${this.legs} legs`);
    }
}
class Spider extends Animal {
    constructor(name) {
        super(name, 8, "Hiss");
    }
    describe() {
        console.log(`I am a spider, my name is ${this.name} and I have ${this.legs} legs`);
    }
}
// Usage
const dog = new Dog("Rex");
dog.describe();
dog.makeSound();
dog.headCount();
dog.name = "Luna";
dog.describe();
const spider = new Spider("Charlotte");
spider.describe();
spider.numberOfLegs();
spider.describe = function () {
    console.log("I am a spider, and I am a very scary!");
};
spider.describe();
