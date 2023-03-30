const achievementOne = document.getElementById('achievement--0');
const achievementTwo = document.getElementById('achievement--1');
const unlockedAchievement = document.getElementById('unlocked--achievement');
const unlockedAchievementTitle = document.getElementById(
    'unlocked--achievement--title'
);
const achievementsText = document.getElementById('achievements--text');
const achievementsEl = document.getElementById('achievements');
const achievementButton = document.getElementById('achievement--button');
const achievementsList = document.getElementById('achievements--list');

const myInfoSpot1 = document.getElementById('infospot--1');

const infoSpot1 = new PANOLENS.Infospot();
infoSpot1.position.set(0, 0, -2500);
infoSpot1.addHoverElement(myInfoSpot1, 150);

const vrbutton = document.getElementById('vr-button');

var place = document.getElementById('place');
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

//linking between panorama's
panorama.link(panorama2, new THREE.Vector3(5000, 200, -400), 900);
panorama2.link(panorama, new THREE.Vector3(-5000, 100, 0), 900);
panorama2.link(panorama3, new THREE.Vector3(5000, 200, -2000), 900);
panorama2.link(panorama4, new THREE.Vector3(5000, 200, 3000), 900);
panorama3.link(panorama4, new THREE.Vector3(0, 200, 5000), 900);
panorama3.link(panorama2, new THREE.Vector3(-5000, 100, -1000), 600);
panorama4.link(panorama2, new THREE.Vector3(-5000, 100, -1000), 600);
panorama4.link(panorama3, new THREE.Vector3(-2000, 100, -2000), 300);
panorama4.link(panorama5, new THREE.Vector3(5000, 3000, 4000), 900);
panorama5.link(panorama6, new THREE.Vector3(-5000, -100, 0), 900);
panorama5.link(panorama4, new THREE.Vector3(-5000, -300, -4000), 900);
panorama6.link(panorama5, new THREE.Vector3(-5000, 100, -1000), 900);
var vrtoggled = false;

panorama2.setLinkingImage('./img/img1.png');

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

// Achievements --> idea to create an api for the achievements and rest of the data?
const myAchievementOne = {
    title: 'Prestatie 1',
    description: 'Voltooi de experience.',
    unlocked: false
};

const myAchievementTwo = {
    title: 'Prestatie 2',
    description: 'Bezoek de kantine.',
    unlocked: false
};

const myAchievementThree = {
    title: 'Prestatie 3',
    description: 'Lees het stukje intro tekst.',
    unlocked: false
};

const myAchievements = [myAchievementOne, myAchievementTwo, myAchievementThree];

const renderAchievementsList = () => {
    myAchievements.forEach((achievement, i) => {
        const achievementsListElement = document.createElement('li');
        const achievementsListElementTitle = document.createElement('h3');
        const achievementsListElementDescription = document.createElement('p');

        achievementsListElement.classList.add('achievements__achievement');
        achievementsListElement.id = `achievement--${i}`;

        achievementsListElementTitle.classList.add(
            'achievements__achievement__title'
        );
        achievementsListElementTitle.textContent = achievement.title;
        achievementsListElementDescription.textContent =
            achievement.description;

        achievementsListElementDescription.classList.add(
            'achievements__achievement__text'
        );

        achievementsList.appendChild(achievementsListElement);
        achievementsListElement.appendChild(achievementsListElementTitle);
        achievementsListElement.appendChild(achievementsListElementDescription);
    });
};

renderAchievementsList();

const allAchievementsUnlocked = () => {
    myAchievements.forEach((achievement) => {
        if (achievement.unlocked == true) {
            achievementsText.textContent =
                'Gefeliciteerd! Je hebt alle prestaties ontgrendeld!';
        }
    });
};

achievementButton.addEventListener('click', () => {
    achievementsEl.classList.toggle('achievements--open');
    allAchievementsUnlocked();
});

// Panoramas
const panoramas = [
    'panorama 1',
    'panorama 2',
    'panorama 3',
    'panorama 4',
    'panorama 5',
    'panorama 6'
];

const visitedPanoramas = [];

panorama.addEventListener('click', () => {
    const date = new Date();
    console.log(`[${date.toLocaleString()}]: click event panorama 1`);
    visitedPanoramas.push('panorama 1');
});

panorama2.addEventListener('click', () => {
    const date = new Date();
    console.log(`[${date.toLocaleString()}]: click event panorama 2`);
    visitedPanoramas.push('panorama 2');
});

panorama3.addEventListener('click', () => {
    const date = new Date();
    console.log(`[${date.toLocaleString()}]: click event panorama 3`);

    unlockedAchievementTitle.textContent = 'Prestatie 2 ontgrendeld!';
    unlockedAchievement.classList.add('achievement--unlocked');
    setTimeout(() => {
        unlockedAchievement.classList.remove('achievement--unlocked');
    }, 3000);

    achievementTwo.classList.add('achievements__achievement--unlocked');
    visitedPanoramas.push('panorama 3');
});

panorama4.addEventListener('click', () => {
    const date = new Date();
    console.log(`[${date.toLocaleString()}]: click event panorama 4`);
    visitedPanoramas.push('panorama 4');
});

panorama5.addEventListener('click', () => {
    const date = new Date();
    console.log(`[${date.toLocaleString()}]: click event panorama 5`);
    visitedPanoramas.push('panorama 5');
});

panorama6.addEventListener('click', () => {
    const date = new Date();
    console.log(`[${date.toLocaleString()}]: click even panorama 6`);
    visitedPanoramas.push('panorama 6');

    visitedPanoramas.every((visitedPanorama) => {
        if (panoramas.indexOf(visitedPanorama, -1)) {
            unlockedAchievementTitle.textContent = 'Prestatie 1 ontgrendeld!';
            unlockedAchievement.classList.add('achievement--unlocked');
            setTimeout(() => {
                unlockedAchievement.classList.remove('achievement--unlocked');
            }, 3000);

            achievementOne.classList.add('achievements__achievement--unlocked');
        }
    });
});

panorama.add(infoSpot1);

//adding to objects
viewer.add(panorama, panorama2, panorama3, panorama4, panorama5, panorama6);

console.log(viewer);
