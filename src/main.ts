let myName: string = 'PR';
let meaningOfLife: number;
let isLoading: boolean;
let album: any;
let postId: string | number; //union type (is not limited)
let isActive: number | boolean; // 0 or false
let re: RegExp = /\w+/g;

//Arrays

let stringArr = ['one', 'hey', 'Paul'];

let guitars = ['Starts', 'Les Paul', 5150];

let mixedDate = ['EVH', 1980, true];

//stringArr[0] = 42; //Problem
//stringArr.push(42);
//stringArr.push('Baba');

guitars.unshift('Jim');

let test = [];
let bands: string[] = [];

console.log(typeof stringArr);
console.log(stringArr);
console.log(guitars);

//Tuple
let myTuple: [string, number, boolean] = ['USA', 13, false];
let mixed = ['Mexico', 1, true];

mixed = myTuple;
//myTuple = mixed; // Fehler

//Objects
let myObject: object;
myObject = [];
console.log(typeof myObject);

const exampleObj = {
  prop1: 'Peter',
  prop2: true
};

exampleObj.prop1 = 'Hans';
//exampleObj.prop1 = 23; // das geht nicht
console.log(exampleObj);

/*
type Guitarist = {
  name: string;
  active?: boolean; //property optional
  albums: (string | number)[];
};
*/

//type and interface
interface Guitarist {
  name?: string;
  active: boolean; //property optional
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: 'Paul',
  active: false,
  albums: [32, 42, 'Trog']
};

let jp: Guitarist = {
  name: 'Jimmy',
  active: true,
  albums: ['I', 'II', 'III']
};

//evh = jp;
//jp = evh;
console.log(jp);

//Object Type as Parameter

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}`;
  }
  return 'Holla!!';
};

console.log(greetGuitarist(jp));

//ENUMS, start with 0 but we can manully manupulate starting postion
enum Grade {
  U = 1, //0
  D, //1
  C,
  A,
  B
}

console.log(Grade.D);

// ------------------------
// Type Aliases
// ------------------------

type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

type Guitarist2 = {
  name: string;
  active?: boolean; //property optional
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

// do not with interface
//inteface use for classses or objects
//interface PostId = stringOrNumber // not work

// ------------------------
// Literal Types
// ------------------------

let myNameIs: 'Bill';
//myNameIs = 'Gates'; //not wok

let userName: 'Sokrates' | 'Astro' | 'Jupitar';

userName = 'Astro'; // we can choose the userName with help of intellisense

// ------------------------
// FUNCTIONS
// ------------------------

console.log('----------FUNCTIONS---------');

// return number
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg('Hallo!');
logMsg(add(2, 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathfunction = (a: number, b: number) => number;

let multiply: mathfunction = function (c, d) {
  return c * d;
};

logMsg(multiply(10, 5));

console.log('--------OPTIONAL PARAM. FUNCTIONS---------');

// optional Paramter
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== 'undefined') {
    return a + b + c;
  }
  return a + b;
};

logMsg(addAll(2, 3));
logMsg(addAll(2, 3, 5));

console.log('----------REST PARAM. FUNCTIONS-----------');

const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 3, 4));
logMsg(total(1, 2));

console.log('----------NEVER TYPE FUNCTIONS-----------');

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const numberOrString = (value: number | string): string => {
  if (typeof value === 'string') return 'string';
  if (typeof value === 'number') return 'number';
  return createError('This should never happend!');
};

console.log('-----Type Asssertions---------');

type One = string;
type Two = string | number;
type Three = 'hello';

//convert to more or less specific
let a: One = 'hello';
let b = a as Two;
let c = a as Three;

let d = <One>'world';
let e = <string | number>'world';

const addOrConcat = (
  a: number,
  b: number,
  c: 'add' | 'concat'
): number | string => {
  if (c === 'add') return a + b;
  return '' + a + b;
};

let myVal: string = addOrConcat(2, 2, 'concat') as string;
//Careful, TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, 'concat') as number;
console.log(myVal);

//10 as string; // not happy
//10 as unknown as string;

//DOM
//const img = document.querySelector('img');
const img = document.querySelector('img')!;
const myImg = document.querySelector('#img') as HTMLImageElement;

const nextImg = <HTMLImageElement>document.getElementById('#img');

img.src;
myImg.src;
