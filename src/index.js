const person = {
  name: "Mosh",
  walk() {},
  talk() {},
};
person.talk();
person.name = "";

person["name"] = "Moni"; //Or
const targetMember = "name";

person[targetMember.value] = "Moni";
