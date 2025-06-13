const chai ={    /// This defines a set of ingredients and their amounts for a single cup of chai.
water: 200, /// This means one cup needs 200ml of water.
milk: 50, /// One cup needs 50ml of milk.
teaLeaves: 1, /// One cup needs 1 teaspoon of tea leaves.
sugar: 2,  /// One cup needs 2 teaspoons of sugar.
};

let input = prompt("how many chai cups would you like to make","1") // This part asks the person using the code how many cups of chai they want to make.
let cups = Number(input)                                           /// It also provides "1" as a default answer if they don't type anything.
                                    /// This takes the answer given by the user (which is initially text) and turns it into a number so we can do math with it.

/// For each ingredient (water, milk, tea leaves, sugar), 
// it takes the amount needed for one cup and multiplies it by the total number of cups the user wants to make.
console.log(`to make ${cups} you will need        
    water: ${chai.water * cups}ml 
    milk: ${chai.milk *cups}ml
    teaLeaves: ${chai.teaLeaves * cups} teaspoon     
    sugar: ${chai.sugar * cups} teaspoon

   enjoy`)




/// Then, it neatly prints out all the calculated amounts, followed by a friendly "enjoy" message.


