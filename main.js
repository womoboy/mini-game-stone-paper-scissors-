const cpuHandFrame = document.getElementById("cpuHandFrame");
const playerHandFrame = document.getElementById("playerHandFrame");

//create hand image
function createHand(str, element) {
  const buildElement = document.createElement("img");
  let imageAddress = "";

  if (str == "stone") {
    imageAddress = "library/stone.png";
  } else if (str == "paper") {
    imageAddress = "library/paper.png";
  } else if (str == "scissors") {
    imageAddress = "library/scissors.png";
  }

  buildElement.src = imageAddress;
  buildElement.classList.add("hand-pic");
  element.appendChild(buildElement);
}

//cpu get hand
function cpuGetHand() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  let cpuHand = "";
  if (randomNumber == 1) {
    cpuHand = "stone";
  } else if (randomNumber == 2) {
    cpuHand = "paper";
  } else if (randomNumber == 3) {
    cpuHand = "scissors";
  }

  //call createHand function to create random hand
  createHand(cpuHand, cpuHandFrame);
}

//cheack the player hand with cpu hand
function checkHand(srcValue) {
    const getCpuHandValue = document.getElementById("cpuHandFrame").firstChild.src;
    let cpuHandValue = '';
    let playerHandValue = ''
    let isTrue = false;
    let isDraw = false;
    
    //find cpu value
    if(getCpuHandValue.match(/stone/ig) !== null){
        cpuHandValue = 'stone';
    } else if(getCpuHandValue.match(/paper/ig) !== null) {
        cpuHandValue = 'paper';
    } else if(getCpuHandValue.match(/scissors/ig) !== null) {
        cpuHandValue = 'scissors';
    }

    //find player value
    if(srcValue.match(/stone/ig) !== null){
        playerHandValue = 'stone';
    } else if(srcValue.match(/paper/ig) !== null) {
        playerHandValue = 'paper';
    } else if(srcValue.match(/scissors/ig) !== null) {
        playerHandValue = 'scissors';
    }

    //compare cpu and player
    if(cpuHandValue == 'stone' && playerHandValue == 'paper'){
        isTrue = true;
    } else if(cpuHandValue == 'paper' && playerHandValue == 'scissors'){
        isTrue = true;
    } else if(cpuHandValue == 'scissors' && playerHandValue == 'stone'){
        isTrue = true;
    } else if(cpuHandValue === playerHandValue) {
        isDraw = true;
    } else {
        isDraw = false;
        isWin = false;
    }


    //finaly 
    if(isDraw == true) {
        console.log('You Draw !');
    }else if(isDraw == false && isTrue == true){
        console.log('You Win !');
    }else if(isDraw == false && isTrue == false){
        console.log('You lose !');
    }

    cpuHandFrame.innerHTML = '';
    cpuGetHand();
}

//when page loade completed
window.onload = () => {
  //cpu get hand
  cpuGetHand();
};

//create user hand
createHand("stone", playerHandFrame);
createHand("paper", playerHandFrame);
createHand("scissors", playerHandFrame);

//set event to hands
const handPlayerElement = document.getElementById('playerHandFrame').children;
handPlayerElement[0].addEventListener('click', (e) => checkHand(e.target.src));
handPlayerElement[1].addEventListener('click', (e) => checkHand(e.target.src));
handPlayerElement[2].addEventListener('click', (e) => checkHand(e.target.src));
