'use strict'

// Create an array called cars which consists of 4 different types of cars as String type.
// The first car type should be Ford and includes Honda.
let cars = ["Ford", "Honda", "Toyota", "Subaru"];

console.log(cars.length);

// Create another array called moreCars with 4 more different types of cars.
// The last car type should be Honda.
let moreCars = ["Chevrolet", "BMW", "Audi", "Honda"];

//Use the concat method to combine the cars and moreCars arrays into another array called totalCars.
let totalCars = cars.concat(moreCars);

console.log(totalCars);

// Use the indexOf method to console.log the index of Honda.
console.log(totalCars.indexOf("Honda"));

// Use the lastIndexOf method to console.log the index of Ford.
console.log(totalCars.lastIndexOf("Ford"));

// Use the join method to convert the array totalCars into a string called stringOfCars.
let stringOfCars = totalCars.join(" ")
console.log(stringOfCars);

// Use the split method to convert stringOfCars back into an array called totalCars.
totalCars = stringOfCars.split(' ')
console.log(totalCars);

// Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
let carsInReverse = totalCars.reverse(" ")
console.log(carsInReverse);

// Use the sort method to put the array carsInReverse into alphabetical order
carsInReverse.sort();
// Should be Audi
console.log(carsInReverse);

// Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.
let removedCars = carsInReverse.slice(3, 5)
console.log(removedCars);

// Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.
carsInReverse.splice(1, 2, removedCars)
console.log(carsInReverse);

// Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.
carsInReverse.push("BMW", "Chevrolet")
console.log(carsInReverse);

// Use the pop method to remove and console.log the last item in the array carsInReverse.
console.log(carsInReverse.pop())

// Use the shift method to remove and console.log the first item in the array carsInReverse.
console.log(carsInReverse.shift())

// Use the unshift method to add a new type of car to the array carsInReverse.
carsInReverse.unshift("Nissan")
console.log(carsInReverse)

// Create an array called numbers with the following items: 23, 45, 0, 2 
// Write code that will add 2 to each item in the array numbers.
let numbers = [23, 45, 0, 2];

numbers.forEach(number => console.log(number + 2));

// Build a function that will add 2 and then use .forEach() to pass each number into your freshly built function.
const newNumbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];

function plusTwo(number) {
  return number + 2;
};

newNumbers.forEach(number => console.log(plusTwo(number)));