const container = document.querySelector("#container");

createGrid(16);

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
