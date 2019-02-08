//MODULE ASSIGNMENT 2 - LEVEL 1

//1. Create a function that displays prototypal inheritance
function MyFunc() {
    this.message = "Hello from prototype declared function";
};

MyFunc.prototype.greet = function () {
    console.log(this.message);
}

const myFunc = new MyFunc;

myFunc.greet();

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
const myArray = [];

for (let i = 1; i <= 10; i++) {
    myArray.push(i);
}

const slicedArray = myArray.slice(4, 5);

console.log("Sliced array:", slicedArray);

//3. Delete the last number in the array that you created above.
myArray.splice(9, 1);
console.log("Last number deleted:", myArray);

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
let paragraph = "Strawberries are a popular part of spring and summer diets throughout America. " +
    "Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. " +
    "They announce the impending arrival of the ruby red berries that so many people crave. " +
    "Ripe strawberries taste sweet and have only a slight hint of tartness. " +
    "They are also one of the healthiest fruits around. " +
    "There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied. ";

function myReplacer(content, pattern, replaceWith) {
    const isCapitalized = (str) => str.charAt(0) === str.charAt(0).toUpperCase();

    return content.replace(new RegExp(pattern, "gi"), match => {
        return isCapitalized(match)
            ? replaceWith.charAt(0).toUpperCase() + replaceWith.substr(1)
            : replaceWith;
    });
}

paragraph = myReplacer(paragraph, "strawberry", "banana");
paragraph = myReplacer(paragraph, "strawberries", "bananas");

console.log(paragraph);

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
const clubs = ["Vålerenga", "Manchester United", "Real Madrid", "Borussia Dortmund"];

document.getElementById("myButton").addEventListener("click", () => {
    clubs.length = 0;
    clubs.push("BMW", "Tesla", "Porsche", "Ferrari");

    console.log(clubs);
});

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
const persons = [
    {name: "Raymond", age: 29},
    {name: "Thomas", age: 25},
    {name: "Tim", age: 42}
];

const filteredPerson = persons.filter(person => person.name === "Thomas");

console.log(filteredPerson);

//7. Create a simple function that logs the date.
function dateToday() {
    console.log(new Date().toLocaleString());
}

dateToday();
