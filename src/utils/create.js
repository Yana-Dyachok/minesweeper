// create header-----------------------------------------------------------------------------------------------------------------------------------------------------------------
const wrapperBlock = document.createElement("div");
wrapperBlock.setAttribute("class", "wrapper");
document.body.appendChild(wrapperBlock);
const header = document.createElement("header");
header.setAttribute("class", "header");
export const menuBurger = document.createElement("div");
menuBurger.setAttribute("class", "burger");
const spanBurger = document.createElement("span");
export const nav = document.createElement("nav");
nav.setAttribute("class", "nav");
const ulist = document.createElement("ul");
const listItemOne = document.createElement("li");
const listItemTwo = document.createElement("li");
const listItemThree = document.createElement("li");
ulist.setAttribute("class", "header-list");
listItemOne.setAttribute("class", "nav-list-item");
listItemOne.textContent = "Game";
listItemTwo.setAttribute("class", "nav-list-item");
listItemTwo.textContent = "Options";
listItemThree.setAttribute("class", "nav-list-item");
listItemThree.textContent = "Help";
menuBurger.appendChild(spanBurger);
ulist.appendChild(listItemOne);
ulist.appendChild(listItemTwo);
ulist.appendChild(listItemThree);
nav.appendChild(ulist);
header.appendChild(menuBurger);
header.appendChild(nav);
wrapperBlock.appendChild(header);

//create main----------------------------------------------------------------------------------------------------------------------------
const main= document.createElement("main");
main.setAttribute("class", "main");
const clockFace= document.createElement("div");
clockFace.setAttribute("class", "clock-face");
const clockPoints= document.createElement("div");
clockPoints.setAttribute("class", "clock-points");
const pointText= document.createElement("div");
pointText.setAttribute("class", "point-text");
pointText.textContent ="mines left:";
clockPoints.appendChild(pointText);
export const pointBombs= document.createElement("div");
pointBombs.setAttribute("class", "point-bombs");
clockPoints.appendChild(pointBombs);
clockFace.appendChild(clockPoints);
//smile-------------------------------------------------------------------------------------------------------------------------------------
export const smile= document.createElement("div");
smile.setAttribute("class", "smile");
clockFace.appendChild(smile);
const smileyFace= document.createElement("div");
smileyFace.setAttribute("class", "smiley-face");
smile.appendChild(smileyFace);
export const eyeLeft= document.createElement("div");
eyeLeft.setAttribute("class", "eye-left");
smileyFace.appendChild(eyeLeft);
export const eyeRight= document.createElement("div");
eyeRight.setAttribute("class", "eye-right");
smileyFace.appendChild(eyeRight);
export const mouth= document.createElement("div");
mouth.setAttribute("class", "mouth");
smileyFace.appendChild(mouth);
const timeOfGame= document.createElement("div");
timeOfGame.setAttribute("class", "time-game");
const timeText= document.createElement("div");
timeText.setAttribute("class", "time-text");
timeOfGame.appendChild(timeText);
timeText.textContent ="time of game:";
export const date= document.createElement("div");
date.setAttribute("class", "date");
date.textContent = "00:00";
timeOfGame.appendChild(date);
clockFace.appendChild(timeOfGame);

export const playingField = document.createElement("div");
playingField.setAttribute("class", "playing-field");
export const audioLost = document.createElement("audio");
audioLost.setAttribute("class", "audio-lost");
audioLost.src ="./src/audio/ou_nou_nou_nou.mp3"
main.appendChild(audioLost);
export const audioWin = document.createElement("audio");
audioWin.setAttribute("class", "audio-win");
audioWin.src ="./src/audio/Queen_We_Are_The_Champions.mp3"
main.appendChild(audioWin);
export const audiOpened = document.createElement("audio");
audiOpened.setAttribute("class", "audio-opened");
audiOpened.src ="./src/audio/neobyichnyiy-zvuk-knopki1.mp3"
main.appendChild(audiOpened);
export const audioMyMine= document.createElement("audio");
audioMyMine.setAttribute("class", "audio-my-mine");
audioMyMine.src ="./src/audio/zvonkiy-zvuk-najatiya-knopki1.mp3"
main.appendChild(audioMyMine);
main.appendChild(clockFace);
main.appendChild(playingField);

export const resultsContainer= document.createElement("div");
resultsContainer.setAttribute("class", " results-container");
main.appendChild( resultsContainer);

wrapperBlock.appendChild(main);

//create footer-----------------------------------------------------------------------------------------------------------------------------------------------------
const footer= document.createElement("footer");
footer.setAttribute("class", "footer");
export const textFooter = document.createElement("h3");
textFooter.setAttribute("class", "text-footer");
footer.appendChild(textFooter);
wrapperBlock.appendChild(footer);
export default wrapperBlock;

export const overlay= document.createElement("div");
overlay.setAttribute("class", "overlay");
document.body.appendChild(overlay);