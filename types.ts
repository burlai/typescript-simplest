// union types:
type Id = string | number;

const myId: Id = 123;
const myId2: Id = "123";

type Status = "success" | "error" | "pending";

const mySuccessStatus: Status = "success";
const myErrorStatus: Status = "error";

// type intersection (similar to extends in interfaces):
type PersonType = {
  name: string;
  age: number;
  isActive?: boolean;
};

type EmployeeType = PersonType & {
  salary: number;
  position: string;
  department?: string;
};

type ManagerType = EmployeeType & {
  teamSize: number;
};

const bigBoss: ManagerType = {
  name: "John Doe",
  age: 40,
  isActive: true,
  position: "CEO",
  salary: 100000,
  teamSize: 10,
};

// Both types and interfaces could use those utilities:
// create a new type from the PersonType only with name:
type Name = Pick<PersonType, "name">;
const myName: Name = { name: "John Doe" };

// create a new type from the PersonType without name and age:
type IsActive = Omit<PersonType, "name" | "age">;
const activeOrNot: IsActive = { isActive: true };

// make all properties optional:
type OptionalPerson = Partial<PersonType>;
const isItEvenPerson: OptionalPerson = {};

// make all properties readonly:
type ReadonlyPerson = Readonly<PersonType>;
const readOnlyPerson: ReadonlyPerson = { name: "John Doe", age: 40 };
// readOnlyPerson.name = "Jane Doe"; // Error: Cannot assign to 'name' because it is a read-only property
