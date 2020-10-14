// When you hover on the circle, you will see a message under it: "you are in the circle".
// When the mouse leaves the circle you will see the message under it: "you are outside of the circle".
// When you click on the circle, the background will change to grey.

let circle = document.getElementById('circle');

circle.addEventListener('mouseover', inCircle);
circle.addEventListener('mouseout', delMessage);
circle.addEventListener('click', backgroundGrey);
circle.addEventListener('dblclick', backgroundBlue);

function inCircle() {
    document.getElementById('message').innerHTML = "you are in the circle";
}


function delMessage() {
    document.getElementById('message').innerHTML = "you are outside of the circle";
}

function backgroundGrey() {
    document.getElementById('circle').style.backgroundColor = "grey";
}

function backgroundBlue() {
    document.getElementById('circle').style.backgroundColor = "blue";
}