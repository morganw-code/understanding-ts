const add = (...numbers: number[]): number => {
  let result = 0;
  return numbers.reduce((accumulator, curValue) => {
    return accumulator + curValue;
  }, 0);
};

console.log(add(1, 4, 6, 2, 1, 6, 3, 2, 5, 1, 3, 5, 7, 2, 6));

class Department {
  name: string;

  constructor(n: string) {
    this.name = "DEFAULT";
  }
}

const accounting = new Department("Accounting");

class Book {
  private employees: string[] = [];
  constructor(private id: string, public name: string) {}

  print(this: Book) {
    console.log(this.name);
  }
}
