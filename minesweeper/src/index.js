import wrapperBlock from "./utils/create.js";
import "./utils/burger.js"
import {
  playingField,
  pointBombs,
  textFooter,
  smile,
  date,
  mouth,
  eyeLeft,
  eyeRight,
  audioLost,
  audioWin,
  audioMyMine,
  audiOpened,
  resultsContainer
} from "./utils/create.js";

smile.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

let startDate = new Date();
let gameOver = false;
let firstClick = false;

function updateGameDuration() {
  if (gameOver) return;
  if (flag) {
    let currentDate = new Date();
    let timeDiff = Math.floor((currentDate - startDate) / 1000);
    let minutes = Math.floor(timeDiff / 60);
    let seconds = timeDiff % 60;
    date.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }
}

class Mine {
  constructor() {
    this.isMine = false;
    this.nearMine = 0;
    this.isOpen = false;
  }
}

let row = 10;
let column = 10;
let playField = [];
let countMine = 10;
let countOpened = 0;
let flag = false;
let minesLeft = countMine;
pointBombs.innerHTML = minesLeft;

function createPlayField() {
  playField = [];
  for (let i = 0; i < row; i++) {
    let getCells = [];
    for (let j = 0; j < column; j++) {
      getCells.push(new Mine());
    }
    playField.push(getCells);
  }
  for (let i = 0; i < countMine; ) {
    let x = Math.floor(Math.random() * row);
    let y = Math.floor(Math.random() * column);
    if (playField[x][y].isMine == false) {
      playField[x][y].isMine = true;
      i++;
    }
  }
}

function countCellsNear(x, y) {
  let x1 = x > 0 ? x - 1 : x;
  let y1 = y > 0 ? y - 1 : y;
  let x2 = x < row - 1 ? x + 1 : x;
  let y2 = y < column - 1 ? y + 1 : y;
  let count = 0;
  for (let i = x1; i <= x2; i++) {
    for (let j = y1; j <= y2; j++) {
      if (playField[i][j].isMine && !(x == i && y == j)) count++;
    }
  }
  playField[x][y].nearMine = count;
  playField[x][y].innerHTML = count;
}

function countAllCells() {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      countCellsNear(i, j);
    }
  }
}

function newGame() {
  countOpened = 0;
  createPlayField();
  countAllCells();
  textFooter.textContent = "Good Luck!!!";
}

newGame();

function drawPlayField() {
  playingField.innerHTML = "";
  const table = document.createElement("table");
  table.setAttribute("class", "table-boxes");
  for (let i = 0; i < column; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < row; j++) {
      const td = document.createElement("td");
      td.setAttribute("class", "rows-boxes");
      if (playField[j][i].nearMine == 1) td.classList.add("one");
      if (playField[j][i].nearMine == 2) td.classList.add("two");
      if (playField[j][i].nearMine == 3) td.classList.add("three");
      if (playField[j][i].nearMine == 4) td.classList.add("four");
      if (playField[j][i].nearMine == 5) td.classList.add("five");
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  playingField.appendChild(table);
}

drawPlayField();

function drawMine() {
  const table = document.querySelector(".table-boxes");
  for (let x = 0; x < row; x++) {
    for (let y = 0; y < column; y++) {
      let td = table.rows[y].children[x];
      if (playField[x][y].isMine) {
        td.classList.add("mine");
      }
    }
  }
}
drawMine();

function openAllCells(event) {
  if (gameOver) return;
  let x = event.target.cellIndex;
  let y = event.target.parentNode.rowIndex;
  recurseOpenCells(x, y);
}

function recurseOpenCells(x, y) {
  const table = document.querySelector(".table-boxes");
  let td = table.rows[y].children[x];
  if (playField[x][y].isOpen) return;
  if (playField[x][y].isMine) {
    td.classList.add("mine");
    drawMine();
    textFooter.textContent = "You lost!!!";
    gameOver = true;
    flag = false;
    mouth.style.animation = "mouth 1s infinite";
    audioLost.play();
  } else {
    if (playField[x][y].nearMine == 0) td.innerHTML = "";
    else {
      td.innerHTML = playField[x][y].nearMine;
    }
    playField[x][y].isOpen = true;
    td.classList.add("opened");
    audiOpened.play();
    countOpened++;
    if (row * column - countMine == countOpened) {
      textFooter.textContent = "Greeting!!! You win!!!";
      flag = false;
      gameOver = true;
      drawMine();
      audioWin.play();
      eyeLeft.style.animation = "eye 1s infinite";
      eyeRight.style.animation = "eye 1s infinite";
      mouth.style.animation = "mouth 1s infinite";
    }

    if (playField[x][y].nearMine == 0) {
      let x1 = x > 0 ? x - 1 : x;
      let y1 = y > 0 ? y - 1 : y;
      let x2 = x + 1 < row ? x + 1 : x;
      let y2 = y + 1 < column ? y + 1 : y;

      for (let i = x1; i <= x2; i++) {
        for (let j = y1; j <= y2; j++) {
          recurseOpenCells(i, j);
        }
      }
    }
  }
}

playingField.addEventListener("click", function (event) {
  flag = true;
  firstClick = true;
  if (event.target.matches("td") && !event.target.matches(".my-mine")) {
    openAllCells(event);
  }
});

function pointMyMine(event) {
  if (gameOver) return;
  const tdBoxes = document.querySelectorAll(".rows-boxes");
  let x = event.target.cellIndex;
  let y = event.target.parentNode.rowIndex;
  if (playField[x][y].isOpen) return;
  const isMyMine = event.target.classList.toggle("my-mine");
  const myMineCells = Array.from(tdBoxes).filter((box) =>
    box.classList.contains("my-mine")
  );

  minesLeft = countMine - myMineCells.length;
  pointBombs.innerHTML = minesLeft;
}

playingField.addEventListener("contextmenu", function (event) {
  flag = true;
  event.preventDefault();
  audioMyMine.play();
  if (event.target.matches("td")) {
    pointMyMine(event);
  }
});

newGame();
setInterval(updateGameDuration, 1000);
drawPlayField();

const scriptTag = document.querySelector(
  'script[src=""./src/index.js""]'
);
document.body.appendChild(scriptTag);

