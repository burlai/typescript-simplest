// Union:
let userId: string | number;

userId = 5;
userId = "Max";

// userId = true; // Error

const greetUser = (user: string | number) => {
  if (typeof user === "string") {
    console.log(`Hello, ${user.toUpperCase()}!`);
  }
  if (typeof user === "number") {
    console.log(`Hello, user with id ${user}!`);
  }
};

greetUser("Max");

// Intersection

type Car = {
  wheels: number;
  engine: string;
};

type Boat = {
  sails: number;
  engine: string;
};

type Amphibia = Car & Boat;

const superVehicle: Amphibia = {
  wheels: 4,
  engine: "V8",
  sails: 1,
};

console.log(superVehicle);
