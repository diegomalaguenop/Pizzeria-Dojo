function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {
        tipoCorteza: tipoCorteza,
        tipoSalsa: tipoSalsa,
        quesos: quesos,
        salsas: salsas
    };
    return pizza;
}

var pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
var pizza2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
var pizza3 = pizzaOven("estilo New York", "barbacoa", ["mozzarella", "cheddar"], ["pollo a la parrilla", "cebolla caramelizada"]);
var pizza4 = pizzaOven("estilo Hawaiano", "tomate", ["mozzarella", "jamón"], ["piña", "pepperoni"]);


console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);
