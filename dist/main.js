/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/create.js */ \"./src/utils/create.js\");\n/* harmony import */ var _utils_burger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/burger.js */ \"./src/utils/burger.js\");\n\r\n\r\n\r\n\r\n_utils_create_js__WEBPACK_IMPORTED_MODULE_0__.smile.addEventListener(\"click\", function () {\r\n  localStorage.clear();\r\n  location.reload();\r\n});\r\n\r\nlet startDate = new Date();\r\nlet gameOver = false;\r\nlet firstClick = false;\r\n\r\nfunction updateGameDuration() {\r\n  if (gameOver) return;\r\n  if (flag) {\r\n    let currentDate = new Date();\r\n    let timeDiff = Math.floor((currentDate - startDate) / 1000);\r\n    let minutes = Math.floor(timeDiff / 60);\r\n    let seconds = timeDiff % 60;\r\n    _utils_create_js__WEBPACK_IMPORTED_MODULE_0__.date.textContent = `${minutes.toString().padStart(2, \"0\")}:${seconds\r\n      .toString()\r\n      .padStart(2, \"0\")}`;\r\n  }\r\n}\r\n\r\nclass Mine {\r\n  constructor() {\r\n    this.isMine = false;\r\n    this.nearMine = 0;\r\n    this.isOpen = false;\r\n  }\r\n}\r\n\r\nlet row = 10;\r\nlet column = 10;\r\nlet playField = [];\r\nlet countMine = 10;\r\nlet countOpened = 0;\r\nlet flag = false;\r\nlet minesLeft = countMine;\r\n_utils_create_js__WEBPACK_IMPORTED_MODULE_0__.pointBombs.innerHTML = minesLeft;\r\n\r\nfunction createPlayField() {\r\n  playField = [];\r\n  for (let i = 0; i < row; i++) {\r\n    let getCells = [];\r\n    for (let j = 0; j < column; j++) {\r\n      getCells.push(new Mine());\r\n    }\r\n    playField.push(getCells);\r\n  }\r\n  for (let i = 0; i < countMine; ) {\r\n    let x = Math.floor(Math.random() * row);\r\n    let y = Math.floor(Math.random() * column);\r\n    if (playField[x][y].isMine == false) {\r\n      playField[x][y].isMine = true;\r\n      i++;\r\n    }\r\n  }\r\n}\r\n\r\nfunction countCellsNear(x, y) {\r\n  let x1 = x > 0 ? x - 1 : x;\r\n  let y1 = y > 0 ? y - 1 : y;\r\n  let x2 = x < row - 1 ? x + 1 : x;\r\n  let y2 = y < column - 1 ? y + 1 : y;\r\n  let count = 0;\r\n  for (let i = x1; i <= x2; i++) {\r\n    for (let j = y1; j <= y2; j++) {\r\n      if (playField[i][j].isMine && !(x == i && y == j)) count++;\r\n    }\r\n  }\r\n  playField[x][y].nearMine = count;\r\n  playField[x][y].innerHTML = count;\r\n}\r\n\r\nfunction countAllCells() {\r\n  for (let i = 0; i < row; i++) {\r\n    for (let j = 0; j < column; j++) {\r\n      countCellsNear(i, j);\r\n    }\r\n  }\r\n}\r\n\r\nfunction newGame() {\r\n  countOpened = 0;\r\n  createPlayField();\r\n  countAllCells();\r\n  _utils_create_js__WEBPACK_IMPORTED_MODULE_0__.textFooter.textContent = \"Good Luck!!!\";\r\n}\r\n\r\nnewGame();\r\n\r\nfunction drawPlayField() {\r\n  _utils_create_js__WEBPACK_IMPORTED_MODULE_0__.playingField.innerHTML = \"\";\r\n  const table = document.createElement(\"table\");\r\n  table.setAttribute(\"class\", \"table-boxes\");\r\n  for (let i = 0; i < column; i++) {\r\n    const tr = document.createElement(\"tr\");\r\n    for (let j = 0; j < row; j++) {\r\n      const td = document.createElement(\"td\");\r\n      td.setAttribute(\"class\", \"rows-boxes\");\r\n      if (playField[j][i].nearMine == 1) td.classList.add(\"one\");\r\n      if (playField[j][i].nearMine == 2) td.classList.add(\"two\");\r\n      if (playField[j][i].nearMine == 3) td.classList.add(\"three\");\r\n      if (playField[j][i].nearMine == 4) td.classList.add(\"four\");\r\n      if (playField[j][i].nearMine == 5) td.classList.add(\"five\");\r\n      tr.appendChild(td);\r\n    }\r\n    table.appendChild(tr);\r\n  }\r\n  _utils_create_js__WEBPACK_IMPORTED_MODULE_0__.playingField.appendChild(table);\r\n}\r\n\r\ndrawPlayField();\r\n\r\nfunction drawMine() {\r\n  const table = document.querySelector(\".table-boxes\");\r\n  for (let x = 0; x < row; x++) {\r\n    for (let y = 0; y < column; y++) {\r\n      let td = table.rows[y].children[x];\r\n      if (playField[x][y].isMine) {\r\n        td.classList.add(\"mine\");\r\n      }\r\n    }\r\n  }\r\n}\r\ndrawMine();\r\n\r\nfunction openAllCells(event) {\r\n  if (gameOver) return;\r\n  let x = event.target.cellIndex;\r\n  let y = event.target.parentNode.rowIndex;\r\n  recurseOpenCells(x, y);\r\n}\r\n\r\nfunction recurseOpenCells(x, y) {\r\n  const table = document.querySelector(\".table-boxes\");\r\n  let td = table.rows[y].children[x];\r\n  if (playField[x][y].isOpen) return;\r\n  if (playField[x][y].isMine) {\r\n    td.classList.add(\"mine\");\r\n    drawMine();\r\n    _utils_create_js__WEBPACK_IMPORTED_MODULE_0__.textFooter.textContent = \"You lost!!!\";\r\n    gameOver = true;\r\n    flag = false;\r\n    _utils_create_js__WEBPACK_IMPORTED_MODULE_0__.mouth.style.animation = \"mouth 1s infinite\";\r\n    _utils_create_js__WEBPACK_IMPORTED_MODULE_0__.audioLost.play();\r\n  } else {\r\n    if (playField[x][y].nearMine == 0) td.innerHTML = \"\";\r\n    else {\r\n      td.innerHTML = playField[x][y].nearMine;\r\n    }\r\n    playField[x][y].isOpen = true;\r\n    td.classList.add(\"opened\");\r\n    _utils_create_js__WEBPACK_IMPORTED_MODULE_0__.audiOpened.play();\r\n    countOpened++;\r\n    if (row * column - countMine == countOpened) {\r\n      _utils_create_js__WEBPACK_IMPORTED_MODULE_0__.textFooter.textContent = \"Greeting!!! You win!!!\";\r\n      flag = false;\r\n      gameOver = true;\r\n      drawMine();\r\n      _utils_create_js__WEBPACK_IMPORTED_MODULE_0__.audioWin.play();\r\n      _utils_create_js__WEBPACK_IMPORTED_MODULE_0__.eyeLeft.style.animation = \"eye 1s infinite\";\r\n      _utils_create_js__WEBPACK_IMPORTED_MODULE_0__.eyeRight.style.animation = \"eye 1s infinite\";\r\n      _utils_create_js__WEBPACK_IMPORTED_MODULE_0__.mouth.style.animation = \"mouth 1s infinite\";\r\n    }\r\n\r\n    if (playField[x][y].nearMine == 0) {\r\n      let x1 = x > 0 ? x - 1 : x;\r\n      let y1 = y > 0 ? y - 1 : y;\r\n      let x2 = x + 1 < row ? x + 1 : x;\r\n      let y2 = y + 1 < column ? y + 1 : y;\r\n\r\n      for (let i = x1; i <= x2; i++) {\r\n        for (let j = y1; j <= y2; j++) {\r\n          recurseOpenCells(i, j);\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n_utils_create_js__WEBPACK_IMPORTED_MODULE_0__.playingField.addEventListener(\"click\", function (event) {\r\n  flag = true;\r\n  firstClick = true;\r\n  if (event.target.matches(\"td\") && !event.target.matches(\".my-mine\")) {\r\n    openAllCells(event);\r\n  }\r\n});\r\n\r\nfunction pointMyMine(event) {\r\n  if (gameOver) return;\r\n  const tdBoxes = document.querySelectorAll(\".rows-boxes\");\r\n  let x = event.target.cellIndex;\r\n  let y = event.target.parentNode.rowIndex;\r\n  if (playField[x][y].isOpen) return;\r\n  const isMyMine = event.target.classList.toggle(\"my-mine\");\r\n  const myMineCells = Array.from(tdBoxes).filter((box) =>\r\n    box.classList.contains(\"my-mine\")\r\n  );\r\n\r\n  minesLeft = countMine - myMineCells.length;\r\n  _utils_create_js__WEBPACK_IMPORTED_MODULE_0__.pointBombs.innerHTML = minesLeft;\r\n}\r\n\r\n_utils_create_js__WEBPACK_IMPORTED_MODULE_0__.playingField.addEventListener(\"contextmenu\", function (event) {\r\n  flag = true;\r\n  event.preventDefault();\r\n  _utils_create_js__WEBPACK_IMPORTED_MODULE_0__.audioMyMine.play();\r\n  if (event.target.matches(\"td\")) {\r\n    pointMyMine(event);\r\n  }\r\n});\r\n\r\nnewGame();\r\nsetInterval(updateGameDuration, 1000);\r\ndrawPlayField();\r\n\r\nconst scriptTag = document.querySelector(\r\n  'script[src=\"./src/index.js\"]'\r\n);\r\ndocument.body.appendChild(scriptTag);\r\n\r\n\n\n//# sourceURL=webpack://minesweeper/./src/index.js?");

