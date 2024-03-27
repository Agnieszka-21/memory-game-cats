/* The following 3 arrays (easyCards, mediumCards, difficultCards) are based on the code from Ania Kudow's tutorial and adapted 
(all relevant links in the README.md)
*/
// Array of cards for the easy level - 12 cards - 6 pairs
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

// Array of cards for the medium level - 16 cards - 8 pairs
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

// Array of cards for the difficult level - 20 cards - 10 pairs
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

const grid = document.getElementById('grid');
let pairsFound = document.getElementById('result');

// Create an array each time two cards are clicked
let cardsChosen = [];
let cardsChosenIds = [];

// Create an array to start the timer with the first card click
let cardsOpen = []; 

// Create an array that includes all pairs found
let cardsWon = [];

// Lock the board when 2 cards were clicked - based on the following YouTube tutorial: https://www.youtube.com/watch?v=yMNFOyRELrI
let lockBoard = false;

// Get html elements needed for hiding/displaying a certain part of the page
const welcome = document.getElementById('welcome');
const gridContainer = document.getElementById('grid-container');

// Get relevant elements to create a suitable grid when the user chooses their level
const levelEasyChosen = document.getElementById('easy-level');
const levelMediumChosen = document.getElementById('medium-level');
const levelDifficultChosen = document.getElementById('difficult-level');

// Create board when user chooses a level (click/Enter/space key)
let currentLevel;

levelEasyChosen.addEventListener('click', function(e) {
    currentLevel = 'easy';
    createBoard();
});

levelEasyChosen.addEventListener('keydown',  function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        currentLevel = 'easy';
        createBoard();
    }
})

levelMediumChosen.addEventListener('click', function(e) {
    currentLevel = 'medium';
    createBoard();
});

levelMediumChosen.addEventListener('keydown',  function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        currentLevel = 'medium';
        createBoard();
    }
})

levelDifficultChosen.addEventListener('click', function(e) {
    currentLevel = 'difficult';
    createBoard();
});

levelDifficultChosen.addEventListener('keydown',  function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        currentLevel = 'difficult';
        createBoard();
    }
})


function createBoard() {
    welcome.classList.add('hide');
    gridContainer.classList.remove('hide');
    
    switch (currentLevel) {
        case 'easy':
            // Shuffle cards randomly - from Ania's tutorial
            easyCards.sort(() => 0.5 - Math.random()); 
            // Create a grid for 12 cards
            grid.classList.add('grid-easy');

            for (let i = 0; i < easyCards.length; i++) {
                const card = document.createElement('img');
                card.setAttribute('src', './assets/images/other/orange.png');
                card.setAttribute('data-id', i);
                card.setAttribute('alt', 'Memory game card - easy level');        
                card.classList.add('card-img'); // to address the relevant image elements
                card.tabIndex = '0'; // tabindex for keyboard accessibility
                grid.append(card);

                card.addEventListener('click', flipCard);
                card.addEventListener('keydown', flipCard);
            }
            break;

        case 'medium':
            // Shuffle cards randomly
            mediumCards.sort(() => 0.5 - Math.random());
            // Create a grid for 16 cards
            grid.classList.add('grid-medium');

            for (let i = 0; i < mediumCards.length; i++) {
                const card = document.createElement('img');
                card.setAttribute('src', './assets/images/other/orange.png');
                card.setAttribute('data-id', i);
                card.setAttribute('alt', 'Memory game card - medium level');
                card.classList.add('card-img');
                card.tabIndex = '0'; // tabindex for keyboard accessibility

                card.addEventListener('click', flipCard);
                grid.append(card);
            }
            break;

        case 'difficult':
            // Shuffle cards randomly           
            difficultCards.sort(() => 0.5 - Math.random()); 
            // Create a grid for 20 cards
            grid.classList.add('grid-difficult');  

            for (let i = 0; i < difficultCards.length; i++) {
                const card = document.createElement('img');
                card.setAttribute('src', './assets/images/other/orange.png');
                card.setAttribute('data-id', i);
                card.setAttribute('alt', 'Memory game card - difficult level');
                card.classList.add('card-img');
                card.tabIndex = '0'; // tabindex for keyboard accessibility

                card.addEventListener('click', flipCard);
                grid.append(card);
            }
    }
}


