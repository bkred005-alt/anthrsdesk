document.getElementById('mail-icon').addEventListener('click', function() {
  document.getElementById('mail-popup').style.display = 'block';
});

function closeWindow(id) {
  document.getElementById(id).style.display = 'none';
}
const cdIcon = document.getElementById('cd-icon');
const music = document.getElementById('bg-music');
let isPlaying = false;

cdIcon.addEventListener('click', function() {
  if (isPlaying) {
    music.pause();
  } else {
    music.play();
  }
  isPlaying = !isPlaying;
});
