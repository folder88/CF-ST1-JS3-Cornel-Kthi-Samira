//Have an onmouseover event for both of them, that sets their innerHTML to a new random number each time the event is triggered.
// On the same mouseover, call a function that compares the two values and displays a message on the page, stating whether the left or right value is higher.
let pOne = document.getElementById('one');
let pTwo = document.getElementById('two');

pOne.addEventListener('mouseover', writeRandomNumOne, false);
pTwo.addEventListener('mouseover', writeRandomNumTwo, false);

function writeRandomNumOne() {
    let randomNum = Math.floor(Math.random() * 101);
    pOne.innerHTML = randomNum;

    let one = document.getElementById('one').innerHTML;
    let two = document.getElementById('two').innerHTML;
    if (one > two) {
        document.getElementById('message').innerHTML = "the first paragraph are biger";
    } else {
        document.getElementById('message').innerHTML = "the second paragraph are biger";
    }
}

function writeRandomNumTwo() {
    let randomNum = Math.floor(Math.random() * 101);
    pTwo.innerHTML = randomNum;

    let one = document.getElementById('one').innerHTML;
    let two = document.getElementById('two').innerHTML;
    if (one > two) {
        document.getElementById('message').innerHTML = "the first paragraph are biger";
    } else {
        document.getElementById('message').innerHTML = "the second paragraph are biger";
    }
}