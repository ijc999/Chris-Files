function sayHi() {
    this.name = "Chris";
    this.greet = function() {
        return `Hello, my name is ${this.name}`;
    }
}
let person = new sayHi();
console.log(person.greet());