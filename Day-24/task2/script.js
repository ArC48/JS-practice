const array = [
    'https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg',
    'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg',
    'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
    'https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTc0MjIzOTE4Njc1MDExNDUy/famous-pirate-flags.png',
    'https://thedmonline.com/wp-content/uploads/2020/08/flag.jpg'
];

const image = document.querySelector('img');
const button = document.querySelector('button');
const p = document.querySelector('p')

function randomImages(arr) {
    let random = Math.floor(Math.random() * arr.length);
    image.setAttribute('src', arr[random]);
    p.innerHTML = `Photo width: ${image.width} - Photo height: ${image.height}`;
}

randomImages(array);

button.addEventListener('click', () => randomImages(array));
