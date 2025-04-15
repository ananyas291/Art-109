const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const song = document.getElementById('song');

playButton.addEventListener('click', () => {
  song.play();
});

pauseButton.addEventListener('click', () => {
  song.pause();
});
