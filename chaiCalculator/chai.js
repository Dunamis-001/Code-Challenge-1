const chai ={
water: 200,
milk: 50,
teaLeaves: 1,
sugar: 2,
};

let input = prompt("how many chai cups would you like to make","1")
let cups = Number(input)

console.log(`to make ${cups} you will need
    water: ${chai.water * cups}ml 
    milk: ${chai.milk *cups}ml
    teaLeaves: ${chai.teaLeaves * cups} teaspoon
    sugar: ${chai.sugar * cups} teaspoon

   enjoy`)