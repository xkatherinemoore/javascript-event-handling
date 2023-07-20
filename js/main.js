/* 
    NAME: Katherine Moore
    MEID: KAT2341012
    DATE: 7/19/2023
*/

/*
    Array of image objects and randomPicture function
*/
const images = [
    {
        name: 'corgis',
        imgSrc: './images/stock-photo-portrait-two-adorable-welsh-corgi.jpg',
        alt: 'Two corgis on a couch.',
        caption: 'Nothing like two adorable corgis',
    },
    {
        name: 'cows',
        imgSrc: './images/stock-photo-cows.jpg',
        alt: 'Two cows in a field.',
        caption: 'Mooooooooooo!',
    },
    {
        name: 'top of the world',
        imgSrc: './images/stock-photo-man-on-top-of-the.jpg',
        alt: 'Man standing on peak of a mountain with arms out.',
        caption: 'I\'m on top of the world!!!',
    },
    {
        name: 'coffee',
        imgSrc: './images/stock-photo-cropped-view-man-sitting-cafe.jpg',
        alt: 'Pretty latte art.',
        caption: 'Nothing like a good cup of coffee...',
    },
    {
        name: 'beach',
        imgSrc: './images/stock-photo-summer-beverages-cooler-chaise-lounges.jpg',
        alt: 'Two empty chaise lounge chairs on the beach.',
        caption: 'I could really use a vacation.',
    },
    {
        name: 'concert',
        imgSrc: './images/stock-photo-yellow-concert-crowd.jpg',
        alt: 'Crowded concert venue.',
        caption: 'Concerts are fun, but man I hate crowds.',
    },
];

//Returns a random image object from the images array
function randomPicture(images) {
    let index = Math.floor(Math.random()*images.length);
    return images[index];
}



//VARIABLES:
let image = {};
let imgDiv = document.getElementById('onLoad-Picture');
let captionDiv = document.getElementById('caption-box')
let hiddenBtn = document.getElementById('hidden-btn');

let formDiv = document.querySelector('#form-div');
let form = document.querySelector('#form-div form');
let formNameInput = document.getElementById('user-name')
let formOutputDiv = document.getElementById('form-output');
let formRadioOptions = document.getElementsByClassName('radio-btn');

let gameMenu = document.getElementById('game-menu');
let pictureNavBtn = document.getElementById('navbtn-picture');
let formNavBtn = document.getElementById('navbtn-form');


console.log(image, imgDiv, captionDiv);

//EVENT LISTENERS:
//  1. Load Event Listener - Adds <img> to HTML
document.addEventListener('load', addImage(image));

//  2. Click Event Listener - Changes image
imgDiv.addEventListener('click', console.log('Click Event fired'));

//  3. Dblclick Event Listener - Removes image, toggles reload button
imgDiv.addEventListener('dblclick', console.log('Dblclick Event fired')); //removeImage

//Click Event Listener - Adds <img> back to HTML (re-writes)
hiddenBtn.addEventListener('click', addImage(image));

//  4/5. Mouseover/Mouseleave Event Listener - Caption displays only when mouseover <img>d
imgDiv.addEventListener('mouseover', console.log('Mouseover Event fired')); //toggleDisplay(caoptionDiv)
imgDiv.addEventListener('mouseleave', console.log('Mouseleave Event fired')); //toggleDisplay(caoptionDiv)

//  6. Scroll Event Listener - Toggle form when scrolled (with timeout)
document.addEventListener('scroll', setTimeout(toggleDisplay(formDiv), 2000));

//  7. Input Event Listener - User's name is put in output message as typed
formNameInput.addEventListener('input', addInput);

//  8. Focusout Event Listener - Displays the output message when user focusout from input field
formNameInput.addEventListener('focusout', toggleDisplay(formOutputDiv));

//  9. Change Event Listener - Updates the background color as user makes change
formRadioOptions.addEventListener("change", changeBackgroundColor);

//  10. Submit Event Listener - Hides scroll message, hides form div, creates alert, displays new menu
form.addEventListener('submit', handleSubmit);

//Game Menu Click Events for Navigation
pictureNavBtn.addEventListener('click', toggleDisplay(imgDiv));
formNavBtn.addEventListener('click', toggleDisplay(formDiv));

//FUNCTIONS:
//Class toggle - show/hide
function toggleDisplay(element) {
    if (element.classList.contains('show')) {
        element.classList.replace('show', 'hide');
    } else if (element.classList.contains('hide')) {
        element.classList.replace('hide', 'show');
    }
}

//Creates <img> in div (load), changes image (click), reloads image (button)
function addImage(image) {
    let newImage = randomPicture(images);

    compareImage(image, newImage); //returns new image

    imgDiv.innerHTML = `<img src=${newImage.imgSrc} alt=${newImage.alt} id=${newImage.name}>`; //adds image to HTML
    captionDiv.textContent = newImage.caption; //adds caption text

    image = newImage; //rewrite image
    console.log(image);
    return image;
}

//Compares old and new images to ensure different picture each time
function compareImage(oldImage, newImage) {
    while (oldImage === newImage) { 
        newImage = randomPicture(images); //creates a new image until old and new are different
    }
    return newImage; 
}

//Removes the <img> from HTML; show reload button
function removeImage() {
    imgDiv.removeChild();

    toggleDisplay(hiddenBtn);
}

//Adds message to the #form-output div based on user input
function addInput(e) {
    let name = e.target.value;
    formOutputDiv.innerHTML = `<h1>Hello ${name}!</h1> <br> <h2>I hope you like my form!</h2>`
}

function changeBackgroundColor(e) {
    let color = e.target.value;
    let body = document.querySelector('body');

    body.style.backgroundcolor = color;
}

function handleSubmit(e) {
    e.preventDefault();

    //Hides scroll message
    let scroll = document.getElementsByClassName('scroll');
    toggleDisplay(scroll);

    //Creates an alert
    alert("Congratulations! You've now seen some awesome interactive JavaScript!");

    //Hides form div; Displays new menu to toggle between games
    toggleDisplay(formDiv);
    toggleDisplay(gameMenu);
}