
//infospots
var infospot, infospot2;
const vrbutton = document.getElementsByClassName("vr-button");

infospot = new PANOLENS.Infospot();
infospot.position.set( 300, 450, -450);
infospot.addHoverText( 'Tim zijn prachtige voorhoofd' );

infospot2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
infospot2.position.set( -5000.00, -1825.25, 197.56 );
infospot2.addHoverElement( document.getElementById( 'infospot-1' ), 100 );

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
const viewer = new PANOLENS.Viewer({
    container: pan, outpus: 'console'
})

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
panorama.add( infospot2 );

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
 

