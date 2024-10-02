import "./utils/create.js";
import {
  playingField,
  pointBombs,
  pointClicks,
  textFooter,
  level,
  smile,
  date,
  mouth,
  eyeLeft,
  eyeRight,
  audioLost,
  audioWin,
  audioMyMine,
  audiOpened,
  mike,
  minesCount,
  themeToggle,
} from "./utils/create.js";

let countMines = parseInt(minesCount.value) || 10;
let row = 10;
let column = 10;
let playField = [];
let countOpened = 0;
let flag = false;
let minesLeft = countMines;
let countClicks = 0;
pointBombs.innerText = minesLeft;
let isFirstClickDone = false;
let gameOver = false;
let startDate;
let selectedOption = localStorage.getItem("level") || "easy";
let gameDuration = 0;
let themeFlag = false;
let mikeFlag = true;

let flags={
  themeFlag: "false",
  mikeFlag: "true",
  gameOver: "false",
  isFirstClickDone: "false",
  flag: "false",
}

class Mine {
  constructor() {
    this.isMine = false;
    this.nearMine = 0;
    this.isOpen = false;
  }
}

function changeSize(n, m) {
  row = n;
  column = n;
  countMines = m;
}

function getLevel(selectedOption) {
  if (selectedOption === "easy") changeSize(10, 10);
  if (selectedOption === "medium") changeSize(15, 40);
  if (selectedOption === "hard") changeSize(20, 60);
  minesCount.placeholder = countMines;
  pointBombs.innerText = countMines;
}

function getSelectedOption(selectedOption) {
  const childrenArray = Array.from(level.children);
  childrenArray.forEach((el) => {
    if (el.textContent === selectedOption) el.selected = true;
  });
}

level.addEventListener("change", function () {
  let option = level.options[level.selectedIndex];
  selectedOption = option.textContent;
  setLocalStorage();
  getLevel(selectedOption);
  // let  intervalId =setInterval(updateGameDuration, 1000);
  // clearInterval(intervalId);
  startGame();
});

minesCount.addEventListener("change", function () {
  countMines = parseInt(minesCount.value);
  minesCount.placeholder = countMines;
  pointBombs.innerText = countMines;
  startGame();
});

function updateGameDuration() {
  if (gameOver) {
    gameDuration = date.textContent;
    tenGameDuration.push(gameDuration);
    setLocalStorage();
    return;
  }
  if (flag) {
    let currentDate = new Date();
    let timeDiff = ~~((currentDate - startDate) / 1000);
    let minutes = ~~(timeDiff / 60);
    let seconds = timeDiff % 60;
    date.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }
}

function createPrimaryPlayField() {
  playField = [];
  for (let i = 0; i < row; i++) {
    let getCells = [];
    for (let j = 0; j < column; j++) {
      getCells.push(new Mine());
    }
    playField.push(getCells);
  }
  isFirstClickDone = false;
}

