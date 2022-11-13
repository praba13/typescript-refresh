class Coder {
  secoundLang!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = 'Typescript'
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hallo, I'm ${this.age}`;
  }
}

const Bill = new Coder('Dave', 'Rock', 42);

console.log(Bill.getAge());
console.log(Bill);
//console.log(Bill.age);
//console.log(Bill.lang);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLang() {
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
interface Musician {
  namee: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  namee: string;
  instrument: string;

  constructor(namee: string, instrument: string) {
    (this.namee = namee), (this.instrument = instrument);
  }
  play(action: string): string {
    return `${this.namee} ${action} the ${this.instrument}`;
  }
}

const Jack = new Guitarist('Adam', 'guitar');
console.log(Jack.play('drums'));

// STATIC
console.log('=============STATIC===========');

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps('John');
const Neo = new Peeps('Neo');
const Kasa = new Peeps('Kasa');

console.log("Neo's id is " + Neo.id);
console.log(Peeps.count);
console.log(Peeps.getCount());

console.log('=============SETTERS/GETTERS===========');

class Bands {
  private dataState: string[]; // state

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === 'string')) {
      this.dataState = value;
      return;
    } else throw new Error('Paramis not an array of string');
  }
}

const MyBands = new Bands();
MyBands.data = ['Michael Jackson', 'David'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'Metalica'];
console.log(MyBands.data);
//MyBands.data = [...MyBands.data, 562];
//console.log(MyBands.data);
