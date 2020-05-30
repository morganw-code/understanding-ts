# Understanding TypeScript Notes

## 2. TypeScript Basics & Basic Types

### Types

number  eg. 1, 5.3, -10 (no differentiation between int and float)

string  eg. 'Hi', "Hi", `Hi` (all text values)

boolean eg. true, false (only true/false)

object  eg. {age: 30}

Array   eg. [1, 2, 3] (Any JavaScript array, and can be flexible or strict)

Tuple   eg. [1, 2] (Fixed length, fixed type)

Union   eg. number | string (Union type that can hold number or string in that example)

Enum    eg. enum { NEW = 'ADMIN', OLD = 100 } (Used for human-readable labels)

Any     eg. any[] (yes any)

### Defining object types

``` TypeScript
const person: {
  name: string;
  age: number;
} = {
  name: "Morgan",
  age: 50
};
```
### Array types

any[] (any literally referring to any datatype, not the 'any' ts datatype)

### Union types

Used when defining that a variable or param COULD hold one of any specified value.

`datatype | datatype | ...`

eg.

``` TypeScript
function print(input1: number | string) {
  console.log(input1);
}
```

### Type alias

eg.

``` TypeScript
  type Combinable = number | string;
  //
  type ConversionDescriptor = 'as-number' | 'as-text';
```

then could be used as for example

``` TypeScript
function print(input1: Combinable) { console.log(input1); }
//
function something(descriptor: ConversionDescriptor) {
  if(descriptor === 'as-number') {
    // do something
  } else {
    // do something
  }
}
```

### Function return types

eg.

``` TypeScript
function add(n1: number, n2: number): number {
  return n1 + n2;
}

//

function add(n1: number, n2: number): void {
  console.log('Result: ' + num);
}
```

### Functions as types

``` TypeScript
  function someFunction: Function;
```

``` TypeScript
  // defining the prototype of the function variable
  let someFunction: (a: number, b: number) => number;

  // function that meets criteria
  function a(n1: number, n2: number): number {
    return n1 + n2;
  }

  // function that does not meet criteria
  function b(n1: number): string {
    return +n1;
  }
  
  // valid
  someFunction = a;
  // invalid
  someFunction = b;
```

english: someFunction takes two number params and returns a number.

### Callbacks

``` TypeScript
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(1, 2, (result: number) => {
  console.log(result);
});
```

### Unknown type

Unknown is more restrictive than any

``` TypeScript
  // will not work
  let userInput: unknown;
  let userName: string;
  userInput = 1;
  userName = userInput; // error

  // will work because 'any' will override typescript rules ('any' is bad btw)
  let userInput: any;
  let userName: string;
  userInput = 1;
  userName = userInput;
```

### Never type

utility example:

this function never produces a value because 'throw' breaks the execution for this function, thus, it 'never' returns a value. (not even undefined/void)

``` TypeScript
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('Hello, World!', 500);
```

## 3. The TypeScript Compiler (and its Configuration)

### TSC (TypeScriptCompiler) watch mode

`npx tsc app.ts -w`

now tsc will compile typescript after every file change.

#### What if we have more than one file?

if typescript project has not been initialized

`npx tsc --init`

then when it is initalized

`npx tsc` will compile all files

## Including & Excluding files

(ts project must be initialized)
`tsconfig.json`

``` TypeScript
  // before the closing brace (example)
  // ...
  // },
  "exclude": [
    "analytics.ts",
    "*.dev.ts",
    "node_modules"
  ],
  "include": [
    "app.ts",
  ]
  //}
```

## Compilation Target

