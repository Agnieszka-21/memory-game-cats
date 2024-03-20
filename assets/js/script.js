// Based on the tutotial by Ania Kudow
// Array of cards for the easy level - 6 pairs
const easyCards = [
    {
        name: 'cat1',
        img: '../assets/images/easy/cat1.svg'
    },
    {
        name: 'cat2',
        img: '../assets/images/easy/cat2.svg'
    },
    {
        name: 'cat3',
        img: '../assets/images/easy/cat3.svg'
    },
    {
        name: 'cat4',
        img: '../assets/images/easy/cat4.svg'
    },
    {
        name: 'cat5',
        img: '../assets/images/easy/cat5.svg'
    },
    {
        name: 'cat6',
        img: '../assets/images/easy/cat6.svg'
    },
    {
        name: 'cat1',
        img: '../assets/images/easy/cat1.svg'
    },
    {
        name: 'cat2',
        img: '../assets/images/easy/cat2.svg'
    },
    {
        name: 'cat3',
        img: '../assets/images/easy/cat3.svg'
    },
    {
        name: 'cat4',
        img: '../assets/images/easy/cat4.svg'
    },
    {
        name: 'cat5',
        img: '../assets/images/easy/cat5.svg'
    },
    {
        name: 'cat6',
        img: '../assets/images/easy/cat6.svg'
    }
];

// Based on the tutotial by Ania Kudow
// Array of cards for the medium level - 8 pairs
const mediumCards = [
    {
        name: 'black-cat1',
        img: '../assets/images/medium/black-cat1.svg'
    },
    {
        name: 'black-cat2',
        img: '../assets/images/medium/black-cat2.svg'
    },
    {
        name: 'black-cat3',
        img: '../assets/images/medium/black-cat3.svg'
    },
    {
        name: 'black-cat4',
        img: '../assets/images/medium/black-cat4.svg'
    },
    {
        name: 'black-cat5',
        img: '../assets/images/medium/black-cat5.svg'
    },
    {
        name: 'black-cat6',
        img: '../assets/images/medium/black-cat6.svg'
    },
    {
        name: 'black-cat7',
        img: '../assets/images/medium/black-cat7.svg'
    },
    {
        name: 'black-cat8',
        img: '../assets/images/medium/black-cat8.svg'
    },
    {
        name: 'black-cat1',
        img: '../assets/images/medium/black-cat1.svg'
    },
    {
        name: 'black-cat2',
        img: '../assets/images/medium/black-cat2.svg'
    },
    {
        name: 'black-cat3',
        img: '../assets/images/medium/black-cat3.svg'
    },
    {
        name: 'black-cat4',
        img: '../assets/images/medium/black-cat4.svg'
    },
    {
        name: 'black-cat5',
        img: '../assets/images/medium/black-cat5.svg'
    },
    {
        name: 'black-cat6',
        img: '../assets/images/medium/black-cat6.svg'
    },
    {
        name: 'black-cat7',
        img: '../assets/images/medium/black-cat7.svg'
    },
    {
        name: 'black-cat8',
        img: '../assets/images/medium/black-cat8.svg'
    }
];

// Based on the tutotial by Ania Kudow
// Array of cards for the difficult level - 10 pairs
const difficultCards = [
    {
        name: 'silhouette1',
        img: '../assets/images/difficult/silhouette1.svg'
    },
    {
        name: 'silhouette2',
        img: '../assets/images/difficult/silhouette2.svg'
    },
    {
        name: 'silhouette3',
        img: '../assets/images/difficult/silhouette3.svg'
    },
    {
        name: 'silhouette4',
        img: '../assets/images/difficult/silhouette4.svg'
    },
    {
        name: 'silhouette5',
        img: '../assets/images/difficult/silhouette5.svg'
    },
    {
        name: 'silhouette6',
        img: '../assets/images/difficult/silhouette6.svg'
    },
    {
        name: 'silhouette7',
        img: '../assets/images/difficult/silhouette7.svg'
    },
    {
        name: 'silhouette8',
        img: '../assets/images/difficult/silhouette8.svg'
    },
    {
        name: 'silhouette9',
        img: '../assets/images/difficult/silhouette9.svg'
    },
    {
        name: 'silhouette10',
        img: '../assets/images/difficult/silhouette10.svg'
    },
    {
        name: 'silhouette1',
        img: '../assets/images/difficult/silhouette1.svg'
    },
    {
        name: 'silhouette2',
        img: '../assets/images/difficult/silhouette2.svg'
    },
    {
        name: 'silhouette3',
        img: '../assets/images/difficult/silhouette3.svg'
    },
    {
        name: 'silhouette4',
        img: '../assets/images/difficult/silhouette4.svg'
    },
    {
        name: 'silhouette5',
        img: '../assets/images/difficult/silhouette5.svg'
    },
    {
        name: 'silhouette6',
        img: '../assets/images/difficult/silhouette6.svg'
    },
    {
        name: 'silhouette7',
        img: '../assets/images/difficult/silhouette7.svg'
    },
    {
        name: 'silhouette8',
        img: '../assets/images/difficult/silhouette8.svg'
    },
    {
        name: 'silhouette9',
        img: '../assets/images/difficult/silhouette9.svg'
    },
    {
        name: 'silhouette10',
        img: '../assets/images/difficult/silhouette10.svg'
    }
];

const grid = document.querySelector('.grid');
let pairsFound = document.querySelector('#result');

// Create an array each time two cards are clicked
let cardsChosen = [];
let cardsChosenIds = [];
// Create an array that includes all pairs found
const cardsWon = [];

