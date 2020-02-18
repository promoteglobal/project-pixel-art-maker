// Select color input
let colorPicked;

function selectColor (event) {
  colorPicked = event.target.value;
}

function changeColor (event) {
  event.target.style.color = colorPicked;
}


const colorEl = document.getElementById("colorPicker");
colorEl.addEventListener("change", selectColor);

const p1 = document.querySelector("#one");
p1.addEventListener("click", changeColor);

const p2 = document.querySelector("#two");
p2.addEventListener("click", changeColor);



// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!

}
