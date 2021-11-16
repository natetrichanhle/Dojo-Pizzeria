function pizzaOven (crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var pizza3 = pizzaOven("thin", "white", ["mozzarella", "feta", "swiss"], ["sausage", "garlic"]);
var pizza4 = pizzaOven("stuffed", "traditional", ["mozzarella", "swiss"], ["ham", "pineapple"]);

console.log(pizza4);

function randomPizza (specialpizza) {
    var pizza = {};
    var crustType = ["hand tossed", "thin", "stuffed"];
    var sauceType = ["traditional", "marinara", "white"];
    var cheeses = ["mozzarella", "feta", "swiss"];
    var toppings = ["pepperoni", "sausage", "onions", "olives", "garlic", "ham", "pineapple"];

    for(var i = 0; i < specialpizza; i++){
        pizza.crust = crustType[Math.floor(Math.random() * crustType.length)];
        pizza.sauce = sauceType[Math.floor(Math.random() * sauceType.length)];
        pizza.cheeses = cheeses[Math.floor(Math.random() * cheeses.length)];
        pizza.toppings = toppings[Math.floor(Math.random() * toppings.length)];
    }
    console.log(pizza.crust + " " + pizza.sauce + " " + pizza.cheeses + " " + pizza.toppings);
}

randomPizza(1);


