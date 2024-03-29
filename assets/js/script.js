/* The following 3 arrays (easyCards, mediumCards, difficultCards) are based on the code from Ania Kubow's tutorial and adapted 
(links to all tutorials mentioned in this file can be found in the README.md)
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

// Create an array each time two cards are clicked - based on Ania Kubow's tutorial
let cardsChosen = [];
let cardsChosenIds = [];

// Create an array that includes all pairs found - based on Ania Kubow's tutorial
let cardsWon = [];

// Create an array that allows to start the timer with the first card click
let cardsOpen = [];

// Get relevant html elements to populate grid and display result
const grid = document.getElementById('grid');
let pairsFound = document.getElementById('result');

// Get html elements needed for hiding/displaying a certain part of the page
const welcome = document.getElementById('welcome');
const gridContainer = document.getElementById('grid-container');

// Get relevant elements to create a suitable grid when the user chooses their level
const levelEasyChosen = document.getElementById('easy-level');
const levelMediumChosen = document.getElementById('medium-level');
const levelDifficultChosen = document.getElementById('difficult-level');

// Lock the board when 2 cards were clicked - based on a YouTube tutorial by Code Sketch
let lockBoard = false;

// Create a board when the user chooses a level (click or Enter/space key)
let currentLevel;

levelEasyChosen.addEventListener('click', function (e) {
    currentLevel = 'easy';
    createBoard();
});

levelEasyChosen.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
        currentLevel = 'easy';
        createBoard();
    }
});

levelMediumChosen.addEventListener('click', function (e) {
    currentLevel = 'medium';
    createBoard();
});

levelMediumChosen.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
        currentLevel = 'medium';
        createBoard();
    }
});

levelDifficultChosen.addEventListener('click', function (e) {
    currentLevel = 'difficult';
    createBoard();
});

levelDifficultChosen.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
        currentLevel = 'difficult';
        createBoard();
    }
});

/**
 * Create a new board for the game
 */
let enterOrSpace = 'maybe'; // this variable allows to check whether the key pressed was Enter/space or something else

function createBoard() {
    welcome.classList.add('hide');
    gridContainer.classList.remove('hide');


    switch (currentLevel) {
        case 'easy':
            // Shuffle cards randomly - copied from Ania Kubow's tutorial
            easyCards.sort(() => 0.5 - Math.random());
            // Create a grid for 12 cards
            grid.classList.add('grid-easy');
            // The next few lines are copied from Ania Kubow's tutorial (slightly adapted)
            for (let i = 0; i < easyCards.length; i++) {
                const card = document.createElement('img');
                card.setAttribute('src', './assets/images/other/orange.png');
                card.setAttribute('data-id', i);
                grid.append(card);
                card.addEventListener('click', flipCard);
                // The above line is the end of Ania Kubow's code

                card.setAttribute('alt', 'Memory game card - easy level');
                card.classList.add('card-img'); // to address the relevant images in the checkMatch function
                card.tabIndex = '0'; // for keyboard accessibility
                // Two event listeners for keydown to make sure cards are flipped only with Enter/space key    
                card.addEventListener('keydown', function (e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        enterOrSpace = 'yes';
                    } else {
                        enterOrSpace = 'no';
                    }
                });
                card.addEventListener('keydown', flipCard);
            }
            break;

        case 'medium':
            // Shuffle cards randomly - copied from Ania Kubow's tutorial
            mediumCards.sort(() => 0.5 - Math.random());
            // Create a grid for 16 cards
            grid.classList.add('grid-medium');

            // The next few lines are copied from Ania Kubow's tutorial (slightly adapted)            
            for (let i = 0; i < mediumCards.length; i++) {
                const card = document.createElement('img');
                card.setAttribute('src', './assets/images/other/orange.png');
                card.setAttribute('data-id', i);
                grid.append(card);
                card.addEventListener('click', flipCard);
                // The above line is the end of Ania Kubow's code
                card.setAttribute('alt', 'Memory game card - medium level');
                card.classList.add('card-img'); // to address the relevant images in the checkMatch function               
                card.tabIndex = '0'; // tabindex for keyboard accessibility
                // Two event listeners for keydown to make sure cards are flipped only with Enter/space key    
                card.addEventListener('keydown', function (e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        enterOrSpace = 'yes';
                    } else {
                        enterOrSpace = 'no';
                    }
                });
                card.addEventListener('keydown', flipCard);
            }
            break;

        case 'difficult':
            // Shuffle cards randomly - copied from Ania Kubow's tutorial
            difficultCards.sort(() => 0.5 - Math.random());
            // Create a grid for 20 cards
            grid.classList.add('grid-difficult');

            // The next few lines are copied from Ania Kubow's tutorial (slightly adapted)            
            for (let i = 0; i < difficultCards.length; i++) {
                const card = document.createElement('img');
                card.setAttribute('src', './assets/images/other/orange.png');
                card.setAttribute('data-id', i);
                grid.append(card);
                card.addEventListener('click', flipCard);
                // The above line is the end of Ania Kubow's code
                card.setAttribute('alt', 'Memory game card - difficult level');
                card.classList.add('card-img'); // to address the relevant images in the checkMatch function 
                card.tabIndex = '0'; // tabindex for keyboard accessibility
                // Two event listeners for keydown to make sure cards are flipped only with Enter/space key    
                card.addEventListener('keydown', function (e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        enterOrSpace = 'yes';
                    } else {
                        enterOrSpace = 'no';
                    }
                });
                card.addEventListener('keydown', flipCard);
            }
    }
}

