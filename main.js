const gameContainer = document.querySelector('.game-container');
const inputNumber = document.querySelector('.input-number');
const checkButton = document.querySelector('.check');
const restartButton = document.querySelector('.restart');
const result1 = document.querySelector('.result-1');
const score = document.querySelector('.score');

let randomNumber;
const initialScore = 20;

const initializeGame = () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
    score.textContent = initialScore;
    inputNumber.disabled = false;
    checkButton.disabled = false;
    result1.textContent = '';
    gameContainer.style.backgroundColor = '#0056b3'; 
};

const checkGuess = () => {
    const guess = Number(inputNumber.value);
    console.log(guess, typeof guess);

    if (!guess) {
        result1.textContent = "No number ⛔️";
    } else if (guess === randomNumber) {
        result1.textContent = "🎉 Correct Number!";
        gameContainer.style.backgroundColor = '#60b347'; 
        inputNumber.disabled = true;
        checkButton.disabled = true;
    } else {
        if (Number(score.textContent) > 1) {
            result1.textContent = guess > randomNumber ? "Too high! Try again." : "Too low! Try again.";
            score.textContent = Number(score.textContent) - 1;
        } else {
            result1.textContent = "💥 You lost the game!";
            score.textContent = 0;
            gameContainer.style.backgroundColor = '#ff6347'; 
            inputNumber.disabled = true;
            checkButton.disabled = true;
        }
    }
};


initializeGame();

checkButton.addEventListener('click', checkGuess);

restartButton.addEventListener('click', () => {
    initializeGame(); // Reset the game
});

inputNumber.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        checkGuess();
    }
});
