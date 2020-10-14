// Write a function called ageCalculator() that takes two arguments birth year and the current year. Calculate 2 possible ages based on those years (two, because we don't know the birth month).

function ageCalculator(birthY, currentY) {
    return currentY - birthY;
}

document.getElementById('result').innerHTML = "You are either: " + ageCalculator(1992, 2020);

// Enhance your previous exercise in terms of how to get the current year in JavaScript instead of passing it in. Provide the same results just passing one argument.

function newAgeCalculator(birth) {
    let currentY = new Date().getFullYear();
    return currentY - birth;
}

document.getElementById('resultTwo').innerHTML = "You are either: " + newAgeCalculator(1992);

// console.log(new Date().getFullYear());