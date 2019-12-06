const previous = document.getElementById('previous');
const play = document.querySelector('.play')
const pause = document.querySelector('.pause');
const next = document.getElementById('next');
const like = document.querySelector('.like');
const unlike = document.querySelector('.unlike');

previous.addEventListener('click', function() {
    console.log('previous');
});

next.addEventListener('click', function() {
    console.log('next');
});

play.addEventListener('click', function() {
        playTrack();
});

pause.addEventListener('click', function() {
        pauseTrack();
})

like.addEventListener('click', function() {
    likeTrack();
});

unlike.addEventListener('click', function() {
    unlikeTrack();
});

const playTrack = () => {
    play.classList.toggle('active');
    pause.classList.toggle('active');
    console.log('track playing');
}

const pauseTrack = () => {
    pause.classList.toggle('active');
    play.classList.toggle('active');
    console.log('track paused');
}

const nextTrack = () => {

}

const previousTrack = () => {

}

const likeTrack = () => {
    like.classList.toggle('active');
    unlike.classList.toggle('active');
    console.log('song liked');
}

const unlikeTrack = () => {
    unlike.classList.toggle('active');
    like.classList.toggle('active');
    console.log('song unliked');
}