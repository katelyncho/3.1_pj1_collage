const grid = document.getElementById("gridcontainer");
grid.innerHTML = "";
for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 3; col++) {
    const cell = document.createElement("div");
    cell.className = "gridcell";
    cell.style.gridColumn = col * 2 + 1 + "/" + (col * 2 + 2);
    cell.style.gridRow = row + 1 + "/" + (row + 2);
    cell.style.width = "100px";
    cell.style.height = "100px";
    cell.style.border = "1px solid #ccc";
    cell.style.display = "flex";
    cell.style.alignItems = "center";
    cell.style.justifyContent = "center";
    cell.innerHTML = `<img src="img/test_1.png" alt="img" style="width:80px; height:80px;">`;
    grid.appendChild(cell);
  }
}

// Image sources for demo
const images = [
  "img/test_1.png",
  "img/test_2.jpg",
  "img/test_3.png",
  "img/test_4.jpg",
];

function updateGridImages() {
  const hVal = parseInt(document.getElementById("horizontalSlider").value);
  const vVal = parseInt(document.getElementById("verticalSlider").value);
  const cells = document.querySelectorAll(".gridcell");
  cells.forEach((cell, idx) => {
    // Example: pick image based on slider values and cell index
    const imgIdx = (hVal + vVal + idx) % images.length;
    cell.innerHTML = `<img src="${images[imgIdx]}" alt="img" style="width:80px; height:80px;">`;
  });
}

document
  .getElementById("horizontalSlider")
  .addEventListener("input", updateGridImages);
document
  .getElementById("verticalSlider")
  .addEventListener("input", updateGridImages);
