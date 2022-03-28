const person = {
  talk() {
    setTimeout(function () {
      console.log("this", this);
    }, 1000);
  },
};
person.talk();