/**
 * Check whether 2 cards are a matching pair
 */
function checkMatch() {
    // The next few lines are copied from Ania Kubow's tutorial (slightly adapted)            
    const cards = document.getElementsByClassName('card-img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', './assets/images/other/orange.png');
        cards[optionTwoId].setAttribute('src', './assets/images/other/orange.png');
        alert("You've clicked the same image");
        // The above line is the end of Ania Kubow's code

        // Empty the arrays and unlock the board to restart the process
        cardsChosen = [];
        cardsChosenIds = [];
        lockBoard = false;
        return;
    }

    // The next few lines are copied from Ania Kubow's tutorial (slightly adapted)            
    if (cardsChosen[0] == cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', './assets/images/other/white.png');
        cards[optionTwoId].setAttribute('src', './assets/images/other/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        // The above line is the end of Ania Kubow's code

        cards[optionOneId].removeEventListener('keydown', flipCard);
        cards[optionTwoId].removeEventListener('keydown', flipCard);

        // The next few lines are copied from Ania Kubow's tutorial (slightly adapted)
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', './assets/images/other/orange.png');
        cards[optionTwoId].setAttribute('src', './assets/images/other/orange.png');
    }
    // The above line is the end of Ania Kubow's code

    lockBoard = false;
    pairsFound.innerHTML = cardsWon.length;

    //Empty the arrays to restart the process
    cardsChosen = [];
    cardsChosenIds = [];

    // What happens when all pairs are found
    switch (currentLevel) {
        case 'easy':
            // The following 2 lines of code are loosely based on Ania Kubow's tutorial
            if (cardsWon.length == easyCards.length / 2) {
                pairsFound.innerHTML = 'all six!!!';
                stopTimer();
                displayModalCongrats();
            }
            break;
        case 'medium':
            // The following 2 lines of code are loosely based on Ania Kubow's tutorial
            if (cardsWon.length == mediumCards.length / 2) {
                pairsFound.innerHTML = 'all eight!!!';
                stopTimer();
                displayModalCongrats();
            }
            break;
        case 'difficult':
            // The following 2 lines of code are loosely based on Ania Kubow's tutorial
            if (cardsWon.length == difficultCards.length / 2) {
                pairsFound.innerHTML = 'all ten!!!';
                stopTimer();
                displayModalCongrats();
            }
            break;
    }
}

/**
 * Flip card when clicked, showing cards suitable for the chosen level
 */
function flipCard() {
    if (lockBoard) return;

    if (enterOrSpace == 'no') return;

    // The line of code below is copied from Ania Kubow's tutorial 
    const cardId = this.getAttribute('data-id');

    switch (currentLevel) {
        case 'easy':
            // The following code is copied from Ania Kubow's tutorial (slightly adjusted)
            cardsChosen.push(easyCards[cardId].name);
            cardsChosenIds.push(cardId);
            this.setAttribute('src', easyCards[cardId].img);
            // The above line is the end of Ania Kubow's code
            cardsOpen.push(easyCards[cardId].name);
            break;
        case 'medium':
            // The following code is copied from Ania Kubow's tutorial (slightly adjusted)
            cardsChosen.push(mediumCards[cardId].name);
            cardsChosenIds.push(cardId);
            this.setAttribute('src', mediumCards[cardId].img);
            // The above line is the end of Ania Kubow's code
            cardsOpen.push(mediumCards[cardId].name);
            break;
        case 'difficult':
            // The following code is copied from Ania Kubow's tutorial (slightly adjusted)
            cardsChosen.push(difficultCards[cardId].name);
            cardsChosenIds.push(cardId);
            this.setAttribute('src', difficultCards[cardId].img);
            // The above line is the end of Ania Kubow's code
            cardsOpen.push(difficultCards[cardId].name);
    }

    // The following code is copied from Ania Kubow's tutorial (slightly adjusted)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 1000);
        // The above line is the end of Ania Kubow's code
        lockBoard = true;
    }

    startTimer();
}

