// Based on the tutotial by Ania Kudow
// Array of cards for the easy level - 6 pairs
const easyCards = [
    {
        name: 'cat1',
        img: './assets/images/easy/cat1.svg'
    },
    {
        name: 'cat2',
        img: './assets/images/easy/cat2.svg'
    },
    {
        name: 'cat3',
        img: './assets/images/easy/cat3.svg'
    },
    {
        name: 'cat4',
        img: './assets/images/easy/cat4.svg'
    },
    {
        name: 'cat5',
        img: './assets/images/easy/cat5.svg'
    },
    {
        name: 'cat6',
        img: './assets/images/easy/cat6.svg'
    },
    {
        name: 'cat1',
        img: './assets/images/easy/cat1.svg'
    },
    {
        name: 'cat2',
        img: './assets/images/easy/cat2.svg'
    },
    {
        name: 'cat3',
        img: './assets/images/easy/cat3.svg'
    },
    {
        name: 'cat4',
        img: './assets/images/easy/cat4.svg'
    },
    {
        name: 'cat5',
        img: './assets/images/easy/cat5.svg'
    },
    {
        name: 'cat6',
        img: './assets/images/easy/cat6.svg'
    }
];

// Based on the tutotial by Ania Kudow
// Array of cards for the medium level - 8 pairs
const mediumCards = [
    {
        name: 'black-cat1',
        img: './assets/images/medium/black-cat1.svg'
    },
    {
        name: 'black-cat2',
        img: './assets/images/medium/black-cat2.svg'
    },
    {
        name: 'black-cat3',
        img: './assets/images/medium/black-cat3.svg'
    },
    {
        name: 'black-cat4',
        img: './assets/images/medium/black-cat4.svg'
    },
    {
        name: 'black-cat5',
        img: './assets/images/medium/black-cat5.svg'
    },
    {
        name: 'black-cat6',
        img: './assets/images/medium/black-cat6.svg'
    },
    {
        name: 'black-cat7',
        img: './assets/images/medium/black-cat7.svg'
    },
    {
        name: 'black-cat8',
        img: './assets/images/medium/black-cat8.svg'
    },
    {
        name: 'black-cat1',
        img: './assets/images/medium/black-cat1.svg'
    },
    {
        name: 'black-cat2',
        img: './assets/images/medium/black-cat2.svg'
    },
    {
        name: 'black-cat3',
        img: './assets/images/medium/black-cat3.svg'
    },
    {
        name: 'black-cat4',
        img: './assets/images/medium/black-cat4.svg'
    },
    {
        name: 'black-cat5',
        img: './assets/images/medium/black-cat5.svg'
    },
    {
        name: 'black-cat6',
        img: './assets/images/medium/black-cat6.svg'
    },
    {
        name: 'black-cat7',
        img: './assets/images/medium/black-cat7.svg'
    },
    {
        name: 'black-cat8',
        img: './assets/images/medium/black-cat8.svg'
    }
];

// Based on the tutotial by Ania Kudow
// Array of cards for the difficult level - 10 pairs
const difficultCards = [
    {
        name: 'silhouette1',
        img: './assets/images/difficult/silhouette1.svg'
    },
    {
        name: 'silhouette2',
        img: './assets/images/difficult/silhouette2.svg'
    },
    {
        name: 'silhouette3',
        img: './assets/images/difficult/silhouette3.svg'
    },
    {
        name: 'silhouette4',
        img: './assets/images/difficult/silhouette4.svg'
    },
    {
        name: 'silhouette5',
        img: './assets/images/difficult/silhouette5.svg'
    },
    {
        name: 'silhouette6',
        img: './assets/images/difficult/silhouette6.svg'
    },
    {
        name: 'silhouette7',
        img: './assets/images/difficult/silhouette7.svg'
    },
    {
        name: 'silhouette8',
        img: './assets/images/difficult/silhouette8.svg'
    },
    {
        name: 'silhouette9',
        img: './assets/images/difficult/silhouette9.svg'
    },
    {
        name: 'silhouette10',
        img: './assets/images/difficult/silhouette10.svg'
    },
    {
        name: 'silhouette1',
        img: './assets/images/difficult/silhouette1.svg'
    },
    {
        name: 'silhouette2',
        img: './assets/images/difficult/silhouette2.svg'
    },
    {
        name: 'silhouette3',
        img: './assets/images/difficult/silhouette3.svg'
    },
    {
        name: 'silhouette4',
        img: './assets/images/difficult/silhouette4.svg'
    },
    {
        name: 'silhouette5',
        img: './assets/images/difficult/silhouette5.svg'
    },
    {
        name: 'silhouette6',
        img: './assets/images/difficult/silhouette6.svg'
    },
    {
        name: 'silhouette7',
        img: './assets/images/difficult/silhouette7.svg'
    },
    {
        name: 'silhouette8',
        img: './assets/images/difficult/silhouette8.svg'
    },
    {
        name: 'silhouette9',
        img: './assets/images/difficult/silhouette9.svg'
    },
    {
        name: 'silhouette10',
        img: './assets/images/difficult/silhouette10.svg'
    }
];

