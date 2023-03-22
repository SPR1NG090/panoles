
//infospots
var infospot, infospot2;
const vrbutton = document.getElementsByClassName("vr-button");

infospot = new PANOLENS.Infospot();
infospot.position.set( 5000, 400, -400);
infospot.addHoverText( 'Tim zijn prachtige voorhoofd' );

infospot2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
infospot2.position.set( -5000.00, -1825.25, 197.56 );
infospot2.addHoverElement( document.getElementById( 'infospot-1' ), 100 );


//panolens select container

//init externat constances
const pan = document.querySelector('.pan');
const img = './img/img2_panorama.jpeg';
const img2 = './img/img1_panorama.jpg';

//init panorama + viewer
const panorama = new PANOLENS.ImagePanorama(img);
const panorama2 = new PANOLENS.ImagePanorama(img2);
const viewer = new PANOLENS.Viewer({
    container: pan,
})

//linking between panorama's
panorama.link( panorama2, new THREE.Vector3( 807.50, 604.88, 5000.00 ), 500, "./img/img1.png");
panorama2.link( panorama, new THREE.Vector3( -807.50, 604.88, -5000.00 ), 300, );

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
viewer.add(panorama, panorama2);
panorama.add( infospot );
panorama.add( infospot2 );



console.log(viewer)
