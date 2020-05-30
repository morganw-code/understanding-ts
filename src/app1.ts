abstract class ParentClass {
  constructor(protected hello: string) {
    this.hello = hello;
  }

  abstract print(this: ParentClass): void;
}

class ChildClass extends ParentClass {
  constructor() {
    super("Hello, World!");
  }
  print(this: ChildClass): void {
    console.log(this.hello);
  }
}

let childClass = new ChildClass();
childClass.print();

interface IDrawable {
  name: string;
  position: number | number;
}

class Note implements IDrawable {
  name: string;
  position: number | number;
  constructor(name: string, position: number | number) {
    this.name = name;
    this.position = position;
  }
}

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
}

type ElevatedEmployee = Admin & Employee;
// is the same as
// interface ElevatedEmployee extends Employee, Admin {}

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
};

class Car {
  drive() {
    console.log("Driving car...");
  }
}

class Truck {
  private cargoWeight: number = 0;

  drive() {
    console.log("Driving truck...");
  }

  loadCargo(amount: number) {
    this.cargoWeight += amount;
    console.log(`Loaded a total of ${this.cargoWeight}kg`);
  }
}

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if(vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

let v1 = new Car();
let v2 = new Truck();
useVehicle(v1);
useVehicle(v2);