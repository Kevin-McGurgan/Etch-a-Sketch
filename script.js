const container = document.querySelector("#container");

let gridSize = 16;

// TODO - figure out how to add create a different grid upon reset
/* function getGridSize() {
  return parseInt(prompt("Choose your grid size:"));
} */

createGrid(gridSize);

const cellHover = document.querySelectorAll(".gridCell");

const resetButton = document.querySelector("#reset");
  resetButton.addEventListener("click", () => {
    reset();
  });

for (var i = 0; i < cellHover.length; i++) {
  cellHover[i].addEventListener("mouseover", function() {
    this.classList.remove("gridCell");
    this.classList.add("gridCellHover");
  });
}

function reset() {
  for (var i = 0; i < cellHover.length; i++) {
      cellHover[i].classList.remove("gridCellHover");
      cellHover[i].classList.add("gridCell");
  }
}

function createGrid(num) {
  for (i=1; i <= num; i++) {
    const row = document.createElement("div");
      row.classList.add("gridRow");
      container.appendChild(row);
      for (j=1; j <= num; j++) {
        const cell = document.createElement("div");
          cell.classList.add("gridCell");
          row.appendChild(cell);
      }
  }
}
