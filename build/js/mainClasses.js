"use strict";
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hallo, I'm ${this.age}`;
    }
}
const Bill = new Coder('Dave', 'Rock', 42);
console.log(Bill.getAge());
console.log(Bill);
//console.log(Bill.age);
//console.log(Bill.lang);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}.`;
    }
}
const Gates = new WebDev('Linux', 'Gates', 'Jazz', 44);
console.log(Gates);
console.log(Gates.getLang());
console.log(Gates.name);
//console.log(Gates.age);
//console.log(Gates.lang);
// INTERFACE
console.log('=============Interface===========');
class Guitarist {
    constructor(namee, instrument) {
        (this.namee = namee), (this.instrument = instrument);
    }
    play(action) {
        return `${this.namee} ${action} the ${this.instrument}`;
    }
}
const Jack = new Guitarist('Adam', 'guitar');
console.log(Jack.play('drums'));
// STATIC
console.log('=============STATIC===========');
class Peeps {
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
    static getCount() {
        return Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Neo = new Peeps('Neo');
const Kasa = new Peeps('Kasa');
console.log("Neo's id is " + Neo.id);
console.log(Peeps.count);
console.log(Peeps.getCount());
console.log('=============SETTERS/GETTERS===========');
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Paramis not an array of string');
    }
}
const MyBands = new Bands();
MyBands.data = ['Michael Jackson', 'David'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'Metalica'];
console.log(MyBands.data);
//MyBands.data = [...MyBands.data, 562];
//console.log(MyBands.data);
