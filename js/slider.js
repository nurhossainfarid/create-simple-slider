const images = [
    'images/slider.jpg',
    'images/slider2.jpg',
    'images/slider3.jpg',
    'images/slider4.jpg',
    'images/slider5.jpg',
    'images/slider6.jpg',
    'images/slider7.jpg',
];
let imgIndex = 0;
const imgElement = document.getElementById('slider-img');
setInterval(() => {
    if (imgIndex>= images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl)
    imgIndex++;
}, 1000)


const createSlider = () => {
    
};
createSlider();