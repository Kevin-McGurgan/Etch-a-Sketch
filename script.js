const container = document.querySelector("#container");

let gridSize = 16;

createGrid(gridSize);

const cellHover = document.querySelectorAll(".gridCell");

const resetButton = document.querySelector("#reset");
  resetButton.addEventListener("click", () => {
    reset();
  });

function reset() {
  container.innerHTML = "";
  let gridSize = parseInt(prompt("Choose your grid size:"));
  createGrid(gridSize);
  }

function createGrid(num) {
  for (i=1; i <= num; i++) {
    const row = document.createElement("div");
      row.classList.add("gridRow");
      container.appendChild(row);
      for (j=1; j <= num; j++) {
        const cell = document.createElement("div");
          cell.classList.add("gridCell");
          cell.addEventListener("mouseover", function() {
            this.classList.add("gridCellHover");});
          row.appendChild(cell);
      }
  }
}
