const progressBar = document.getElementById('progress--bar');
const achievementsEl = document.getElementById('achievements');
const achievementButton = document.getElementById('achievement--button');

progressBar.style.width = '0%';

setTimeout(() => {
    progressBar.style.width = '100%';
    progressBar.textContent = progressBar.style.width;
}, 3000);

achievementButton.addEventListener('click', () => {
    achievementsEl.classList.toggle('achievements--open');
});