const grid = document.querySelector('.grid');
let pairsFound = document.querySelector('#result');

// Create an array each time two cards are clicked
let cardsChosen = [];
let cardsChosenIds = [];

// Create an array to start the timer with the first card click
let cardsOpen = []; 

// Create an array that includes all pairs found
let cardsWon = [];

// Shuffle the easyCards array randomly - based on the tutotial by Ania Kudow - repeat for medium and difficult cards
easyCards.sort(() => 0.5 - Math.random());
mediumCards.sort(() => 0.5 - Math.random());
difficultCards.sort(() => 0.5 - Math.random());

// Lock the board when 2 cards were clicked - based on the following YouTube tutorial: https://www.youtube.com/watch?v=yMNFOyRELrI
let lockBoard = false;

// Get html elements needed for hiding the irrelevant part of the page
const welcome = document.querySelector('.welcome');
const gridContainer = document.querySelector('.grid-container');

// User chooses a level and a suitable grid is created
const levelEasyChosen = document.querySelector('#easy-level');
const levelMediumChosen = document.querySelector('#medium-level');
const levelDifficultChosen = document.querySelector('#difficult-level');

levelEasyChosen.addEventListener('click', createEasyBoard);
levelMediumChosen.addEventListener('click', createMediumBoard);
levelDifficultChosen.addEventListener('click', createDifficultBoard);

let currentLevel;

// Function createEasyBoard is based on the tutotial from freeCodeCamp and adapted

function createEasyBoard() {
    welcome.classList.add('hide');
    gridContainer.classList.remove('hide');
    currentLevel = 'easy';
    console.log(currentLevel);
    easyCards.sort(() => 0.5 - Math.random());

    for (let i = 0; i < easyCards.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', './assets/images/other/orange.png');
        card.setAttribute('data-id', i);
        card.setAttribute('alt', 'Memory game card - easy level');        
        card.classList.add('card-img'); // to address the relevant image elements
        card.addEventListener('click', flipCard);
        grid.append(card);
        // Create a grid for 12 cards
        grid.style.gridTemplateRows="1fr 1fr 1fr 1fr";
        grid.style.gridTemplateColumns="1fr 1fr 1fr";
        grid.style.gridGap="0.5rem";
    };
};

// medium board
function createMediumBoard() {
    welcome.classList.add('hide');
    gridContainer.classList.remove('hide');
    currentLevel = 'medium';
    console.log(currentLevel);
    mediumCards.sort(() => 0.5 - Math.random());

    for (let i = 0; i < mediumCards.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', './assets/images/other/orange.png');
        card.setAttribute('data-id', i);
        card.setAttribute('alt', 'Memory game card - medium level');
        card.classList.add('card-img');
        card.addEventListener('click', flipCard);
        grid.append(card);
        // Create a grid for 16 cards
        grid.style.gridTemplateRows="1fr 1fr 1fr 1fr";
        grid.style.gridTemplateColumns="1fr 1fr 1fr 1fr";
        grid.style.gridGap="0.3rem";
    };
};

// difficult board
function createDifficultBoard() {
    welcome.classList.add('hide');
    gridContainer.classList.remove('hide');
    currentLevel = 'difficult';
    console.log(currentLevel);
    difficultCards.sort(() => 0.5 - Math.random());

    for (let i = 0; i < difficultCards.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', './assets/images/other/orange.png');
        card.setAttribute('data-id', i);
        card.setAttribute('alt', 'Memory game card - difficult level');
        card.classList.add('card-img');
        card.addEventListener('click', flipCard);
        grid.append(card);
        // Create a grid for 20 cards
        grid.style.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr";
        grid.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
        grid.style.gridGap = "0.3rem";
    };
};

// Based on the tutotial from freeCodeCamp: https://www.youtube.com/watch?v=ec8vSKJuZTk&t=3773s
/**
 * Check whether 2 cards are a matching pair
 */

function checkMatch() {
    const cards = document.querySelectorAll('.card-img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', './assets/images/other/orange.png');
        cards[optionTwoId].setAttribute('src', './assets/images/other/orange.png');
        alert("You've clicked the same image");
        cardsChosen = [];
        cardsChosenIds = [];
        return;
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', './assets/images/other/white.png');
        cards[optionTwoId].setAttribute('src', './assets/images/other/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', './assets/images/other/orange.png');
        cards[optionTwoId].setAttribute('src', './assets/images/other/orange.png');
    }

    lockBoard = false;
    pairsFound.textContent = cardsWon.length;

    //empty the arrays to restart the process
    cardsChosen = [];
    cardsChosenIds = [];

    switch (currentLevel) {
        case 'easy':
            if (cardsWon.length == easyCards.length/2) {
                stopTimer();
                pairsFound.textContent = 'all six!!!';
            }
            break;
        case 'medium':
            if (cardsWon.length == mediumCards.length/2) {
                stopTimer();
                pairsFound.textContent = 'all eight!!!';
            }
            break;
        case 'difficult':
            if (cardsWon.length == difficultCards.length/2) {
                stopTimer();
                pairsFound.textContent = 'all ten!!!';
            }
            break;        
    }
}


