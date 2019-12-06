const previous = document.getElementById('previous');
const play = document.querySelector('.play')
const pause = document.querySelector('.pause');
const next = document.getElementById('next');
const like = document.querySelector('.like');
const unlike = document.querySelector('.unlike');

// Song function constructor
let Song = function (artwork, artist, track, song) {
    this.artwork = artwork;
    this.artist = artist;
    this.track = track;
    this.song = song;
}

// Initiate new songs
let song1 = new Song('', 'Miska', 'Warm', new Audio('/songs/-.mp3'));
let song2 = new Song('', 'altitude', 'lake.serene', new Audio('/songs/lake.serene.mp3'));
let song3 = new Song('', 'CYGN', 'remember', new Audio('/songs/R E M E M B E R.mp3'));
let song4 = new Song('', 'hisohkah', 'school rooftop', new Audio ('/songs/school rooftop.mp3'));
let song5 = new Song('', 'Soulstruck', 'sundried', new Audio('/songs/sundried [w_ AiRLOCKE].mp3'));

/// Add songs to playlist array
var playlist = [song1, song2, song3, song4, song5];

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
    // song5.song.play();
}

const pauseTrack = () => {
    pause.classList.toggle('active');
    play.classList.toggle('active');
    console.log('track paused');
    // song5.song.pause();
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