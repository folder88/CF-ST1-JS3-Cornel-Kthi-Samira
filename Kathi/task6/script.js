// Create a JavaScript function to create random background colors each time we refresh the page.

let hexCol = "0123456789ABCDEF";
let click = document.getElementById('click');

click.addEventListener('click', colorChange);

function colorChange() {
    let color = "";

    for (let i = 0; i < 6; i++) {
        color += hexCol[Math.floor(Math.random() * 16)];
    }

    document.body.style.backgroundColor = "#" + color;
}