// Based on the tutotial by Ania Kudow
/**
 * Flip card when clicked, showing cards suitable for the chosen level
 */ 
function flipCard() {
    if (lockBoard) return;

    const cardId = this.getAttribute('data-id');

    switch (currentLevel) {
        case 'easy':
            cardsChosen.push(easyCards[cardId].name);
            cardsChosenIds.push(cardId);
            this.setAttribute('src', easyCards[cardId].img);
            cardsOpen.push(easyCards[cardId].name);
            break;
        case 'medium':
            cardsChosen.push(mediumCards[cardId].name);
            cardsChosenIds.push(cardId);
            this.setAttribute('src', mediumCards[cardId].img); 
            cardsOpen.push(mediumCards[cardId].name);
            break;
        case 'difficult':
            cardsChosen.push(difficultCards[cardId].name);
            cardsChosenIds.push(cardId);
            this.setAttribute('src', difficultCards[cardId].img);
            cardsOpen.push(difficultCards[cardId].name);   
            break;
        default:
            console.log('No value found for the current game level');
    }

    if (cardsChosen.length === 2) {
        lockBoard = true;
        setTimeout(checkMatch, 1000);
    }

    startTimer();
}


/**
 * Return to the menu when the user clicks the "back to menu" button
 */
const goBack = document.getElementById('go-back');
goBack.addEventListener('click', backToMenu);

function backToMenu() {
    gridContainer.classList.add('hide');
    welcome.classList.remove('hide');   
    console.log('Returning to menu');
    location.reload();
}

/**
 * Create a new board with the same game level as currently chosen when the user clicks the new game button
 */
const newGameBtn = document.getElementById('new-game');
newGameBtn.addEventListener('click', freshBoard);

function freshBoard() {
    grid.innerHTML = '';
    resetTimer();
    pairsFound.innerHTML = '';

    //empty the arrays to restart the process
    cardsChosen = [];
    cardsChosenIds = [];
    cardsOpen = [];
    cardsWon = [];

    switch (currentLevel) {
        case 'easy':
            createEasyBoard();
            break;
        case 'medium':
            createMediumBoard();
            break;
        case 'difficult':
            createDifficultBoard();
            break;
        default:
            console.log('Huh... It looks like you have not chosen a level');
    }
}

// Purring - sound on/off - listen for a click
const purring = document.querySelector('.grid-header');
purring.addEventListener('click', purringOnOff)
let soundIcon = document.getElementById('sound-icon');
const myAudio = new Audio('./assets/audio/purring.mp3');
myAudio.classList.add('not-playing');

/**
 * Play or pause the audio when user clicks the header "Purring on/off"
 */
function purringOnOff() {
    if (myAudio.classList == 'not-playing') {
        myAudio.play();
        soundIcon.setAttribute('src', './assets/images/other/sound-on.svg');
        soundIcon.setAttribute('alt', 'Click here to turn the sound off');
        console.log('Playing the audio');
        myAudio.classList.remove('not-playing');
        myAudio.classList.add('playing');
    } else if (myAudio.classList == 'playing') {
        myAudio.pause();
        soundIcon.setAttribute('src', './assets/images/other/sound-off.svg');
        soundIcon.setAttribute('alt', 'Click here to turn the sound on');
        console.log('The audio was paused');
        myAudio.classList.remove('playing');
        myAudio.classList.add('not-playing');
    }
}


// Modal on the landing page (what is ASMR) - based on the following tutorial:
// https://www.w3schools.com/howto/howto_css_modals.asp

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Timer (stopwatch) - based on the following tutorials:
// https://www.insidethediv.com/javascript-simple-projects-beginners-online-stopwatch-full-screen
// https://www.educative.io/answers/how-to-create-a-stopwatch-in-javascript

const timerEl = document.querySelector('#time-elapsed');
let startTime;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
        if (cardsOpen.length === 1) {
            startTime = Date.now() - elapsedTime;
            timerInterval = setInterval(updateTimer, 10);
        }
}

function stopTimer() {
    clearInterval(timerInterval);
}
  
function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime == 0;
    timerEl.innerHTML = '00:00';
}

function updateTimer() {
    const timeElapsed = Date.now() - startTime;
    const seconds = Math.floor((timeElapsed / 1000) % 60);
    const minutes = Math.floor((timeElapsed / 1000 / 60) % 60);
    timerEl.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}


