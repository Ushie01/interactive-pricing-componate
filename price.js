document.getElementById('inner_button').addEventListener('click', myFunction);
document.getElementById('range').addEventListener('drag', sliderBar);

let x = document.getElementById("button");
let y = document.getElementById("range");

function myFunction() {
    if (x.style.alignItems === "flex-start") {
        document.getElementById('button').style.alignItems = "flex-end";
        document.getElementById('button').style.backgroundColor = "#12d8c2";

    } else {
        document.getElementById('button').style.alignItems = "flex-start";
        document.getElementById('button').style.backgroundColor = "#D0D7EE";
    }
}

function sliderBar() {
    if (y.value > 1 && y.value < 32) {
        document.getElementById('range').style.backgroundColor = "green";
    } else {
        document.getElementById('range').style.backgroundColor = "red";
    }
}


var slider = document.getElementById("range");
var output = document.querySelector(".sixteen");


slider.oninput = function() {
    // output.innerHTML = "$" + this.value + ".00";
    output.innerHTML = `$${this.value}.00`
}