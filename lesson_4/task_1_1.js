'use strict';
// es5
function Product_1(name, price) {
    this.name = name;
    this.price = price;
}

Product_1.prototype.make25PercentDiscount = function () {
    console.log(this.price -= this.price * 0.25);
}

let data = [
    new Product_1('phone', 1000),
    new Product_1('notebook', 5000),
];

data[0].make25PercentDiscount(); // 750
data[1].make25PercentDiscount(); // 3750

// es6
class Product_2 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make30PercentDiscount() {
        console.log(this.price -= this.price * 0.3);
    }
}

let data_2 = [
    new Product_2('carrot', 120),
    new Product_2('tomato', 350),
];

data_2[0].make30PercentDiscount(); // 84
data_2[1].make30PercentDiscount(); // 245