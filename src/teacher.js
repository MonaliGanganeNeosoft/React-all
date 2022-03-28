import { Person } from "./person";
export class Teacher extends Person {
  constructor(fname, lname, degree) {
    super(fname, lname);
    this.degree = degree;
  }
  teach() {
    console.log("Teach method");
  }
}
