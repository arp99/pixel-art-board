const gridContainer = document.querySelector("#grid__container");

(function createGrid(n) {
  let grid = ``;
  for (let i = 0; i < n; i++) {
    let row = `<div class="grid__row">`;
    for (let j = 0; j < n; j++) {
      row += `<div class="grid"></div>`;
    }
    row += `</div>`;
    grid += row;
  }
  gridContainer.innerHTML = grid;

  let colorRow = `<div class="colors-grid__row">`;
  for (let i = 0; i < n; i++) {
    colorRow += `<div class="color-grid" style="background: ${getRandomColor()};"></div>`;
  }
  colorRow += `</div>`;
  gridContainer.innerHTML += colorRow;
})(10);

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function colorPicker() {
  this.currentColor = "white";
  this.changeCurrentColor = function (color) {
    this.currentColor = color;
  };
}
const cp = new colorPicker();

const cells = document.querySelectorAll(".grid");
const colorCells = document.querySelectorAll(".color-grid");

cells.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    e.target.style.background = cp.currentColor;
  });
});

colorCells.forEach((colorCell) => {
  colorCell.addEventListener("click", (e) => {
    const colorPicked = e.target.style.background;
    cp.changeCurrentColor(colorPicked);
  });
});
