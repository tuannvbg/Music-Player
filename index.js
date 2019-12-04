const previous = document.getElementById('previous');
const play = document.querySelector('.play')
const pause = document.querySelector('.pause');
const next = document.getElementById('next');

previous.addEventListener('click', function() {
    console.log('previous button clicked');
});

next.addEventListener('click', function() {
    console.log('next button clicked');
});

play.addEventListener('click', function() {
        playTrack();
});

pause.addEventListener('click', function() {
        pauseTrack();
})

const playTrack = () => {
    play.classList.toggle('active');
    pause.classList.toggle('active');
    console.log('track playing');
}

const pauseTrack = () => {
    pause.classList.toggle('active');
    play.classList.toggle('active');
    console.log('track paused   ');
}

const nextTrack = () => {

}

const previousTrack = () => {

}

