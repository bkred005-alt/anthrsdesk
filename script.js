document.getElementById('mail-icon').addEventListener('click', function() {
  document.getElementById('mail-popup').style.display = 'block';
});

function closeWindow(id) {
  document.getElementById(id).style.display = 'none';
}
