const previous = document.getElementById("previous");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const next = document.getElementById("next");
const like = document.querySelector(".like");
const unlike = document.querySelector(".unlike");

var artistName = document.getElementById('artist');
let songTitle = document.getElementById('track');
let artwork = document.getElementById('artwork').src;

let favorites = []; // Array for favorites
let songIndex = 0; // index to keep track of current song position in playlist

// Song function constructor
let Song = function(artwork, artist, track, song) {
  this.artwork = artwork;
  this.artist = artist;
  this.track = track;
  this.song = song;
};

// Initiate new songs
let song1 = new Song("", "Miska", "Warm", new Audio("/songs/-.mp3"));
let song2 = new Song("", "altitude", "lake.serene", new Audio("/songs/lake.serene.mp3"));
let song3 = new Song("","CYGN","remember", new Audio("/songs/R E M E M B E R.mp3"));
let song4 = new Song( "", "hisohkah", "school rooftop", new Audio("/songs/school rooftop.mp3"));
let song5 = new Song( "", "Soulstruck", "sundried", new Audio("/songs/sundried [w_ AiRLOCKE].mp3"));

/// Add songs to playlist array
var playlist = [song1, song2, song3, song4, song5];

previous.addEventListener("click", function() {
  console.log("previous");
  previousTrack();
});

next.addEventListener("click", function() {
  console.log("next");
  nextTrack();
});

play.addEventListener("click", function() {
  playTrack();
});

pause.addEventListener("click", function() {
  pauseTrack();
});

like.addEventListener("click", function() {
  likeTrack();
});

unlike.addEventListener("click", function() {
  unlikeTrack();
});

const playTrack = () => {
  play.classList.toggle("active");
  pause.classList.toggle("active");
  console.log("song playing");
  playlist[songIndex].song.play();
  updateSongInfo(songIndex);
};

const pauseTrack = () => {
  pause.classList.toggle("active");
  play.classList.toggle("active");
  console.log("track paused");
  playlist[songIndex].song.pause();
};

const nextTrack = () => {
  // display next track
  if (songIndex < playlist.length - 1) {
    // Stop and restart current song before moving foward to the next
    playlist[songIndex].song.pause();
    restartAudio(playlist[songIndex].song);
    //  if the index is less than the the length of the array, increase the index
    if (songIndex <= playlist.length - 1) {
      songIndex++;
      updateSongInfo(songIndex);
      // play the song at the current index only if the play button has been pressed
      if (pause.classList.contains("active")) {
        playlist[songIndex].song.play();
      }
    }
    // if the index has reached the end of the array list, Stop and restart current song before moving foward to the next
  } else if (songIndex >= playlist.length - 1) {
    playlist[songIndex].song.pause();
    restartAudio(playlist[songIndex].song);
    // reset the index back to the beginning of the array
    // play the song at the current index only if the play button has been pressed
    songIndex = 0;
    updateSongInfo(songIndex);
    if (pause.classList.contains("active")) {
    updateSongInfo(songIndex);
      playlist[songIndex].song.play();
    }
  }
};

const previousTrack = () => {
  // display previous track
  if (songIndex >= 0) {
    // Stop and restart current song before moving foward to the next
    updateSongInfo(songIndex);
    playlist[songIndex].song.pause();
    restartAudio(playlist[songIndex].song);
    songIndex--;
    //  if the index is greater than 0, the index may decrease
    if (songIndex >= 0) {
      if (pause.classList.contains("active")) playlist[songIndex].song.play();
      updateSongInfo(songIndex);
      // if the index is less than 0, reset the current song, and set the index equal to the end of the array
    } else if (songIndex < 0) {
      playlist[songIndex + 1].song.pause();
      restartAudio(playlist[songIndex + 1].song);
      songIndex = playlist.length - 1;
      updateSongInfo(songIndex);
      if (pause.classList.contains("active")) {
        playlist[songIndex].song.play();
        updateSongInfo(songIndex);
      }
    }
  }
};

const likeTrack = () => {
  like.classList.toggle("active");
  unlike.classList.toggle("active");
  console.log("song liked");
};

const unlikeTrack = () => {
  unlike.classList.toggle("active");
  like.classList.toggle("active");
  console.log("song unliked");
};

const restartAudio = audio => {
  audio.currentTime = 0;
};

const updateSongInfo = (songIndex) => {
    artistName.innerHTML = playlist[songIndex].artist;
    songTitle.innerHTML = playlist[songIndex].track;
}