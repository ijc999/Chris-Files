let pet = {
    name: "Rover",
    typeOfPet: "Dog",
    age: 2,
    color: "black",
    eat: function() {
        return `${this.name} is eating.`;
    },
    drink: function() {
        return `${this.name} is drinking.`;
    }
}
console.log(pet.eat()); 
console.log(pet.drink());