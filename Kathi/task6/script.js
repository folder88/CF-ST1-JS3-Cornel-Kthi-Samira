// Create a JavaScript function to create random background colors each time we refresh the page.

// let hexCol = "0123456789ABCDEF";
let click = document.getElementById('click');

click.addEventListener('click', colorChange);
// console.log(hexCol);

function colorChange() {
    let colorOne = Math.floor(Math.random() * 256);
    let colorThree = Math.floor(Math.random() * 256);
    let colorFour = Math.floor(Math.random() * 256);

    // for (let i = 0; i < 6; i++) {
    //     color += hexCol[Math.floor(Math.random() * 16)];

    //     console.log(color);
    // }
    // console.log(color);
    // document.body.style.backgroundColor = "#" + color;
    document.body.style.backgroundColor = `rgb(${colorOne},${colorThree},${colorFour})`;
}