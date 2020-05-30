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
