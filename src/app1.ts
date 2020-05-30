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