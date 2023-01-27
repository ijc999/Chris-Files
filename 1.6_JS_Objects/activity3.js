let coffeeShop = {
    branch: "Preston",
    drinks: {
        coffee: 2.5,
        tea: 2,
        juice: 3
    },
    food: {
        cake: 4,
        sandwich: 5.5,
        salad: 6
    },
    drinksOrdered: function(drink, quantity) {
        let totalCost = this.drinks[drink] * quantity;
        return `Your order of ${quantity} ${drink}(s) is £${totalCost}.`;
    },
    foodOrdered: function(food, quantity) {
        let totalCost = this.food[food] * quantity;
        return `Your order of ${quantity} ${food}(s) is £${totalCost}.`;
    }
}
console.log(coffeeShop.drinksOrdered("coffee", 2));
console.log(coffeeShop.foodOrdered("cake", 3));
