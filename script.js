const lightbox = document.querySelector('#lightbox');
const viewer = document.querySelector('#viewer');
const gallery = document.querySelector('#gallery');

function show(image) {
    lightbox.classList.remove('hidden');
    lightbox.style.zIndex = 1;
    gallery.classList.add('blur');

    viewer.src = image.src;
    viewer.height = image.height;
    viewer.width = image.width;
}

function exit() {
    lightbox.classList.add('hidden');
    lightbox.style.zIndex = -1;
    gallery.classList.remove('blur');

    viewer.src = undefined;
    viewer.height = undefined;
    viewer.width = undefined;
}