// Based on the tutotial from freeCodeCamp (Ania Kudow): https://www.youtube.com/watch?v=ec8vSKJuZTk&t=3773s
/**
 * Check whether 2 cards are a matching pair
 */

function checkMatch() {
    const cards = document.getElementsByClassName('card-img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', './assets/images/other/orange.png');
        cards[optionTwoId].setAttribute('src', './assets/images/other/orange.png');
        alert("You've clicked the same image");
        cardsChosen = [];
        cardsChosenIds = [];
        lockBoard = false;
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

    //Empty the arrays to restart the process
    cardsChosen = [];
    cardsChosenIds = [];

    // What happens when all pairs are found
    switch (currentLevel) {
        case 'easy':
            if (cardsWon.length == easyCards.length/2) {
                stopTimer();
                pairsFound.textContent = 'all six!!!';
                displayModalFireworks();
            }
            break;
        case 'medium':
            if (cardsWon.length == mediumCards.length/2) {
                stopTimer();
                pairsFound.textContent = 'all eight!!!';
                displayModalFireworks();
            }
            break;
        case 'difficult':
            if (cardsWon.length == difficultCards.length/2) {
                stopTimer();
                pairsFound.textContent = 'all ten!!!';
                displayModalFireworks();
            }
            break;        
    }
}


/**
 * Flip card when clicked, showing cards suitable for the chosen level
 */ 
function flipCard() {
    if (lockBoard) return;

    const cardId = this.getAttribute('data-id');

    switch (currentLevel) {
        case 'easy':
            // The following code is based on the Free Code Camp tutotial by Ania Kudow - starts here
            cardsChosen.push(easyCards[cardId].name);
            cardsChosenIds.push(cardId);
            this.setAttribute('src', easyCards[cardId].img);
            // ends here
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
 * Return to the menu when the user activates the "back to menu" button 
 * (click/Enter/space key)
 */
const goBack = document.getElementById('go-back');
goBack.addEventListener('click', backToMenu);
goBack.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        backToMenu();
    }
});

function backToMenu() {
    gridContainer.classList.add('hide');
    welcome.classList.remove('hide');   
    console.log('Returning to menu');
    location.reload();
}

/**
 * Create a new board with the same game level as currently chosen when the user activates the new game button 
 * (click/Enter/space key)
 */
const newGameBtn = document.getElementById('new-game');
newGameBtn.addEventListener('click', freshBoard);
newGameBtn.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        freshBoard();
    }
});

function freshBoard() {
    grid.innerHTML = '';
    resetTimer();
    pairsFound.innerHTML = '1';

    //empty the arrays to restart the process
    cardsChosen = [];
    cardsChosenIds = [];
    cardsOpen = [];
    cardsWon = [];

    //create a new board for the same level as before
    createBoard();
}

// Purring - sound on/off - listen for a click or Enter or space key
const purring = document.getElementById('grid-header');
purring.addEventListener('click', purringOnOff);
purring.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        purringOnOff();
    }
});


let soundIcon = document.getElementById('sound-icon');
const myAudio = new Audio('./assets/audio/purring.mp3');
myAudio.classList.add('not-playing');

/**
 * Play or pause the audio when user chooses "Purring on/off"
 */
function purringOnOff() {
    if (myAudio.classList == 'not-playing') {
        myAudio.play();
        myAudio.loop = true;
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

const modalAsmr = document.getElementById('modal-asmr');
const questionMarkModalBtn = document.getElementById('question-mark-modal-btn');
const spanCloseModalAsmr = document.getElementById('close-asmr');

// Open the modal when the user activates the question-mark button (click/Enter/space key)
questionMarkModalBtn.addEventListener('click', displayModalAsmr);
questionMarkModalBtn.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        displayModalAsmr();
    }
});

function displayModalAsmr() {
    modalAsmr.classList.remove('hide');
    modalAsmr.classList.add('show');
    trapFocus(modalAsmrElement);
}

// Close the modal when the user activates the x span (click/Enter/space key)
spanCloseModalAsmr.addEventListener('click', closeModalAsmr);
spanCloseModalAsmr.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        closeModalAsmr();
    }
});

