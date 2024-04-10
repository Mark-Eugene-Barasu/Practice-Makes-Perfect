let firstObject = {
  looks: "hunsome",
  firstName: "Korku",
  lastName: "Barasu",
  get fullName(){
    return `${this.firstName} and ${this.lastName}. The food is ${this.food}`;
  }
}

let secondObject = {
  lastName: "Mark",
  firstName: "Barasu"
}

let thirdObject = {
  lastName: "Eugene",
  firstName: "Barasu"
}

firstObject.food = "Banana";
console.log(firstObject.fullName)