/***/ }),

/***/ "./src/utils/burger.js":
/*!*****************************!*\
  !*** ./src/utils/burger.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.js */ \"./src/utils/create.js\");\n\r\n\r\nconst body = document.querySelector(\"body\");\r\nconst navLink = document.querySelectorAll(\".nav-list-item\");\r\n\r\n_create_js__WEBPACK_IMPORTED_MODULE_0__.menuBurger.addEventListener(\"click\", () => {\r\n  _create_js__WEBPACK_IMPORTED_MODULE_0__.menuBurger.classList.toggle(\"-active\");\r\n  _create_js__WEBPACK_IMPORTED_MODULE_0__.nav.classList.toggle(\"-active\");\r\n  _create_js__WEBPACK_IMPORTED_MODULE_0__.overlay.classList.toggle(\"-active\");\r\n  body.classList.toggle(\"-active\");\r\n});\r\n\r\n_create_js__WEBPACK_IMPORTED_MODULE_0__.overlay.addEventListener(\"click\", () => {\r\n  _create_js__WEBPACK_IMPORTED_MODULE_0__.menuBurger.classList.remove(\"-active\");\r\n  _create_js__WEBPACK_IMPORTED_MODULE_0__.nav.classList.remove(\"-active\");\r\n  _create_js__WEBPACK_IMPORTED_MODULE_0__.overlay.classList.remove(\"-active\");\r\n  body.classList.toggle(\"-active\");\r\n});\r\n\r\nnavLink.forEach((el) => {\r\n  el.addEventListener(\"click\", () => {\r\n    _create_js__WEBPACK_IMPORTED_MODULE_0__.menuBurger.classList.remove(\"-active\");\r\n    _create_js__WEBPACK_IMPORTED_MODULE_0__.nav.classList.remove(\"-active\");\r\n    _create_js__WEBPACK_IMPORTED_MODULE_0__.overlay.classList.remove(\"-active\");\r\n    body.classList.remove(\"-active\");\r\n  });\r\n});\n\n//# sourceURL=webpack://minesweeper/./src/utils/burger.js?");