// Shuffle the easyCards array randomly - based on the tutotial by Ania Kudow - repeat for medium and difficult cards
easyCards.sort(() => 0.5 - Math.random());
mediumCards.sort(() => 0.5 - Math.random());
difficultCards.sort(() => 0.5 - Math.random());


// For hiding the irrelevant part of html
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

// createEasyBoard Based on the tutotial by Ania Kudow - adapted

function createEasyBoard() {
    welcome.classList.add('hide');
    gridContainer.classList.remove('hide');
    currentLevel = 'easy';
    console.log(currentLevel);
    for (let i = 0; i < easyCards.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', '../assets/images/blank.svg');
        card.setAttribute('data-id', i);
        card.classList.add('card-img'); // adding a class because now I have more various img elements
        card.addEventListener('click', flipCard);
        grid.append(card);
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
    for (let i = 0; i < mediumCards.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', '../assets/images/blank.svg');
        card.setAttribute('data-id', i);
        card.classList.add('card-img');
        card.addEventListener('click', flipCard);
        grid.append(card);
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
    for (let i = 0; i < difficultCards.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', '../assets/images/blank.svg');
        card.setAttribute('data-id', i);
        card.classList.add('card-img');
        card.addEventListener('click', flipCard);
        grid.append(card);
        grid.style.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr";
        grid.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
        grid.style.gridGap = "0.3rem";
    };
};


// Based on the tutotial by Ania Kudow
/**
 * Check whether 2 cards are a matching pair
 */

function checkMatch() {
    const cards = document.querySelectorAll('.card-img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', '../assets/images/blank.svg');
        cards[optionTwoId].setAttribute('src', '../assets/images/blank.svg');
        alert("You've clicked the same image");
        cardsChosen = [];
        cardsChosenIds = [];
        return;
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', '../assets/images/white.png');
        cards[optionTwoId].setAttribute('src', '../assets/images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', '../assets/images/blank.svg');
        cards[optionTwoId].setAttribute('src', '../assets/images/blank.svg');
    }

    pairsFound.textContent = cardsWon.length;

    //empty the arrays to restart the process
    cardsChosen = [];
    cardsChosenIds = [];

    switch (currentLevel) {
        case 'easy':
            if (cardsWon.length == easyCards.length/2) {
                pairsFound.textContent = 'all 6!';
                console.log('Removed all cards to clear the board');
            }
            break;
        case 'medium':
            if (cardsWon.length == mediumCards.length/2) {
                pairsFound.textContent = 'all 8!';
            }
            break;
        case 'difficult':
            if (cardsWon.length == difficultCards.length/2) {
                pairsFound.textContent = 'all 10!';
            }
            break;        
    }
}



// Based on the tutotial by Ania Kudow
/**
 * Flip card when clicked, showing cards suitable for the chosen level
 */
function flipCard() {
    const cardId = this.getAttribute('data-id');

    switch (currentLevel) {
        case 'easy':
            cardsChosen.push(easyCards[cardId].name);
            cardsChosenIds.push(cardId);
            this.setAttribute('src', easyCards[cardId].img);
            break;
        case 'medium':
            cardsChosen.push(mediumCards[cardId].name);
            cardsChosenIds.push(cardId);
            this.setAttribute('src', mediumCards[cardId].img); 
            break;
        case 'difficult':
            cardsChosen.push(difficultCards[cardId].name);
            cardsChosenIds.push(cardId);
            this.setAttribute('src', difficultCards[cardId].img);   
            break;
        default:
            console.log('No value found for the current game level');
    }

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
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


// Create a new board with the same game level as currently chosen when the user clicks the new game button
const newGameBtn = document.getElementById('new-game');
// newGameBtn.addEventListener('click', freshBoard);

newGameBtn.onclick = () => {
    const parent = document.getElementsByClassName("grid");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    console.log('Show if the onclick thingy is working');
}

// FIX the bug - current cards are not being removed, only new cards are added...
/*
function freshBoard() {
    switch (currentLevel) {
        case 'easy':
            createEasyBoard();
            break;
        case 'medium':
            createMediumBoard();
            break;
        case 'difficult':
            createDifficultBoard();
        default:
            console.log('Huh... It looks like you have not chosen a level');
    }
}
*/

// Purring - sound on - listen for a click
const purring = document.querySelector('.grid-header');
//purring.addEventListener('click', togglePlayingClass);

const soundIcon = document.getElementById('sound-icon');

const sound = new Audio('../assets/audio/purring.mp3');
//
let classes = sound.classList;

purring.addEventListener("click", () => {
    const result = classes.toggle("playing");
    console.log(`${result ? "added" : "removed"}; classList is now "${classes}".`);

    if (classes = "a playing") {
        sound.play();
        // loop the audio
        sound.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        soundIcon.setAttribute('src', '../assets/images/sound-off.svg');
        console.log('Purring has been turned on');        
    } else {
        sound.pause();
        soundIcon.setAttribute('src', '../assets/images/sound-on.svg'); 
        // sound.classList.add('not-playing');
        console.log('Purring has been turned off');          
    }
}); // FIX the bug - even though the class is being toggled on/off, the purring is being turned off every time (or only turned on).
// Also, if I use classes = "a playing", then the console shows an error 
// when clicking for the 2nd time: classes.toggle is not a function.
   

// MODAL copied
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


// TIMER for the game

let [seconds, minutes] = [0,0];
let timeRef = document.querySelector('#time-elapsed');
let int = null;

const allCards = document.querySelectorAll('.card-img');
// allCards.addEventListener('click', startTimer);

function startTimer() {
        int = setInterval(displayTimer, 10);
}

function displayTimer() {
    if (seconds = 60) {
        seconds = 0;
        minutes++;
    }

    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    timeRef.innerHTML = `${m} : ${s}`;
}









