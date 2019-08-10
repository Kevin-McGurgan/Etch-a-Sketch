const container = document.querySelector("#container");

createGrid(16);

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
