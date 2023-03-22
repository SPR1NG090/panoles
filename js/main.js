// panolens select container
const pan = document.querySelector('.pan');
const img = './img/img1_panorama.jpg';
const panorama = new PANOLENS.ImagePanorama(img);
const viewer = new PANOLENS.Viewer({
    container: pan,
})

//run viewer

viewer.add(panorama);

console.log(viewer)
