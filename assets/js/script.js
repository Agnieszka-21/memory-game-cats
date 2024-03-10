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

// Shuffle the easyCards array randomly
easyCards.sort(() => 0.5 - Math.random());
console.log(easyCards);

// Grab the DOM element with the id grid-easy
const easyGrid = document.querySelector('#grid-easy');

// Create an array each time two cards are clicked
let cardsChosen = [];

let cardsChosenIds = [];

// Create an array that includes all pairs found
const cardsWon = [];

/**
 * Create a board for the easy level
 */
function createEasyBoard() {
    for (let i = 0; i < easyCards.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', '../assets/images/blank.svg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        easyGrid.append(card);
    };
};
createEasyBoard();

function checkMatch() {
    const cards = document.querySelectorAll('img')
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!');
        cards[cardsChosenIds[0]].setAttribute('src', '../assets/images/white.png');
        cards[cardsChosenIds[1]].setAttribute('src', '../assets/images/white.png');
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard);
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    }
    //empty the arrays to restart the process
    cardsChosen = [];
    cardsChosenIds = [];
}

/**
 * Flip card when clicked
 */
function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(easyCards[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', easyCards[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}
