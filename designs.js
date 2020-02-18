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
  let height = document.getElementById("inputHeight").value;
  let width = document.getElementById("inputWidth").value;
  let table = document.getElementById("pixelCanvas");
  
  for (let i = 0; i < height; i++) {
    let tr = document.createElement("tr");
    
    for (let y = 0; y < width; y++) {
      let td = document.createElement("td");
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

}
const button = document.getElementById("btn1");
button.addEventListener("click", makeGrid);
