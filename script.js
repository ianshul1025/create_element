var btn = document.querySelector('button');
var body = document.querySelector('body');

// Array of image sources with only two images
var imageSources = [
    'rkbg.png',
    'ohh.png',
    'cldbg.png'
];

btn.addEventListener('click', function() {
    // Generate random position and rotation
    var x = Math.random() * 90;
    var y = Math.random() * 90;
    var rot = Math.random() * 360;

    var img = document.createElement('img');
    
    // Randomly select an image source from the array
    var randomIndex = Math.floor(Math.random() * imageSources.length);
    img.setAttribute('src', imageSources[randomIndex]);
    
    img.setAttribute('class', 'image');
    img.style.left = x + '%';
    img.style.top = y + '%';
    img.style.transform = 'rotate(' + rot + 'deg)'; // Use transform for rotation
    body.appendChild(img);
});