const cpuHandFrame = document.getElementById("cpuHandFrame"); //get cpu hand element dom
const playerHandFrame = document.getElementById("playerHandFrame"); //get player hand element dom
let score = 0; //the score vlaue
let hightScore = 0; //the higthScore value

//create hand image
function createHand(str, element) {
  const buildElement = document.createElement("img"); //create element img
  let imageAddress = "";  //the file address

  if (str == "stone") {
    imageAddress = "library/stone.png";
  } else if (str == "paper") {
    imageAddress = "library/paper.png";
  } else if (str == "scissors") {
    imageAddress = "library/scissors.png";
  }

  buildElement.src = imageAddress;  //set srt image to created img element
  buildElement.classList.add("hand-pic"); //add class to element
  element.appendChild(buildElement); //append finally element to own div
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

    //final resault
    if(isDraw == true) {  //if Draw
        document.getElementById('status').innerHTML = 'You Draw !';
        playAudioEffect('library/audio/draw.mp3');
    }else if(isDraw == false && isTrue == true){
        document.getElementById('status').innerHTML = 'You Win !'; //if Win
        playAudioEffect('library/audio/winAudio.wav'); //play audio effect for win
        score++;
        if(score > hightScore) {
          hightScore = score;
          document.getElementById('higthScore').innerHTML = hightScore;
        }
        document.getElementById('score').innerHTML = score;
    }else if(isDraw == false && isTrue == false){  //if lose
        document.getElementById('status').innerHTML = 'You Lose !';
        playAudioEffect('library/audio/loseAudio.wav'); //play audio effect for lose
        resetScore();
        document.getElementById('score').innerHTML = score;
    }

    cpuHandFrame.innerHTML = ''; //reset the content of div
    cpuGetHand(); //random again
}

//play audio
function playAudioEffect(src){
  let audio = new Audio('');
  audio = new Audio(src);
  audio.play();
}

//resetSore
function resetScore(){
  score = 0;
}

//when page loade completed
window.onload = () => {
  //cpu get hand
  cpuGetHand();
  document.getElementById('score').innerHTML = 0;
};

//create user hand
createHand("stone", playerHandFrame);
createHand("paper", playerHandFrame);
createHand("scissors", playerHandFrame);

//set event to hands, get url src from img elements
const handPlayerElement = document.getElementById('playerHandFrame').children;
handPlayerElement[0].addEventListener('click', (e) => checkHand(e.target.src));
handPlayerElement[1].addEventListener('click', (e) => checkHand(e.target.src));
handPlayerElement[2].addEventListener('click', (e) => checkHand(e.target.src));
