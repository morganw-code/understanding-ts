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

`export PATH="$PATH:"$HOME/node_modules/typescript/bin""` (or where your node_modules directory is)

### TSC (TypeScriptCompiler) watch mode

`tsc app.ts -w`

now tsc will compile typescript after every file change.

#### What if we have more than one file?

if typescript project has not been initialized

`tsc --init`

then when it is initalized

`tsc` will compile all files

## Including & Excluding files

(ts project must be initialized)
`tsconfig.json`

``` json
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

`tsconfig.json` (inside compiler options)

### target

Value could be "es5" or "es6", etc

### module

TODO

### lib

Lib is used to set your own libraries / apis you want to use. By default, all of the targets functionality is imported, but as soon as lib is uncommented, you will have to specify what you want to use.

``` json
"lib": [
  "dom",
  "es6",
  "dom.iterable",
  "scripthost"
]
```

### allowJs & checkJs

Allow JS will compile all the JS libraries used
Check JS will check the JS libraries used for errors

Really only used if you want to not use TypeScript but make use of its features

### jsx

Something that helps with reactjs.

### declaration & declarationMap

Generates a manifest file that describes all the types in your project

### sourceMap

Helps with debugging and development. (this is cool!)

Sourcemap lets you debug TypeScript code in the browser rather than only being restricted to seeing the compiled JavaScript code under sources in dev tools. Setting sourceMap to true generates .js.map files which are readable by the browser and .ts files should appear.

### outDir & rootDir

In a typical TypeScript project you would have a `src` directory for `.ts` files and a `dist` directory for the compiled `.js` output files. outDir allows you to set the output directory of the `.js` files.

``` json
"outDir": "./dist",
"rootDir": "./src"
```
### removeComments

Pretty self-explanatory (removes comments from .js output)

### noEmit

When set to true typescript will just check your files instead of actually compiling

### downLevelIteration

If you have loops and they start behaving differently than they should, downLevelIteration should be set to true. This results in more verbose `.js` output but may fix any issues.

### noEmitOnError

Forces compilation even if errors are present in code.

```
false - will generate
true - will not generate
```

### strict

When it is true you enable all of the strict type-checking options.