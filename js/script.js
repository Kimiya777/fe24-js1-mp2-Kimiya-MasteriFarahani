// Namnformuläret

const form = document.querySelector('form');


const nameInput = document.getElementById('name-form');
const submitNameButton = document.getElementById('submit-name');

const totalRoundsDisplay = document.getElementById("total-rounds");
let totalRounds = 0;


submitNameButton.addEventListener('click', checkNameInput);

function checkPoints(pointsToCheck){
    if (totalPoints>=100 || points >=100){
        const H1 = document.createElement('h1');
        H1.innerText = `The game is finished, it took you a total of ${totalRounds}rounds to reach 100 points or more!`;
        document.body.append(H1);
    
        points = 0;
        pointsDisplay.innerText = `Points from this round: ${points}`;
    
        totalPoints = 0;
        totalPointsDisplay.innerText = `Total points: ${totalPoints}`;
        
        totalRounds = 0;
        totalRoundsDisplay.innerText = `Total rounds: ${totalRounds}`;
    }
 }

function checkNameInput(event) {
    event.preventDefault();

    const nameDisplay = document.getElementById('username-display');
    nameDisplay.innerText = `Username: ${nameInput.value}`;

    form.reset();
}

//Generera random tal (slå tärning)

const diceButton = document.getElementById('dice-button');

diceButton.addEventListener('click', rollDice);

let points = 0;

const pointsDisplay = document.getElementById('points');

function rollDice(event) {
    event.preventDefault();

    const diceNumber = Math.floor(Math.random() * 6) + 1;
    console.log(`Dice number: ${diceNumber}`);

    
    const diceNumberDisplay = document.getElementById('dice-number');
    diceNumberDisplay.innerText = `The dice landed on ${diceNumber}`;

    if (diceNumber !== 1) {

        points = points + diceNumber;

        console.log(`Points from this round: ${points}`);

    }
    else {
        diceNumberDisplay.innerText = `The dice landed on ${diceNumber}, this round is over and you don't get any points!`;
        points = 0;
        totalRounds ++;

    }
    pointsDisplay.innerText = `Points from this round: ${points}`;

    totalRoundsDisplay.innerText = `Total rounds: ${totalRounds}`;

    checkPoints(points)

    // if (diceNumber === 1)
    // {
    //     location. reload();
    // }
}

// frys poängen

const freezeButton = document.getElementById('freeze-button');

freezeButton.addEventListener('click', freezePoints);

let totalPoints = 0;

const totalPointsDisplay = document.getElementById("total-points");

function freezePoints(event){
   totalPoints = totalPoints + points;

   
   totalPointsDisplay.innerText = `Total points: ${totalPoints}`;
   
   totalRounds++;
   totalRoundsDisplay.innerText = `Total rounds: ${totalRounds}`;

   points = 0;
   pointsDisplay.innerText = `Points from this round: ${points}`;

   checkPoints(totalPoints)
}

if (totalPoints>=100 || points >=100){
    const H1 = document.createElement('h1');
    H1.innerText = `The game is finished, it took you a total of ${totalRounds}rounds to reach 100 points or more!`;
    document.body.append(H1);

    points = 0;
    pointsDisplay.innerText = `Points from this round: ${points}`;

    totalPoints = 0;
    totalPointsDisplay.innerText = `Total points: ${totalPoints}`;
    
    totalRounds = 0;
    totalRoundsDisplay.innerText = `Total rounds: ${totalRounds}`;
}

const restartButton = document.getElementById('restart-button');
restartButton.addEventListener('click', restart);

function restart(event){
    location. reload();
}

// function checkPoints(pointsToCheck){

// }

// checkPoints(points)
// checkPoints(totalPoints)