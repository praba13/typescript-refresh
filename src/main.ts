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
