// create header-----------------------------------------------------------------------------------------------------------------------------------------------------------------
document.body.setAttribute("class", "body change");
const wrapperBlock = document.createElement("div");
wrapperBlock.setAttribute("class", "wrapper");
document.body.append(wrapperBlock);
const header = document.createElement("header");
header.setAttribute("class", "header");
const clockFace= document.createElement("div");
clockFace.setAttribute("class", "clock-face");
//first row  level of game and count og mines-----------------------------------------------------------------------------------------------------------------------------------------
const firstRow=document.createElement("div");
firstRow.setAttribute("class", "first-row");
//level----------------------------------------------------------------------------------------------------------------------------------------------------
const levelBlock= document.createElement("div");
levelBlock.setAttribute("class", "level-block");
const levelText= document.createElement("div");
levelText.setAttribute("class", "menu-title");
levelText.textContent ="Level: ";
levelBlock.append(levelText);
export const level= document.createElement("select");
level.setAttribute("class", "level");
const option1 = document.createElement("option");
option1.value = "value1";
option1.textContent = "easy";

const option2 = document.createElement("option");
option2.value = "value2";
option2.textContent = "medium";

const option3 = document.createElement("option");
option3.value = "value3";
option3.textContent = "hard";

level.appendChild(option1);
level.appendChild(option2);
level.appendChild(option3);
levelBlock.append(level);
firstRow.append(levelBlock);
//count of mine ------------------------------------------------------------------------------------------------------------------------------------------
const countMineBlock= document.createElement("div");
countMineBlock.setAttribute("class", "mine-block");
const mineText= document.createElement("div");
mineText.setAttribute("class", "menu-title");
mineText.textContent =" Mines: ";
countMineBlock.append(mineText);
export let minesCount=document.createElement("input");
minesCount.setAttribute("class", "mine-count");
minesCount.setAttribute("type", "number");
minesCount.setAttribute("max", "100");
minesCount.setAttribute("maxlength", "2"); 
minesCount.placeholder=10;
countMineBlock.append(minesCount);
firstRow.append(countMineBlock);
//second row-theme toggle, smile-reloader, mike-------------------------------------------------------------------------------------------------------------
const secondRow=document.createElement("div");
secondRow.setAttribute("class", "second-row");
//theme toggle
export const themeToggle= document.createElement("div");
themeToggle.setAttribute("class", "theme-toggle change");
secondRow.append(themeToggle);
//smile-------------------------------------------------------------------------------------------------------------------------------------
export const smile= document.createElement("div");
smile.setAttribute("class", "smile");
secondRow.append(smile);
const smileyFace= document.createElement("div");
smileyFace.setAttribute("class", "smiley-face");
smile.append(smileyFace);
export const eyeLeft= document.createElement("div");
eyeLeft.setAttribute("class", "eye-left");
smileyFace.append(eyeLeft);
export const eyeRight= document.createElement("div");
eyeRight.setAttribute("class", "eye-right");
smileyFace.append(eyeRight);
export const mouth= document.createElement("div");
mouth.setAttribute("class", "mouth");
smileyFace.append(mouth);
// audio------------------------------------------------------------------------------------------------------------
export const mike= document.createElement("div");
mike.setAttribute("class", "mike change");
export const audioLost = document.createElement("audio");
audioLost.setAttribute("class", "audio-lost");
audioLost.src ="./assets/audio/ou_nou_nou_nou.mp3"
mike.append(audioLost);
export const audioWin = document.createElement("audio");
audioWin.setAttribute("class", "audio-win");
audioWin.src ="./assets/audio/Queen_We_Are_The_Champions.mp3"
mike.append(audioWin);
export const audiOpened = document.createElement("audio");
audiOpened.setAttribute("class", "audio-opened");
audiOpened.src ="./assets/audio/neobyichnyiy-zvuk-knopki1.mp3"
mike.append(audiOpened);
export const audioMyMine= document.createElement("audio");
audioMyMine.setAttribute("class", "audio-my-mine");
audioMyMine.src ="./assets/audio/zvonkiy-zvuk-najatiya-knopki1.mp3"
mike.append(audioMyMine);
secondRow.append(mike);

//third row - time and clicks---------------------------------------------------------------------------------------------
const thirdRow=document.createElement("div");
thirdRow.setAttribute("class", "third-row");
// click points----------------------------------------------------------------------------------------------------------------
const clickPoints= document.createElement("div");
clickPoints.setAttribute("class", "click-points");
const pointFlag= document.createElement("div");
pointFlag.setAttribute("class", "flag");
pointFlag.innerHTML='<img src="./assets/img/Flag-green256_25053.png" alt="flag" width="30"  height="30">'
clickPoints.append(pointFlag);
export const pointBombs= document.createElement("div");
pointBombs.setAttribute("class", "point-bombs change");
clickPoints.append(pointBombs);
const clicksText= document.createElement("div");
clicksText.setAttribute("class", "menu-title");
clicksText.textContent ="Clicks: ";
clickPoints.append(clicksText);
export const pointClicks= document.createElement("div");
pointClicks.setAttribute("class", "point-clicks change");
pointClicks.textContent = 0;
clickPoints.append(pointClicks);

thirdRow.append(clickPoints);
// time of game-----------------------------------------------------------------------------------------------------------------
const timeOfGame= document.createElement("div");
timeOfGame.setAttribute("class", "time-game");
const timeText= document.createElement("div");
timeText.setAttribute("class", "menu-title");
timeOfGame.append(timeText);
timeText.textContent ="Time: ";
export const date= document.createElement("div");
date.setAttribute("class", "time-game change");
date.textContent = "00:00";
timeOfGame.append(date);
thirdRow.append(timeOfGame);

clockFace.append(firstRow);
clockFace.append(secondRow);
clockFace.append(thirdRow);
header.append(clockFace);
wrapperBlock.append(header);

//create main----------------------------------------------------------------------------------------------------------------------------
const main= document.createElement("main");
main.setAttribute("class", "main");
export const playingField = document.createElement("div");
playingField.setAttribute("class", "playing-field");
main.append(playingField);
wrapperBlock.append(main);

//create footer-----------------------------------------------------------------------------------------------------------------------------------------------------
const footer= document.createElement("footer");
footer.setAttribute("class", "footer");
export const textFooter = document.createElement("h3");
textFooter.setAttribute("class", "text-footer change");
export const gameDurationStat = document.createElement("div");
footer.append(textFooter);
footer.append(gameDurationStat);
wrapperBlock.append(footer);
export default wrapperBlock;

export const overlay= document.createElement("ul");
overlay.setAttribute("class", "overlay");
document.body.append(overlay);