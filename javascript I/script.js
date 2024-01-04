let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
let targetNumber = 0;
let userGuess = 0;
let computerGuess = 0;

// Write your code below:

// funcion que regresa un número random entero entre 0 y 9

function generateTarget() {
    targetNumber = Math.floor(Math.random() * 10);
    console.log(`targetNumber: ${targetNumber}`);
    return targetNumber;
}

function getAbsoluteDistance(distance, targetNumber) {
    var userToTargetAbs = Math.abs(distance - targetNumber);
    return userToTargetAbs;
}

function alert(userGuess){
    if (userGuess > 9 || userGuess < 0) {
        console.log("Error de numero ingresado");
    }
}

function compareGuesses(userGuess, computerGuess, targetNumber) {
    //var userToTarget = Math.abs(targetNumber - userGuess);
    //var computerToTarget = Math.abs(targetNumber - computerGuess);
    //console.log(`userGuess: ${userGuess}, computerGuess: ${computerGuess}, targetNumber: ${targetNumber}`);
    alert(userGuess);
    var userToTarget = getAbsoluteDistance(userGuess, targetNumber)
    console.log(`userToTarget: ${userToTarget}`);
    var computerToTarget = getAbsoluteDistance(computerGuess, targetNumber)
    console.log(`computerToTarget: ${computerToTarget}`);
        
    if (userToTarget > computerToTarget){
        // La computadora esta mas cerca del numero secreto
        return false;}
    else if (userToTarget < computerToTarget){
        // El usuario esta mas cerca del target
        return true;
    }
    else return true; // hubo empate y el usuario gana
}

function updateScore(winner = '') {
    if (winner == "human"){
        humanScore++;
    }
    else computerScore++;
}

function advanceRound(){
    currentRoundNumber++;
}