const cpuHandFrame = document.getElementById('cpuHandFrame');
const playerHandFrame = document.getElementById('playerHandFrame');

//create hand image
function createHand(str, element){
    const buildElement = document.createElement('img');
    let imageAddress = '';

    if(str == 'stone'){
        imageAddress = 'library/stone.png';
    } else if (str == 'scissors'){
        imageAddress = 'library/scissors.png';
    } else if (str == 'paper') {
        imageAddress = 'library/paper.png';
    }

    buildElement.src = imageAddress;
    buildElement.classList.add('hand-pic');
    element.appendChild(buildElement);
}

createHand('paper', cpuHandFrame);
createHand('stone', playerHandFrame);
createHand('paper', playerHandFrame);
createHand('scissors', playerHandFrame);