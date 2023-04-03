// random volgorde bepalen
localStorage.clear();
var stimuli = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1];
if (localStorage.getItem('volgorde')=== null){
    stimuli.sort (function (a, b) { return 0.5 - Math.random ( ); } );
    console.log(stimuli);
    localStorage.setItem('volgorde', JSON.stringify(stimuli));
    console.log(localStorage.getItem('volgorde'));
    localStorage.setItem('runNummer', 0);
}
else {
    console.log(localStorage.getItem('volgorde'));
    let run = localStorage.getItem('runNummer');
    run++;
    localStorage.setItem('runNummer', run);
}

var volgorde = JSON.parse(localStorage.getItem('volgorde'));
var runNummer = parseInt(localStorage.getItem('runNummer'));
console.log(runNummer)
console.log(volgorde[runNummer]);

//infospots
var infospot, infospot2;
const vrbutton = document.getElementsByClassName("vr-button");

infospot = new PANOLENS.Infospot();
infospot.position.set( 400, 100, -3000);
infospot.addHoverElement( document.getElementById( 'infospot-1' ), 100 );

infospot2 = new PANOLENS.Infospot();
infospot2.position.set( 400, 100, -3000);

var place = document.getElementById('place');
const information = ["dit is buiten voor de hoofdingang", "dit is waar je binnenkomt via de hoofdingang, Links zit de kantine", "Hier zit het Café waar je wat drinken kan bestellen", "Dit is de grote hal van de nieuwbouw", "dit is een studieruimte", "hier zitten de lokalen van de opleiding informatica"]
const locationInfo = document.getElementById("informatie");
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
var viewer;
if (volgorde[runNummer] === 0){
    viewer = new PANOLENS.Viewer({
        container: pan, output: 'console', enableReticle: true,
    })
    console.log('met reticle');
}
else {
    viewer = new PANOLENS.Viewer({
        container: pan, output: 'console',
    })
    console.log('zonder reticle');
}



//linking between panorama's
panorama.link( panorama2, new THREE.Vector3( 5000, 200, -400 ), 900,);
panorama2.link( panorama, new THREE.Vector3( -5000, 100, 0 ), 900, );
panorama2.link( panorama3, new THREE.Vector3( 5000, 200, -2000 ), 900,);
panorama2.link( panorama4, new THREE.Vector3( 5000, 200, 3000 ), 900,);
panorama3.link( panorama4, new THREE.Vector3( 0, 200, 5000 ), 900,);
panorama3.link( panorama2, new THREE.Vector3( -5000, 100, -1000 ), 600,);
panorama4.link( panorama2, new THREE.Vector3( -5000, 100, -1000 ), 600,);
panorama4.link( panorama3, new THREE.Vector3( -2000, 100, -2000 ), 300,);
panorama4.link( panorama5, new THREE.Vector3( 5000, 3000, 4000 ), 900,);
panorama5.link( panorama6, new THREE.Vector3( -5000, -100, 0 ), 900,);
panorama5.link( panorama4, new THREE.Vector3( -5000, -300, -4000 ), 900,);
panorama6.link( panorama5, new THREE.Vector3( -5000, 100, -1000 ), 900,);
var vrtoggled = false;


//toggle on/off vr mode
function vrtoggle(){
    
    if(vrtoggled === false){
        viewer.enableEffect(PANOLENS.MODES.CARDBOARD)
        vrtoggled = true;
    } else{
        viewer.disableEffect()
        vrtoggled = false;
    }
}

//adding to objects
viewer.add(panorama, panorama2, panorama3, panorama4, panorama5, panorama6);
panorama.add( infospot );
panorama6.add( infospot2 );

for (let index = 0; index < viewer.scene.children.length; index++) {
    switch (index) {
        case 0:
            viewer.scene.children[index].name = "Buiten";
            break;
        case 1:
            viewer.scene.children[index].name = "Hoofdingang";
            break;
        case 2:
            viewer.scene.children[index].name = "Café";
            break;
        case 3:
            viewer.scene.children[index].name = "Hal";
            break;
        case 4:
            viewer.scene.children[index].name = "Studie ruimte";
            break;
        case 5:
            viewer.scene.children[index].name = "Lokalen";
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
const stopScherm = document.querySelector('#stopScherm');
var eindTijd = document.querySelector('#eindTijd');

const stopwatch = { elapsedTime: 0 };
var milliseconds = 0;
var seconds = 0;
var minutes = 0;
var hour = 0;
let stop = false;

startButton.addEventListener('click', () => {
    startStopwatch();
    startScherm.classList.add("hidden");
  })

function startStopwatch() {
    if (stop == true) {
      return;
    }
    else {
      //reset start time
      stopwatch.startTime = Date.now();
      // run `setInterval()` and save the ID
      stopwatch.intervalId = setInterval(() => {
        //calculate elapsed time
        const elapsedTime = Date.now() - stopwatch.startTime + stopwatch.elapsedTime
        //calculate different time measurements based on elapsed time
        milliseconds = parseInt((elapsedTime%1000)/10)
        seconds = parseInt((elapsedTime/1000)%60)
        minutes = parseInt((elapsedTime/(1000*60))%60)
        hour = parseInt((elapsedTime/(1000*60*60))%24);
        }, 100);
      }
  }

function stopStopwatch() {
    console.log(hour, minutes, seconds, milliseconds);
    for (let index = 0; index < viewer.scene.children.length; index++) {
        if (viewer.scene.children[index].active === true) {
            console.log ("Locatie: " + viewer.scene.children[index].name);
        }
    }
}

infospot2.addEventListener('click', () => {
    stopScherm.classList.remove("hidden");
    console.log(hour, minutes, seconds, milliseconds);
    eindTijd.innerHTML = hour + ":" + minutes + ":" + seconds + ":" + milliseconds;
    
}
)
panorama.addEventListener('click', () => {
    
    stopStopwatch();
}
)

panorama2.addEventListener('click', () => {
    
    stopStopwatch();
}
)

panorama3.addEventListener('click', () => {
    
    stopStopwatch();
}
)

panorama4.addEventListener('click', () => {
    
    stopStopwatch();
}
)

panorama5.addEventListener('click', () => {
    
    stopStopwatch();
}
)

panorama6.addEventListener('click', () => {
    
    stopStopwatch();
}
)