/***/ }),

/***/ "./src/utils/create.js":
/*!*****************************!*\
  !*** ./src/utils/create.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"audiOpened\": () => (/* binding */ audiOpened),\n/* harmony export */   \"audioLost\": () => (/* binding */ audioLost),\n/* harmony export */   \"audioMyMine\": () => (/* binding */ audioMyMine),\n/* harmony export */   \"audioWin\": () => (/* binding */ audioWin),\n/* harmony export */   \"date\": () => (/* binding */ date),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"eyeLeft\": () => (/* binding */ eyeLeft),\n/* harmony export */   \"eyeRight\": () => (/* binding */ eyeRight),\n/* harmony export */   \"menuBurger\": () => (/* binding */ menuBurger),\n/* harmony export */   \"mouth\": () => (/* binding */ mouth),\n/* harmony export */   \"nav\": () => (/* binding */ nav),\n/* harmony export */   \"overlay\": () => (/* binding */ overlay),\n/* harmony export */   \"playingField\": () => (/* binding */ playingField),\n/* harmony export */   \"pointBombs\": () => (/* binding */ pointBombs),\n/* harmony export */   \"resultsContainer\": () => (/* binding */ resultsContainer),\n/* harmony export */   \"smile\": () => (/* binding */ smile),\n/* harmony export */   \"textFooter\": () => (/* binding */ textFooter)\n/* harmony export */ });\n// create header-----------------------------------------------------------------------------------------------------------------------------------------------------------------\r\nconst wrapperBlock = document.createElement(\"div\");\r\nwrapperBlock.setAttribute(\"class\", \"wrapper\");\r\ndocument.body.appendChild(wrapperBlock);\r\nconst header = document.createElement(\"header\");\r\nheader.setAttribute(\"class\", \"header\");\r\nconst menuBurger = document.createElement(\"div\");\r\nmenuBurger.setAttribute(\"class\", \"burger\");\r\nconst spanBurger = document.createElement(\"span\");\r\nconst nav = document.createElement(\"nav\");\r\nnav.setAttribute(\"class\", \"nav\");\r\nconst ulist = document.createElement(\"ul\");\r\nconst listItemOne = document.createElement(\"li\");\r\nconst listItemTwo = document.createElement(\"li\");\r\nconst listItemThree = document.createElement(\"li\");\r\nulist.setAttribute(\"class\", \"header-list\");\r\nlistItemOne.setAttribute(\"class\", \"nav-list-item\");\r\nlistItemOne.textContent = \"Game\";\r\nlistItemTwo.setAttribute(\"class\", \"nav-list-item\");\r\nlistItemTwo.textContent = \"Options\";\r\nlistItemThree.setAttribute(\"class\", \"nav-list-item\");\r\nlistItemThree.textContent = \"Help\";\r\nmenuBurger.appendChild(spanBurger);\r\nulist.appendChild(listItemOne);\r\nulist.appendChild(listItemTwo);\r\nulist.appendChild(listItemThree);\r\nnav.appendChild(ulist);\r\nheader.appendChild(menuBurger);\r\nheader.appendChild(nav);\r\nwrapperBlock.appendChild(header);\r\n\r\n//create main----------------------------------------------------------------------------------------------------------------------------\r\nconst main= document.createElement(\"main\");\r\nmain.setAttribute(\"class\", \"main\");\r\nconst clockFace= document.createElement(\"div\");\r\nclockFace.setAttribute(\"class\", \"clock-face\");\r\nconst clockPoints= document.createElement(\"div\");\r\nclockPoints.setAttribute(\"class\", \"clock-points\");\r\nconst pointText= document.createElement(\"div\");\r\npointText.setAttribute(\"class\", \"point-text\");\r\npointText.textContent =\"mines left:\";\r\nclockPoints.appendChild(pointText);\r\nconst pointBombs= document.createElement(\"div\");\r\npointBombs.setAttribute(\"class\", \"point-bombs\");\r\nclockPoints.appendChild(pointBombs);\r\nclockFace.appendChild(clockPoints);\r\n//smile-------------------------------------------------------------------------------------------------------------------------------------\r\nconst smile= document.createElement(\"div\");\r\nsmile.setAttribute(\"class\", \"smile\");\r\nclockFace.appendChild(smile);\r\nconst smileyFace= document.createElement(\"div\");\r\nsmileyFace.setAttribute(\"class\", \"smiley-face\");\r\nsmile.appendChild(smileyFace);\r\nconst eyeLeft= document.createElement(\"div\");\r\neyeLeft.setAttribute(\"class\", \"eye-left\");\r\nsmileyFace.appendChild(eyeLeft);\r\nconst eyeRight= document.createElement(\"div\");\r\neyeRight.setAttribute(\"class\", \"eye-right\");\r\nsmileyFace.appendChild(eyeRight);\r\nconst mouth= document.createElement(\"div\");\r\nmouth.setAttribute(\"class\", \"mouth\");\r\nsmileyFace.appendChild(mouth);\r\nconst timeOfGame= document.createElement(\"div\");\r\ntimeOfGame.setAttribute(\"class\", \"time-game\");\r\nconst timeText= document.createElement(\"div\");\r\ntimeText.setAttribute(\"class\", \"time-text\");\r\ntimeOfGame.appendChild(timeText);\r\ntimeText.textContent =\"time of game:\";\r\nconst date= document.createElement(\"div\");\r\ndate.setAttribute(\"class\", \"date\");\r\ndate.textContent = \"00:00\";\r\ntimeOfGame.appendChild(date);\r\nclockFace.appendChild(timeOfGame);\r\n\r\nconst playingField = document.createElement(\"div\");\r\nplayingField.setAttribute(\"class\", \"playing-field\");\r\nconst audioLost = document.createElement(\"audio\");\r\naudioLost.setAttribute(\"class\", \"audio-lost\");\r\naudioLost.src =\"./src/audio/ou_nou_nou_nou.mp3\"\r\nmain.appendChild(audioLost);\r\nconst audioWin = document.createElement(\"audio\");\r\naudioWin.setAttribute(\"class\", \"audio-win\");\r\naudioWin.src =\"./src/audio/Queen_We_Are_The_Champions.mp3\"\r\nmain.appendChild(audioWin);\r\nconst audiOpened = document.createElement(\"audio\");\r\naudiOpened.setAttribute(\"class\", \"audio-opened\");\r\naudiOpened.src =\"./src/audio/neobyichnyiy-zvuk-knopki1.mp3\"\r\nmain.appendChild(audiOpened);\r\nconst audioMyMine= document.createElement(\"audio\");\r\naudioMyMine.setAttribute(\"class\", \"audio-my-mine\");\r\naudioMyMine.src =\"./src/audio/zvonkiy-zvuk-najatiya-knopki1.mp3\"\r\nmain.appendChild(audioMyMine);\r\nmain.appendChild(clockFace);\r\nmain.appendChild(playingField);\r\n\r\nconst resultsContainer= document.createElement(\"div\");\r\nresultsContainer.setAttribute(\"class\", \" results-container\");\r\nmain.appendChild( resultsContainer);\r\n\r\nwrapperBlock.appendChild(main);\r\n\r\n//create footer-----------------------------------------------------------------------------------------------------------------------------------------------------\r\nconst footer= document.createElement(\"footer\");\r\nfooter.setAttribute(\"class\", \"footer\");\r\nconst textFooter = document.createElement(\"h3\");\r\ntextFooter.setAttribute(\"class\", \"text-footer\");\r\nfooter.appendChild(textFooter);\r\nwrapperBlock.appendChild(footer);\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wrapperBlock);\r\n\r\nconst overlay= document.createElement(\"div\");\r\noverlay.setAttribute(\"class\", \"overlay\");\r\ndocument.body.appendChild(overlay);\n\n//# sourceURL=webpack://minesweeper/./src/utils/create.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;