class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
  walk() {
    console.log("walk");
  }
}
const person = new Person("Moni", "goli");
console.log(person);
