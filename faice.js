// I got help from copilot for this..but I modified it and tried to understand it myself too ;)

// array of image paths, and the IDs of the images
const imgs = [
  "img/test_1.png",
  "img/test_2.jpg",
  "img/test_3.png",
  "img/test_4.jpg",
  "img/test_5.png",
  "img/test_6.png",
  "img/test_7.png",
  "img/test_8.png",
  "img/test_9.png",
];
const gridIds = [
  "item1",
  "item2",
  "item3",
  "item4",
  "item5",
  "item6",
  "item7",
  "item8",
  "item9",
];

// uh this decides which image goes where
const imgMap = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

// shows different images based on slider values. I had to invert some of them to make it work in the way I wanted.
function updateGrid() {
  const hRaw = Number(document.getElementById("verticalSlider").value);
  const vRaw = Number(document.getElementById("horizontalSlider").value);
  const h = 2 - hRaw;
  const v = vRaw;
  gridIds.forEach((id, i) => {
    const img = document.getElementById(id);
    img.style.display = i === h * 3 + v ? "block" : "none";
    if (i === h * 3 + v) img.src = imgs[imgMap[h][v]];
  });
}

// event listeners for the sliders
document
  .getElementById("horizontalSlider")
  .addEventListener("input", updateGrid);
document.getElementById("verticalSlider").addEventListener("input", updateGrid);
updateGrid();
