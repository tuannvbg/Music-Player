const previous = document.getElementById('previous');
const playPause = document.getElementById('playpause');
const next = document.getElementById('next');

previous.addEventListener('click', function() {
    console.log('previous button clicked');
});

next.addEventListener('click', function() {
    console.log('next button clicked');
});

playPause.addEventListener('click', function() {
    if (playPause.classList.contains('active')) {
        playPause.classList.toggle('active')
        console.log('here');
    }
});

const play = () => {

}

const pause = () => {

}

const nextTrack = () => {

}

const previousTrack = () => {

}

