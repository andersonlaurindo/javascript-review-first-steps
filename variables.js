const age = 26;
const firstName = "Steve";
const lastName = "Jobs";
let fullName = firstName + "" + lastName;

//ERROR CONSTANT: age = 26 + 2;
fullName = "Bill Gates";

console.log(age); //26
console.log("Age: " + age); //Age: 26
console.log("Age: " + age + 1); //Age: 261
console.log("Age: " + parseInt(age + 1)); //Age: 27
console.log("Age: " + age / "2"); //Age: 13
console.log("Age: "  / "2"); //NaN => Not a Number
console.log(3.2); //3.2
console.log(3,2); //3 2
console.log(firstName + " " + lastName);
console.log(`His name is ${firstName} ${lastName}`);
console.log(`His name is ${fullName}`);