/**
 * Return to the menu when the user activates the "back to menu" button 
 * (click or Enter/space key)
 */
const goBack = document.getElementById('go-back');
goBack.addEventListener('click', backToMenu);
goBack.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
        backToMenu();
    }
});

function backToMenu() {
    gridContainer.classList.add('hide');
    welcome.classList.remove('hide');
    location.reload();
}

/**
 * Create a new board with the same game level as currently chosen when the user activates the new game button 
 * (click or Enter/space key)
 */
const newGameBtn = document.getElementById('new-game');
newGameBtn.addEventListener('click', freshBoard);
newGameBtn.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
        freshBoard();
    }
});

function freshBoard() {
    grid.innerHTML = '';
    resetTimer();
    pairsFound.innerHTML = '0';

    //empty the arrays to restart the process
    cardsChosen = [];
    cardsChosenIds = [];
    cardsOpen = [];
    cardsWon = [];

    //create a new board for the same level as before
    createBoard();
}

// Purring on/off - listen for a click or Enter/space key
const purring = document.getElementById('grid-header');
purring.addEventListener('click', purringOnOff);
purring.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
        purringOnOff();
    }
});

let soundIcon = document.getElementById('sound-icon');
const myAudio = new Audio('./assets/audio/purring.mp3');
myAudio.classList.add('not-playing');

/**
 * Play or pause the audio when the user activates "Purring on/off"
 */
function purringOnOff() {
    if (myAudio.classList == 'not-playing') {
        myAudio.play();
        myAudio.loop = true;
        soundIcon.setAttribute('src', './assets/images/other/sound-on.svg');
        soundIcon.setAttribute('alt', 'Click here to turn the sound off');
        myAudio.classList.remove('not-playing');
        myAudio.classList.add('playing');
    } else if (myAudio.classList == 'playing') {
        myAudio.pause();
        soundIcon.setAttribute('src', './assets/images/other/sound-off.svg');
        soundIcon.setAttribute('alt', 'Click here to turn the sound on');
        myAudio.classList.remove('playing');
        myAudio.classList.add('not-playing');
    }
}

/**
 * Control the timer under the game grid: start timer with the first click on a card, stop timer when all pairs are found, 
 * reset timer (new game button), and update timer (for accurate display)
 */
const timerDisplay = document.getElementById('timer-display');
// The following 3 lines are copied from the insidethediv.com tutorial
let startTime;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
    if (cardsOpen.length === 1) {
        // The following 2 lines are copied from the insidethediv.com tutorial
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTimer, 10);
    }
}

// The following function stopTimer is copied from the insidethediv.com tutorial
function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    // The following 2 lines are copied from the insidethediv.com tutorial
    clearInterval(timerInterval);
    elapsedTime = 0;
    timerDisplay.innerHTML = '00:00';
}

function updateTimer() {
    // The following 3 lines are copied from the insidethediv.com tutorial
    const timeElapsed = Date.now() - startTime;
    const seconds = Math.floor((timeElapsed / 1000) % 60);
    const minutes = Math.floor((timeElapsed / 1000 / 60) % 60);
    // The following line of code is based on the insidethediv.com tutorial (adjusted)
    timerDisplay.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}


/**
 * Control the ASMR Modal - loosely based on the tutorial from w3schools.com
 */
const modalAsmr = document.getElementById('modal-asmr');
const questionMarkModalBtn = document.getElementById('question-mark-modal-btn');
const spanCloseModalAsmr = document.getElementById('close-asmr');

// Open the ASMR modal when the user activates the question-mark button (click or Enter/space key)
questionMarkModalBtn.addEventListener('click', displayModalAsmr);
questionMarkModalBtn.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
        displayModalAsmr();
    }
});

