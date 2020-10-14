// Use try and catch statements to create a custom error message for the incorrect inputs in those fields.
console.log("ok");

function catchStatements() {
    age = document.getElementById('age').value;
    power = document.getElementById('power').value;
    price = document.getElementById('price').value;
    message = document.getElementById('message');
    console.log(age);
    try {
        if (age == "") throw "please, fill out";
        if (isNaN(age)) throw "please, enter a number";
        if (power == "") throw "please, fill out";
        if (isNaN(power)) throw "please, enter a number";
        if (price == "") throw "please, fill out";
        if (isNaN(price)) throw "please, enter a number";

    } catch (error) {
        message.innerHTML = "hey dude!" + error;
    }

}

function calculatePrice(age, power, price) {
    return age / (power * price);
}

let send = document.getElementById("submit");

send.addEventListener("click", catchStatements, true);
// Lastly, create a logic for calculating that insurance-price and output it to your HTML page.
send.addEventListener("click", calculatePrice, true);