function drawPlayField() {
  playingField.innerHTML = "";
  const table = document.createElement("table");
  table.setAttribute("class", "table-boxes");
  for (let i = 0; i < column; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < row; j++) {
      const td = document.createElement("td");
      td.setAttribute("class", "rows-boxes change");
      if (themeToggle.classList.contains("dark")) td.classList.add("dark");
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  playingField.appendChild(table);
}

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

function placeMines(ex, ey) {
  for (let i = 0; i < countMines; ) {
    let x = ~~(Math.random() * row);
    let y = ~~(Math.random() * column);
    if (x !== ex && y !== ey) {
      if (playField[x][y].isMine == false) {
        playField[x][y].isMine = true;
        i++;
      }
    }
  }
  countAllCells();
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

function drawNumbers() {
  const td = document.querySelectorAll("td");
  td.forEach((cell) => {
    switch (cell.textContent) {
      case "1":
        cell.classList.add("one");
        break;
      case "2":
        cell.classList.add("two");
        break;
      case "3":
        cell.classList.add("three");
        break;
      case "4":
        cell.classList.add("four");
        break;
      case "5":
        cell.classList.add("five");
        break;
    }
  });
}

function openAllCells(event) {
  if (gameOver) return;
  let x = event.target.cellIndex;
  let y = event.target.parentNode.rowIndex;
  recurseOpenCells(x, y);
  drawNumbers();
}

function audioPlay(elem) {
  if (!mike.classList.contains("off")) {
    elem.play();
  } else {
    elem.pause();
  }
}

function toggleMute() {
  if (mike.classList.contains("off")) {
    audioMyMine.pause();
    audioLost.pause();
    audiOpened.pause();
    audioWin.pause();
  } else {
    if (textFooter.textContent === "You lost!!!") audioLost.play();
    if (textFooter.textContent === "Greeting!!! You win!!!") audioWin.play();
  }
}

mike.addEventListener("click", () => {
  mike.classList.toggle("off");
  toggleMute();
  mikeFlag = !mike.classList.contains("off") ? true : false;
  setLocalStorage();
});

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
    audioPlay(audioLost);
  } else {
    if (playField[x][y].nearMine == 0) td.innerHTML = "";
    else {
      td.innerHTML = playField[x][y].nearMine;
    }
    playField[x][y].isOpen = true;
    td.classList.add("opened");
    audioPlay(audiOpened);
    countOpened++;
    if (row * column - countMines == countOpened) {
      textFooter.textContent = "Greeting!!! You win!!!";
      flag = false;
      gameOver = true;
      drawMine();
      audioPlay(audioWin);
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
  pointClicks.textContent = ++countClicks;
  flag = true;
  if (!isFirstClickDone) {
    startDate = new Date();
    setInterval(updateGameDuration, 1000);
    event.target.classList.add("opened");
    let x = event.target.cellIndex;
    let y = event.target.parentNode.rowIndex;
    placeMines(x, y);
    openAllCells(event);
    isFirstClickDone = true;
  } else {
    if (event.target.matches("td") && !event.target.matches(".my-mine")) {
      openAllCells(event);
    }
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

  minesLeft = countMines - myMineCells.length;
  pointBombs.innerText = minesLeft;
}

playingField.addEventListener("contextmenu", function (event) {
  flag = true;
  event.preventDefault();
  audioPlay(audioMyMine);
  if (event.target.matches("td")) {
    pointMyMine(event);
  }
});

function startGame() {
  countOpened = 0;
  createPrimaryPlayField();
  drawPlayField();
  textFooter.textContent = "Good Luck!!!";
}

startGame();

// theme toggle-----------------------------------------------------------------------------------------------------------------------------
function getThemeToggle() {
  themeToggle.addEventListener("click", () => {
    const themeToggleElements = document.querySelectorAll(".change");
    themeToggleElements.forEach((btn) => btn.classList.toggle("dark"));
    themeFlag = themeToggle.classList.contains("dark") ? true : false;
    setLocalStorage();
  });
}

getThemeToggle();
const scriptTag = document.querySelector('script[src="./index.js"]');
document.body.appendChild(scriptTag);

//reload game-------------------------------------------------------------------------------------------------------------------------
smile.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});
window.getComputedStyle(mouth);

//save in localStorage-----------------------------------------------------------------------------------------------------------------
let tenGameDuration = [];
function setLocalStorage() {
  localStorage.setItem("mike", mikeFlag);
  localStorage.setItem("theme", themeFlag);
  localStorage.setItem("level", selectedOption);
  localStorage.setItem("duration", JSON.stringify(tenGameDuration));
}

function getLocalStorage() {
  if (localStorage.getItem("duration")) {
    const durationJSON = localStorage.getItem("duration");
    tenGameDuration = JSON.parse(durationJSON);
}
  if (localStorage.getItem("mike")) {
    mikeFlag = localStorage.getItem("mike");
    if (mikeFlag === "false") {
      mike.classList.add("off");
    } else {
      mike.classList.remove("off");
    }
    toggleMute();
  }

  if (localStorage.getItem("theme")) {
    themeFlag = localStorage.getItem("theme");
    const themeToggleElements = document.querySelectorAll(".change");
    if (themeFlag === "true") {
      themeToggleElements.forEach((btn) => btn.classList.add("dark"));
    } else {
      themeToggleElements.forEach((btn) => btn.classList.remove("dark"));
    }
  }

  if (localStorage.getItem("level")) {
    let selected = localStorage.getItem("level");
    getLevel(selected);
    getSelectedOption(selectedOption);
    startGame();
  }
}


window.addEventListener("load", getLocalStorage);
window.addEventListener("beforeunload", setLocalStorage);
