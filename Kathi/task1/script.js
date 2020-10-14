// Create an external script in a JavaScript file that runs the three dialogue boxes types from pre-work.

function dialogOne() {
    alert("this ist a alert-box");
    document.getElementById('result').innerHTML = "this was a alert-box :) ";
}

function dialogTwo() {
    let dialogTwo = confirm("this is a confirm box. We have 2 options. like 'boolean'");

    if (dialogTwo == true) {
        document.getElementById('resultTwo').innerHTML = "you click true :)";
    } else {
        document.getElementById('resultTwo').innerHTML = "you click false :) ";
    }
}

function dialogThree() {
    let dialogThree = prompt("please enter a name", "a name here");
    document.getElementById('resultThree').innerHTML = "the name is: " + dialogThree;
}

dialogOne();
dialogTwo();
dialogThree();