function displayModalAsmr() {
    modalAsmr.classList.remove('hide');
    modalAsmr.classList.add('show');
    modalAsmrElement.focus();
    trapFocus(modalAsmrElement);
}

// Close the modal when the user activates the x span (click or Enter/space key)
spanCloseModalAsmr.addEventListener('click', closeModalAsmr);
spanCloseModalAsmr.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
        closeModalAsmr();
    }
});

function closeModalAsmr() {
    modalAsmr.classList.add('hide');
}

// Close the modal when the user clicks anywhere outside of it
window.addEventListener('click', function (e) {
    if (e.target === modalAsmr) {
        modalAsmr.classList.add('hide');
    }
});

/** 
 * Control the Congrats Modal - loosely based on the tutorial from w3schools.com
 */
const modalCongrats = document.getElementById('modal-congrats');
const spanCloseModalCongrats = document.getElementById('close-congrats');

// Show the modal when the user wins the game
function displayModalCongrats() {
    modalCongrats.classList.remove('hide');
    modalCongrats.classList.add('show');
    modalCongratsElement.focus();
    trapFocus(modalCongratsElement);
}

// Close the modal when the user activates the x span (click or Enter/space key)
spanCloseModalCongrats.addEventListener('click', closeModalCongrats);
spanCloseModalCongrats.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
        closeModalCongrats();
    }
});

function closeModalCongrats() {
    modalCongrats.classList.add('hide');
}

// Close the modal when the user clicks anywhere outside of it
window.addEventListener('click', function (e) {
    if (e.target === modalAsmr) {
        modalAsmr.classList.add('hide');
    }
});

/**
 * Congrats Modal buttons - yes starts a new game, no just closes the modal
 */
const congratsBtnYes = document.getElementById('congrats-btn-yes');
const congratsBtnNo = document.getElementById('congrats-btn-no');

congratsBtnYes.addEventListener('click', congratsYes);
congratsBtnYes.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
        congratsYes();
    }
});

function congratsYes() {
    closeModalCongrats();
    freshBoard();
}

congratsBtnNo.addEventListener('click', congratsNo);
congratsBtnNo.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
        congratsNo();
    }
});

function congratsNo() {
    closeModalCongrats();
}

/**
 * Trap focus within either modal when open
 */
// ASMR Modal - the function trapFocus has been adapted from Hidde de Vries's tutorial
const modalAsmrElement = document.getElementById('modal-asmr');

function trapFocus(modalAsmrElement) {
    const focusableEl = document.getElementById('close-asmr');
    const KEYCODE_TAB = 9;

    modalAsmrElement.addEventListener('keydown', function (e) {
        let isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);

        if (!isTabPressed) {
            return;
        }

        if (e.shiftKey) /* shift + tab */ {
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

// Congrats Modal - the function trapFocus has been copied (with minor modifications) from Hidde de Vries's tutorial
const modalCongratsElement = document.getElementById('modal-congrats');

function trapFocus(modalCongratsElement) {
    const focusableEls = modalCongratsElement.querySelectorAll('button:not([disabled]), #close-congrats');
    const firstFocusableEl = focusableEls[0];
    const lastFocusableEl = focusableEls[focusableEls.length - 1];
    const KEYCODE_TAB = 9;

    modalCongratsElement.addEventListener('keydown', function (e) {
        let isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);

        if (!isTabPressed) {
            return;
        }

        if (e.shiftKey) /* shift + tab */ {
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

/**
 * Detect whether the user's device is a mobile device to adjust the landing page gif:
 * <video> on laptops and larger screens, <img> on touchscreen devices where autoplay is blocked
 */

// The following code has been copied from MDN documentation
let hasTouchScreen = false;
if ("maxTouchPoints" in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0;
} else if ("msMaxTouchPoints" in navigator) {
    hasTouchScreen = navigator.msMaxTouchPoints > 0;
} else {
    const mQ = matchMedia?.("(pointer:coarse)");
    if (mQ?.media === "(pointer:coarse)") {
        hasTouchScreen = !!mQ.matches;
    } else if ("orientation" in window) {
        hasTouchScreen = true; // deprecated, but good fallback
    } else {
        // Only as a last resort, fall back to user agent sniffing
        const UA = navigator.userAgent;
        hasTouchScreen =
            /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
            /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
    }
}

if (hasTouchScreen) {
    // The above line is the end of MDN documentation code
    document.getElementById('gif-video').classList.add('hide');
    document.getElementById('gif-img').classList.remove('hide');
}