function closeModalAsmr() {
    modalAsmr.classList.add('hide');
}

// Close the modal when the user clicks anywhere outside of it or presses any key
window.addEventListener('click',  function(e) {
    if (e.target === modalAsmr) {
        modalAsmr.classList.add('hide');
    }
})

// MODAL FIREWORKS
const modalFireworks = document.getElementById('modal-fireworks');
const spanCloseModalFireworks = document.getElementById('close-fireworks');

// Open the modal when the user wins the game
function displayModalFireworks() {
    modalFireworks.classList.remove('hide');
    modalFireworks.classList.add('show');
    trapFocus(modalFireworksElement);
}

// Close the modal when the user activates the x span (click/Enter/space key)
spanCloseModalFireworks.addEventListener('click', closeModalFireworks);
spanCloseModalFireworks.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        closeModalFireworks();
    }
});

function closeModalFireworks() {
    modalFireworks.classList.add('hide');
}

// Close the modal when the user clicks anywhere outside of it or presses any key
window.addEventListener('click',  function(e) {
    if (e.target === modalAsmr) {
        modalAsmr.classList.add('hide');
    }
})

// Fireworks modal buttons
const fireworksBtnYes = document.getElementById('fireworks-btn-yes');
const fireworksBtnNo = document.getElementById('fireworks-btn-no');

fireworksBtnYes.addEventListener('click', fireworksYes);
fireworksBtnYes.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        fireworksYes();
    }
});

function fireworksYes() {
    closeModalFireworks();
    freshBoard();
}

fireworksBtnNo.addEventListener('click', fireworksNo);
fireworksBtnNo.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        fireworksNo();
    }
});

function fireworksNo() {
    closeModalFireworks();
}

// Timer (stopwatch) - based on the following tutorials:
// https://www.insidethediv.com/javascript-simple-projects-beginners-online-stopwatch-full-screen
// https://www.educative.io/answers/how-to-create-a-stopwatch-in-javascript
/**
 * Timer functions: start timer with the first click on a card, stop timer (when all pairs are found), 
 * reset timer (new game), and update timer for accurate timer display.
 */
const timerDisplay = document.getElementById('timer-display');
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
    elapsedTime = 0;
    timerDisplay.innerHTML = '00:00';
}

function updateTimer() {
    const timeElapsed = Date.now() - startTime;
    const seconds = Math.floor((timeElapsed / 1000) % 60);
    const minutes = Math.floor((timeElapsed / 1000 / 60) % 60);
    timerDisplay.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Trap focus within either modal when open
// https://hidde.blog/using-javascript-to-trap-focus-in-an-element/

// ASMR Modal - the function modalAsmrElement has been adapted from Hidde de Vries's tutorial
let modalAsmrElement = document.getElementById('modal-asmr');

function trapFocus(modalAsmrElement) {    
    const focusableEl = document.getElementById('close-asmr');
    const KEYCODE_TAB = 9;
  
    modalAsmrElement.addEventListener('keydown', function(e) {
      const isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
  
      if (!isTabPressed) { 
        return; 
      }
  
      if ( e.shiftKey ) /* shift + tab */ {
        if (document.activeElement === focusableEl) {
          focusableEl.focus();
            e.preventDefault();
          }
        } else /* tab */ {
        if (document.activeElement === focusableEl) {
          focusableEl.focus();
            e.preventDefault();
          }
        }
    });
  }


// for the fireworks modal - the function modalFireworksElement is based on Hidde de Vries's tutorial
let modalFireworksElement = document.getElementById('modal-fireworks');

function trapFocus(modalFireworksElement) {
    var focusableEls = modalFireworksElement.querySelectorAll('button:not([disabled]), #close-fireworks');
    var firstFocusableEl = focusableEls[0];  
    var lastFocusableEl = focusableEls[focusableEls.length - 1];
    var KEYCODE_TAB = 9;
  
    modalFireworksElement.addEventListener('keydown', function(e) {
      var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
  
      if (!isTabPressed) { 
        return; 
      }
  
      if ( e.shiftKey ) /* shift + tab */ {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
            e.preventDefault();
          }
        } else /* tab */ {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
            e.preventDefault();
          }
        }
    });
  }



