# Cat ASMR Memory Game

![Responsive mockup](https://github.com/Agnieszka-21/memory-game-cats/blob/main/assets/documentation/amiresponsive.png)

## Introduction

Cat ASMR is an online memory game with the element of ASMR in form of an audio recording of a happy cat purring. It is a game for anyone who loves brain teasers and cognitive training, and also any cat lovers. The audio element (controlled by the user) provides a potentially calming and relaxing quality, while 3 game levels ensure great fun and an entertaining challenge.

## Table of Contents
- [Cat ASMR Memory Game](#cat-asmr-memory-game)
  - [Introduction](#introduction)
  - [Table of Contents](#table-of-contents)
  - [User Experience](#user-experience)
    - [User Stories](#user-stories)
  - [Design](#design)
    - [Colour Scheme](#colour-scheme)
    - [Typography](#typography)
    - [Imagery](#imagery)
  - [Features](#features)
    - [Existing Features](#existing-features)
    - [Potential Future Features](#potential-future-features)
  - [Testing](#testing)
    - [Validator Testing](#validator-testing)
    - [Lighthouse](#lighthouse)
    - [Wave Webaim - accessibility testing](#wave-webaim---accessibility-testing)
    - [Manual Testing](#manual-testing)
    - [Fixed Bugs](#fixed-bugs)
  - [Technologies Used](#technologies-used)
  - [Deployment](#deployment)
  - [Credits](#credits)
    - [Content](#content)
    - [Media](#media)
  - [Acknowledgements](#acknowledgements)


## User Experience

### User Stories

  - __External User's Goals__

    - The user wants to enjoy a simple yet entertaining game.
    - The user wants to improve their short-term and visual memory.
    - The user loves cats and anything about them, and wants to relax to the sound of a purring cat while having fun.

  - __Site Owner's Goals__

    - The primary goal of the site owner is to provide entertainment that sharpens the user's cognitive abilities.
    - The owner also aims to create a relaxing experience for the user by giving them the option to turn on the audio recording of a purring cat. This sound is widely known to have positive influence on people's well-being and mood.
    - Lastly, the owner wants to contribute to a raising awareness of ASMR and its benefits. 


## Design

### Colour Scheme

- __Orange (#f07b0d)__ 
  - A warm color, often associated with fun, playfulness, and vitality, orange is the accent color in this web application. 
  - The linear background gradient that starts with orange at the top of the page and ends with dark maroon at the bottom has been created based on colors extrapolated from the giphy animation on the landing page, resulting in a coherent, warm, and inviting combo. 
  - Orange has also been used for cards in the grid when their images are hidden, for card borders, and in the modal appearing at the end of the game when the user finds all pairs, accentuating a sense of playfulness, fun, and joy. 
  
- __Maroon (#5a003b)__ 
  - Used in the background, as a color for the closing icon in both modals, and also as text color on white backgrounds, this color creates not only sufficient contrast, but also connects multiple elements with the gradient background in a simple and minimalistic way.
  
- __White (#ffffff)__ 
  - This is the color of most buttons, modal background, grid background, and a background for text on the noscript version of the page. 
  - It provides an excellent contrast with maroon, and therefore was used as a color for the question mark icon on the landing page, as well as for text appearig on the dark maroon background.

- __Black (#1e0311)__ 
  - Black has been used as box shadow on button-like elements and the main title to create an impression of depth, as well as for any text on bright background (white or orange).
  - This color provides a high contrast, making it especially suitable for longer fragments of text.

![Contrast Grid](https://github.com/Agnieszka-21/memory-game-cats/blob/main/assets/documentation/contrast-grid-colors.png)

### Typography

Two font families are imported from Google fonts and used across all pages:

- __Lobster, weight 400__  
  - A sans-serif font that resembles stylized handwriting, Lobster is used for the main title (h1 and h2) on the landing page of the game. This style works well for larger font sizes.
  - This font is not used anywhere else in order to keep it as a "signature font" for the page title so that it is easily recognizable. 

- __Roboto Condensed, weights from 100 to 900, the entire font family__
  - Also a sans-serif font, Roboto Condensed is used for any regular and bold text in this web application.
  - It is simple and legible.
  - A wide variety of different weights and styles within this family makes it easily customizable, allowing for future adjustments and further development of the application.

### Imagery
All images used on the cards in this memory game are thematically connected to cats. While the levels easy and medium offer a mix of black-and-white images on a white background, the difficult level uses its own set of images that depict only black silhouettes of cats, forcing the user to focus on shapes and smaller details rather than obvious differences between the pictures.
The only multi-colored image present is the animated gif of a cat sleeping by the fire on the landing page that not only clearly represents the subject of this game, but also defines its color palette.


## Features

### Existing Features

- __Landing page gif (image/video depending on the device)__
  
  - This graphic represents both the subject of this game and its goal to help the user relax.

![Landing page gif](https://github.com/Agnieszka-21/memory-game-cats/blob/main/assets/documentation/gif.png)

- __Three game level buttons__

  - These buttons allow the user to choose an easy, medium, or difficult level for their game, and lead to a suitable card grid when activated (with a click or a keypress on the Enter or space key). On phone screens, these buttons appear above the gif in a column to suit the vertical position of the screen. On tablets and larger screens, they are under the gif in a single row in order to make better use of available space.

![Game level buttons](https://github.com/Agnieszka-21/memory-game-cats/blob/main/assets/documentation/game-level-buttons.png)

- __Question mark icon opening the ASMR modal__

  - The white icon in the bottom left corner opens a modal that includes a short explanation of what ASMR is and why it is relevant to this game. 
  - The modal can be closed by clicking on the close-icon in its upper right corner, or anywhere outside the modal itself.

![Question mark icon](https://github.com/Agnieszka-21/memory-game-cats/blob/main/assets/documentation/question-mark-icon.png)

- __ASMR modal__

  - This modal has an educational purpose - it explains briefly what ASMR is, and also how the user can experience ASMR while playing the game.
  - The modal can be closed by clicking the close icon in the top right corner, or by clicking anywhere outside of the modal.

![ASMR modal](https://github.com/Agnieszka-21/memory-game-cats/blob/main/assets/documentation/modal-asmr.png)

- __Purring on/off with a dynamic sound icon__

  - This header element controls the audio element on this page - the sound of a purring cat that can be turned on or paused with a simple click or Enter/space key. When played, the sound is automatically looped.

![Purring on/off](https://github.com/Agnieszka-21/memory-game-cats/blob/main/assets/documentation/purring-header.png)

- __The game grid with cards__

  - Depending on the level the user chooses (easy, medium, or difficult), the grid displays 12, 16, or 20 cards in neat rows and columns.
  - Images are not visible until the user clicks a card - instead, an orange back-face of the cards is shown.
  - The user is allowed to see 2 cards at a time, then the cards return to their orange back-face, unless the user found a matching pair and these cards are set to white with an orange border.

![Game grid - easy board](https://github.com/Agnieszka-21/memory-game-cats/blob/main/assets/documentation/easy-board.png)
![Game grid - medium board](https://github.com/Agnieszka-21/memory-game-cats/blob/main/assets/documentation/medium-board.png)
![Game grid - difficult board](https://github.com/Agnieszka-21/memory-game-cats/blob/main/assets/documentation/difficult-board.png)

- __Timer__

  - The timer/stopwatch starts when the user clicks the first card in the game, and stops automatically at the end of the game, when the last remaining pair is found.
  - It is shown in the following format: "00:00" standing for "minutes:seconds".

- __Result - pairs found__

  - Each time the user finds a matching pair of cards, the result is updated with a relevant number of pairs found.

![Timer and result](https://github.com/Agnieszka-21/memory-game-cats/blob/main/assets/documentation/timer-and-result.png)

- __Congrats modal__

  - The modal pops up when the user finds the last matching pair, therefore winning the game. 
  - It can be closed by clicking on the close icon in the upper right corner, similarly to the ASMR modal on the landing page.

![Congrats modal](https://github.com/Agnieszka-21/memory-game-cats/blob/main/assets/documentation/congrats-modal.png)

- __Go Back button and New Game button__

  - The first button takes the user back to the landing page. It is practical when the user wants to start a new game but on a different level than before.
  - This econ button clears the data from the previous game and sets up a fresh board with shuffled cards, ready for the user to start playing again. It is useful when the user wants to restart simply play again, sticking with the same level as the one chosen earlier on the landing page.
  
![Go Back and New Game buttons](https://github.com/Agnieszka-21/memory-game-cats/blob/main/assets/documentation/back-and-new-buttons.png)

- __Noscript page__

  - This part of the application is shown only when JavaScript is not available/disabled. 
  - The design corresponds with the main page through the use of the same gradient background, colors, and fonts.

![Noscript page]()

- __404 page__

  - This page is displayed when the user cannot find the correct url.
  - It provides a link sending the user back to the landing page.
  - The design corresponds with the main page, making it clear that both pages are related.

![404 page](https://github.com/Agnieszka-21/memory-game-cats/blob/main/assets/documentation/error-page.png)

All interactive features in this game can be accessed not only by clicking/tapping the relevant elements, but also by using the Tab key, making this web application keyboard-accessible.

### Potential Future Features

- Arrow keys navigation for the game grid


## Testing

### Validator Testing

- __HTML__
  - No errors were returned when passing through the official W3C validator
    - [Homepage](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fagnieszka-21.github.io%2Fmemory-game-cats%2Findex.html)
    - [404 page](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fagnieszka-21.github.io%2Fmemory-game-cats%2F404.html)

- __CSS__
  - No errors were found when passing through the official Jigsaw validator
    - [Homepage](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fagnieszka-21.github.io%2Fmemory-game-cats%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
    - [404 page](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fagnieszka-21.github.io%2Fmemory-game-cats%2F404.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

- __JavaScript__
  - No errors were found when passing through the Jshint linter. ![See a screenshot here.]()

### Lighthouse

| Page tested | View tested | Outcome of the audit | Solution applied | Screenshot of clear validator output |
| :---------- | :---------- | :------------------- | :--------------- | :----------------------------------- |
| Home | mobile | good | N/A | ![Clear validator output](https://github.com/Agnieszka-21/memory-game-cats/blob/main/assets/documentation/lighthouse-mobile-index.png) |
| Home | desktop | good | N/A | ![Clear validator output](https://github.com/Agnieszka-21/memory-game-cats/blob/main/assets/documentation/lighthouse-desktop-index.png) |
| 404 | mobile | good | N/A | ![Clear validator output](https://github.com/Agnieszka-21/memory-game-cats/blob/main/assets/documentation/lighthouse-mobile-404.png) |
| 404 | desktop | good | N/A | ![Clear validator output](https://github.com/Agnieszka-21/memory-game-cats/blob/main/assets/documentation/lighthouse-desktop-404.png) |

### Wave Webaim - accessibility testing

No errors were found: 

- [Wave Webaim - Home](https://wave.webaim.org/report#/https://agnieszka-21.github.io/memory-game-cats/index.html)
- [Wave Webaim - 404](https://wave.webaim.org/report#/https://agnieszka-21.github.io/memory-game-cats/404.html)

### Manual Testing

- __Features Testing__

| Feature being tested | Expected Outcome | Testing Performed | Actual Outcome | Result (pass/fail) |
| :------------------- | :--------------- | :---------------- | :------------- | :-------------------- |
| Button "easy" | takes you to the game with 12 cards | laptop, phone | as expected | pass |
| Button "medium" | takes you to the game with 16 cards | laptop, phone | as expected | pass |
| Button "difficult" | takes you to the game with 20 cards | laptop, phone | as expected | pass |
| Question mark button | opens the ASMR modal | laptop, phone | as expected | pass |
| Close button in the ASMR modal | closes the modal | laptop, phone | as expected | pass |
| Purring on/off | plays and pauses audio | laptop, phone | as expected | pass |
| Game cards | show game images when clicked (only 2 cards shown together) | laptop, phone | as expected | pass |
| Time elapsed | timer starts with the first card click and gets updated every second | laptop, phone | as expected | pass |
| Pairs found | the number changes with each matching pair found | laptop, phone | as expected | pass |
| Go back button | takes you back to the landing page | laptop, phone | as expected | pass |
| New game | resets the board | laptop, phone | as expected | pass |
| Congrats modal | shows up as soon as all pairs are found | laptop, phone | as expected | pass |
| Button "yes, please" in the modal | resets the board like the New Game button | laptop, phone | as expected | pass |
| Button "no, thanks" in the modal | closes the modal | laptop, phone | as expected | pass |
| Close button in the congrats modal | closes the modal | laptop, phone | as expected | pass |
| Return Home button on the 404 page | takes the user back to the landing page | laptop, phone | as expected | pass |

- __Responsiveness (tested with Dev Tools)__

| Device tested | Site responsive >=700px | Site Responsive <699px | Renders as expected |
| :------------ | :---------------------- | :--------------------- | :------------------ | 
| Galaxy Fold | N/A | yes | yes |
| iPhone 12Pro | N/A | yes | yes |
| Samsung Galaxy S8+ | N/A | yes | yes |
| iPhone SE | N/A | yes | yes |
| iPad Mini | yes | N/A | yes |
| iPad Air | yes | N/A | yes |
| iPad Pro | yes | N/A | yes |
| Surface Pro 7 | yes | N/A | yes |
| Laptop 1440px | yes | N/A | yes |
| 4K - 2560px | yes | N/A | yes |

- __Browser compatibility__

| Browser being tested | Section tested | Intended Appearance | Intended Responsiveness |
| :------------------- | :------------- |:------------------- | :---------------------- | 
| Chrome | Landing page | good | good | 
| Chrome | ASMR modal | good | good | 
| Chrome | Easy game | good | good | 
| Chrome | Medium game | good | good | 
| Chrome | Difficult game | good | good |
| Chrome | Congrats modal | good | good |
| Chrome | 404 page | good | good |
| Chrome | Noscript page | good | good |
| Edge | Landing page | good | good | 
| Edge | ASMR modal | good | good | 
| Edge | Easy game | good | good | 
| Edge | Medium game | good | good | 
| Edge | Difficult game | good | good |
| Edge | Congrats modal | good | good |
| Edge | 404 page  | good | good |
| Edge | Noscript page | good | good |
| Firefox | Landing page | good | good | 
| Firefox | ASMR modal | good | good | 
| Firefox | Easy game | good | good | 
| Firefox | Medium game | good | good | 
| Firefox | Difficult game | good | good |
| Firefox | Congrats modal | good | good |
| Firefox | 404 page | good | good |
| Firefox | Noscript page | good | good |

### Fixed Bugs

- One game card svg file was not square, ending up being slightly higher than all other images. Its size has been adapted so that the width and height are equal, as is the case for all other card images.

TO FIX
- The noscript page is being displayed without its correct styling...
- The ASMR Modal doesn't trap focus within it...


## Technologies Used

Code languages used: HTML, CSS, and JavaScript.
Software used: VS Code.


## Deployment

The site was deployed to GitHub pages. The steps to deploy were as follows:

- In the GitHub repository, navigate to the Settings tab
- From the source section drop-down menu, select the Main Branch
- Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here: <https://agnieszka-21.github.io/memory-game-cats/>

In order to clone the repository:
- Use the following link: [https://github.com/Agnieszka-21/memory-game-cats.git](https://github.com/Agnieszka-21/memory-game-cats.git)

In order to fork the repository:
- Go to [https://github.com/Agnieszka-21/memory-game-cats](https://github.com/Agnieszka-21/memory-game-cats)
- In the top menu choose the option Fork.


## Credits

The following tutorials, articles, documentation and media were used to create this website.

### Content

- The text for the modal explaining what ASMR is was taken from the online article [What ASMR means: How it works and why it's popular](https://www.nebraskamed.com/neurological-care/asmr-videos-are-exploding-online-but-what-is-asmr-and-does-it-work)
- Insturctions on JavaScript code for basic game functionality were taken from [this YouTube tutorial by Ania Kubow](https://www.youtube.com/watch?v=ec8vSKJuZTk&t=3773s) and adapted. See comments in the js file for more details.
- Instructions on how to lock the board were taken from [this YouTube tutorial by Code Sketch](https://www.youtube.com/watch?v=yMNFOyRELrI) and adapted.
- Instructions on how to create a modal were adapted from this [w3schools documentation](https://www.w3schools.com/howto/howto_css_modals.asp). See comments in the html, css, and js files for more details.
- Instructions on how to trap focus within a modal were adapted from [this article by Hidde de Vries](https://hidde.blog/using-javascript-to-trap-focus-in-an-element/).
- JavaScript code for implementing a timer/stopwatch is loosely based on [this article from insidethediv.com](https://www.insidethediv.com/javascript-simple-projects-beginners-online-stopwatch-full-screen).
- JavaScript code for device recognition used to display a static landing page image on mobile/touchscreen devices has been copied from [the following MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent#mobile_device_detection).

### Media

- The favicon was created from an emoji of a grinning cat with the following [favicon-converter](https://favicon.io/emoji-favicons/grinning-cat)
- The fonts used in this project were imported from [Google Fonts](https://fonts.google.com/)
- The linear gradient used as a background for this website was created with [cssgradient.io](https://cssgradient.io)
- The css color filter for modal-related icons (svg files) was converted from hex code thanks to [this converter](https://isotropic.co/tool/hex-color-to-css-filter/)
- The animated image of a cat sleeping by the fire apparent on the landing page, was taken from [giphy.com](https://giphy.com/gifs/homescapes-cat-cats-1AgCGIJrs1UOXujX5a)
- The SVG vector graphics used as images for game cards in the easy and medium level originate from [svgrepo.com](https://www.svgrepo.com/vectors/cat/monocolor/)
- The SVG vector graphics used as images for game cards for the difficult level come from [vecteezy.com](https://www.vecteezy.com/free-vector/cat-silhouette)
- The square orange image for the back of each card was created with [onlinepngtools.com](https://onlinepngtools.com/generate-single-color-png)
- The square white image used to mark that a pair was found was downloaded from the following [Free Code Camp tutorial by Ania Kudow](https://github.com/kubowania/memory-game/tree/master/images)
- The modal-related icons of a question mark in a circle and a cross mark in a circle originate from [svgrepo.com](https://www.svgrepo.com/)
- The audio recording of a purring cat was taken from [pixabay.com](https://pixabay.com/sound-effects/purring-happy-cat-29114/)


## Acknowledgements

I would like to express my sincere gratitude to my mentor, Matt Bodden, whose suggestions and practical advice helped me ensure that this project not only takes my understanding of JavaScript to a higher level, but also encourages best practices that result in a positive experience for the user of this web application.

[Back to top](#top)