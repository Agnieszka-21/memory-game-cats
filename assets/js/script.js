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



// Based on the tutotial by Ania Kudow
// Shuffle the easyCards array randomly
easyCards.sort(() => 0.5 - Math.random());
console.log(easyCards);

// REPEAT for medium cards
mediumCards.sort(() => 0.5 - Math.random());
console.log(mediumCards);

// REPEAT for difficult cards
difficultCards.sort(() => 0.5 - Math.random());
console.log(difficultCards);



// Grab the DOM element with the class grid
const grid = document.querySelector('.grid');

// Grab the span with the id result
let pairsFound = document.querySelector('#result');

// Create an array each time two cards are clicked
let cardsChosen = [];

let cardsChosenIds = [];

// Create an array that includes all pairs found
const cardsWon = [];

// Based on the tutotial by Ania Kudow
/**
 * Create a board for the easy level
 */
function createEasyBoard() {
    for (let i = 0; i < easyCards.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', '../assets/images/blank.svg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCardEasy);
        grid.append(card);
    };
};

// medium board
function createMediumBoard() {
    for (let i = 0; i < mediumCards.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', '../assets/images/blank.svg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCardMedium);
        grid.append(card);
    };
};

// difficult board
function createDifficultBoard() {
    for (let i = 0; i < difficultCards.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', '../assets/images/blank.svg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCardDifficult);
        grid.append(card);
    };
};


// Based on the tutotial by Ania Kudow
/**
 * Check whether 2 cards are a matching pair
 */
function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', '../assets/images/blank.svg');
        cards[optionTwoId].setAttribute('src', '../assets/images/blank.svg');
        alert("You've clicked the same image");
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!');
        cards[optionOneId].setAttribute('src', '../assets/images/white.png');
        cards[optionTwoId].setAttribute('src', '../assets/images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', '../assets/images/blank.svg');
        cards[optionTwoId].setAttribute('src', '../assets/images/blank.svg');
        alert('Sorry, try again');
    }

    pairsFound.textContent = cardsWon.length;

    //empty the arrays to restart the process
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == easyCards.length/2) {
        pairsFound.textContent = 'Congratulations, you found them all!';
        // my addition
        card.remove();
    }
}

// Based on the tutotial by Ania Kudow
/**
 * Flip card when clicked - ADJUST FOR OTHER LEVELS
 */
function flipCardEasy() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(easyCards[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', easyCards[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

//medium
function flipCardMedium() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(mediumCards[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', mediumCards[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

//difficult
function flipCardDifficult() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(difficultCards[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', difficultCards[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

/**
 * Hide the menu and show the grid when user clicks one of the menu buttons (easy, medium, difficult)
 */ 
const welcome = document.querySelector('.welcome');
const gridContainer = document.querySelector('.grid-container');

const menuButtons = document.querySelectorAll('.menu-button');
menuButtons.forEach(menuButton => menuButton.addEventListener('click', showGrid));

function showGrid() {
    gridContainer.classList.remove('hide');
    welcome.classList.add('hide');
    console.log('Showing the grid');
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
}

/* Create a new easy board when the user clicks the new game button
const newGame = document.getElementById('new-game');
newGame.addEventListener('click', );
*/

// Menu buttons and board - chosen level
const easyGameChosen = document.getElementById('button-easy');
easyGameChosen.addEventListener('click', createEasyBoard);

const mediumGameChosen = document.getElementById('button-medium');
mediumGameChosen.addEventListener('click', createMediumBoard);

const difficultGameChosen = document.getElementById('button-difficult');
difficultGameChosen.addEventListener('click', createDifficultBoard);




// Function to clean up the board at the end of game


