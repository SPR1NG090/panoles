const inventory = document.getElementById('inventory');
const inventoryButton = document.getElementById('inventory--button');

const laptop = document.getElementById('laptop');
const charger = document.getElementById('charger');
const notepad = document.getElementById('notebook');

const myInfoSpot1 = document.getElementById('infospot--1');
const myInfoSpot2 = document.getElementById('infospot--2');
const myInfoSpot3 = document.getElementById('infospot--3');
const myInfoSpot4 = document.getElementById('infospot--4');

const infoSpot1 = new PANOLENS.Infospot();
infoSpot1.position.set(0, 0, -2500);
infoSpot1.addHoverElement(myInfoSpot1, 150);

const personHelpInfospot = new PANOLENS.Infospot();
personHelpInfospot.position.set(-1350, 350, 2500);
personHelpInfospot.addHoverElement(myInfoSpot2, 150);

const laptopInfospot = new PANOLENS.Infospot();
laptopInfospot.position.set(-1350, -750, 200);
laptopInfospot.addHoverElement(myInfoSpot3, 150);
laptopInfospot.addEventListener('click', () => {
    laptop.classList.add('inventory__img--found');
});

const chargerInfospot = new PANOLENS.Infospot();
chargerInfospot.position.set(-2000, -750, -1500);
chargerInfospot.addHoverElement(myInfoSpot4, 150);
chargerInfospot.addEventListener('click', () => {
    charger.classList.add('inventory__img--found');
});

inventoryButton.addEventListener('click', () => {
    inventory.classList.toggle('inventory--open');
});

const vrbutton = document.getElementById('vr-button');

var place = document.getElementById('place');
const locationInfo = document.getElementById('informatie');
const information = [
    'Dit is buiten voor de hoofdingang',
    'Dit is waar je binnenkomt via de hoofdingang, links zit de kantine',
    'Hier zit het Café waar je wat drinken kan bestellen',
    'Dit is de grote hal van de nieuwbouw',
    'Dit is een studieruimte',
    'Hier zitten de lokalen van de opleiding informatica'
];
//panolens select container

//init externat constances
const pan = document.querySelector('.pan');
const img = './img/img8_panorama.jpg';
const img2 = './img/img7_panorama.jpg';
const img3 = './img/img6_panorama.jpg';
const img4 = './img/img3_panorama.jpg';
const img5 = './img/img5_panorama.jpg';
const img6 = './img/img4_panorama.jpg';

//init panorama + viewer
const panorama = new PANOLENS.ImagePanorama(img);
const panorama2 = new PANOLENS.ImagePanorama(img2);
const panorama3 = new PANOLENS.ImagePanorama(img3);
const panorama4 = new PANOLENS.ImagePanorama(img4);
const panorama5 = new PANOLENS.ImagePanorama(img5);
const panorama6 = new PANOLENS.ImagePanorama(img6);
const viewer = new PANOLENS.Viewer({
    container: pan
});

var vrtoggled = false;

// panorama2.setLinkingImage('./img/img1.png');

//toggle on/off vr mode
function vrtoggle() {
    if (vrtoggled === false) {
        viewer.enableEffect(PANOLENS.MODES.CARDBOARD);
        vrtoggled = true;
    } else {
        viewer.disableEffect();
        vrtoggled = false;
    }
}

vrbutton.addEventListener('click', vrtoggle);

const panoramas = [
    'panorama 1',
    'panorama 2',
    'panorama 3',
    'panorama 4',
    'panorama 5',
    'panorama 6'
];

panorama.addEventListener('click', () => {
    const date = new Date();
    console.log(`[${date.toLocaleString()}]: click event panorama 1`);
});

panorama2.addEventListener('click', () => {
    const date = new Date();
    console.log(`[${date.toLocaleString()}]: click event panorama 2`);
});

panorama3.addEventListener('click', () => {
    const date = new Date();
    console.log(`[${date.toLocaleString()}]: click event panorama 3`);
});

panorama4.addEventListener('click', () => {
    const date = new Date();
    console.log(`[${date.toLocaleString()}]: click event panorama 4`);
});

panorama5.addEventListener('click', () => {
    const date = new Date();
    console.log(`[${date.toLocaleString()}]: click event panorama 5`);
});

panorama6.addEventListener('click', () => {
    const date = new Date();
    console.log(`[${date.toLocaleString()}]: click even panorama 6`);
});

//linking between panorama's
panorama.link(panorama2, new THREE.Vector3(5000, 200, -400), 500);
panorama2.link(panorama, new THREE.Vector3(-5000, 100, 0), 500);
panorama2.link(panorama3, new THREE.Vector3(5000, 200, -2000), 500);
panorama2.link(panorama4, new THREE.Vector3(5000, 200, 3000), 500);
panorama3.link(panorama4, new THREE.Vector3(0, 200, 5000), 500);
panorama3.link(panorama2, new THREE.Vector3(-5000, 100, -1000), 500);
panorama4.link(panorama2, new THREE.Vector3(-5000, 100, -1000), 500);
panorama4.link(panorama3, new THREE.Vector3(-2000, 100, -2000), 500);
panorama4.link(panorama5, new THREE.Vector3(5000, 3000, 4000), 500);
panorama5.link(panorama6, new THREE.Vector3(-5000, -100, 0), 500);
panorama5.link(panorama4, new THREE.Vector3(-5000, -300, -4000), 500);
panorama6.link(panorama5, new THREE.Vector3(-5000, 100, -1000), 500);

panorama.add(infoSpot1);
panorama.add(personHelpInfospot);

panorama3.add(laptopInfospot);
panorama6.add(chargerInfospot);

//adding to objects
// viewer.add(panorama, panorama2, panorama3, panorama4, panorama5, panorama6);
viewer.add(panorama6);

console.log(viewer);

//navigation indexing
for (let index = 0; index < viewer.scene.children.length; index++) {
    switch (index) {
        case 0:
            viewer.scene.children[index].name = 'Buiten';
            break;
        case 1:
            viewer.scene.children[index].name = 'Hoofdingang';
            break;
        case 2:
            viewer.scene.children[index].name = 'Kantine';
            break;
        case 3:
            viewer.scene.children[index].name = 'Hal';
            break;
        case 4:
            viewer.scene.children[index].name = 'Studie ruimte';
            break;
        case 5:
            viewer.scene.children[index].name = 'Lokalen';
            break;
        default:
            break;
    }
}
this.setInterval(() => {
    for (let index = 0; index < viewer.scene.children.length; index++) {
        if (viewer.scene.children[index].active === true) {
            place.innerHTML = viewer.scene.children[index].name;
            locationInfo.innerHTML = information[index];
            // console.log (viewer.scene.children[index].name);
        }
    }
}, 1000);

const startButton = document.querySelector('#startButton');
const startScherm = document.querySelector('#startScherm');

startButton.addEventListener('click', () => {
    startScherm.classList.add('hidden');
});
