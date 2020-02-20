let colorPicked;

function selectColor (event) {
  colorPicked = event.target.value;
}

function changeColor (event) {
  console.log('clicked');
  event.target.style.backgroundColor = colorPicked;
}

const colorEl = document.getElementById("colorPicker");
colorEl.addEventListener("change", selectColor);


function makeGrid() {
  let height = document.getElementById("inputHeight").value;
  let width = document.getElementById("inputWidth").value;
  let table = document.getElementById("pixelCanvas");
  table.innerHTML = "";
  
  for (let i = 0; i < height; i++) {
    let tr = document.createElement("tr");
    
    for (let y = 0; y < width; y++) {
      let td = document.createElement("td");
      td.addEventListener("click", changeColor);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

}
const button = document.getElementById("btn1");
button.addEventListener("click", makeGrid);
