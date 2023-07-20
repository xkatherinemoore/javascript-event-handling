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
let imgDiv = document.querySelector('#onLoad-Picture');
let captionDiv = document.querySelector('#caption-box')
let hiddenBtn = document.querySelector('#hidden-btn');

let formDiv = document.querySelector('#form-div');

console.log(image, imgDiv, captionDiv);

//EVENT LISTENERS:
//Load Event Listener - Adds <img> to HTML
document.addEventListener('load', addImage(image));

//Click Event Listener - Changes image
imgDiv.addEventListener('click', console.log('Click Event fired'));

//Dblclick Event Listener - Removes image, toggles reload button
imgDiv.addEventListener('dblclick', removeImage);

//Click Event Listener - Adds <img> back to HTML (re-writes)
hiddenBtn.addEventListener('click', addImage(image));

//Mouseover/Mouseleave Event Listener - Caption displays only when mouseover <img>d
imgDiv.addEventListener('mouseover', toggleDisplay(captionDiv));
imgDiv.addEventListener('mouseleave', toggleDisplay(captionDiv));

//Scroll Event Listener - Toggle form when scrolled (with timeout)
//document.addEventListener('scroll', setTimeout(toggleDisplay(formDiv), 2000));


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





