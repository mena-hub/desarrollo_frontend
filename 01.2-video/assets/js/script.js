const video = document.querySelector('video');

video.oncanplay = event => {
    console.log('Iniciar video.');
};

video.oncanplaythrough = event => {
    console.log('El video puede ser reproducido sin interrupción.');
};

video.onended = event => {
    console.log('Reproducción finalizada.');
};

video.ontimeupdate = event => {
    console.log(video.currentTime);
};