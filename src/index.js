class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
  walk() {
    console.log("walk");
  }
}
class Teacher extends Person {
  constructor(fname, lname, degree) {
    super(fname, lname);
    this.degree = degree;
  }
  teach() {
    console.log("Teach method");
  }
}
const teacher = new Teacher("Moni", "goli", "BE");
console.log(teacher);
