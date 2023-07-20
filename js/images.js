export const images = [
    {
        name: 'corgis',
        imgSrc: '..\images\stock-photo-portrait-two-adorable-welsh-corgi.jpg',
        alt: 'Two corgis on a couch.',
        caption: 'Nothing like two adorable corgis',
    },
    {
        name: 'cows',
        imgSrc: '..\images\stock-photo-cows.jpg',
        alt: 'Two cows in a field.',
        caption: 'Mooooooooooo!',
    },
    {
        name: 'top of the world',
        imgSrc: '..\images\stock-photo-man-on-top-of-the.jpg',
        alt: 'Man standing on peak of a mountain with arms out.',
        caption: 'I\'m on top of the world!!!',
    },
    {
        name: 'coffee',
        imgSrc: '..\images\stock-photo-cropped-view-man-sitting-cafe.jpg',
        alt: 'Pretty latte art.',
        caption: 'Nothing like a good cup of coffee...',
    },
    {
        name: 'beach',
        imgSrc: '..\images\stock-photo-summer-beverages-cooler-chaise-lounges.jpg',
        alt: 'Two empty chaise lounge chairs on the beach.',
        caption: 'I could really use a vacation.',
    },
    {
        name: 'concert',
        imgSrc: '..\images\stock-photo-yellow-concert-crowd.jpg',
        alt: 'Crowded concert venue.',
        caption: 'Concerts are fun, but man I hate crowds.',
    },
];

//Returns a random image object from the images array
export function randomPicture(images) {
    let index = Math.floor(Math.random()*images.length);
    return images[index];
}

