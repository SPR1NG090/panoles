const progressBar = document.getElementById('progress--bar');

progressBar.style.width = '0%';

setTimeout(() => {
    progressBar.style.width = '100%';
    progressBar.textContent = progressBar.style.width;
}, 3000);
