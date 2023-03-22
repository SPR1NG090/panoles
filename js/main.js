
//infospots
var infospot, infospot2;

infospot = new PANOLENS.Infospot();
infospot.position.set( 5000, 400, -400);
infospot.addHoverText( 'Tim zijn prachtige voorhoofd' );

infospot2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
infospot2.position.set( -5000.00, -1825.25, 197.56 );
infospot2.addHoverElement( document.getElementById( 'infospot-1' ), 100 );


// panolens select container
const pan = document.querySelector('.pan');
const img = './img/img2_panorama.jpeg';
const panorama = new PANOLENS.ImagePanorama(img);
const viewer = new PANOLENS.Viewer({
    container: pan,
})



//adding to objects
viewer.add(panorama);
panorama.add( infospot );
panorama.add( infospot2 );


console.log(viewer)
