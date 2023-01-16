const soundPrefName = "soundPref";
const modalClass = "has-modal";
var soundPref = localStorage.getItem(soundPrefName);

const $modalSoundPref = document.getElementById("modal-soundpref");
const $blackBg = document.getElementById("modal--black");
const $buttonToolbarSoundPref = Array.prototype.slice.call(
  document.querySelectorAll(".button-toolbar-soundpref"), 0);
const $buttonSoundPref = Array.prototype.slice.call(
  document.querySelectorAll(".button-modal-soundpref"), 0);
const $buttonPlay = document.getElementById("button-toolbar-play");
const $buttonMute = document.getElementById("button-toolbar-mute");

$buttonSoundPref.forEach(function ($button) {
  let arg = $button.getAttribute("data-arg");
  $button.addEventListener("click", function(e) {
    localStorage.setItem(soundPrefName, arg);
    toggleAudio(arg == "true");
    dismiss($modalSoundPref);
  });
});
$buttonToolbarSoundPref.forEach(function ($button) {
  let arg = $button.getAttribute("data-arg");
  $button.addEventListener("click", function(e) {
    toggleAudio(arg == "true");
  });
});


// @TODO aria stuff
function toggleAudio(enable) {
  if (enable) {
    $buttonPlay.style.display = "none";
    $buttonMute.style.display = "block";
    // enable audio
  } else {
    $buttonPlay.style.display = "block";
    $buttonMute.style.display = "none";
    // disable audio
  }
}

// Get rid of a modal @TODO fancy
function dismiss($modal) {
  if ($modal !== undefined) {
    $modal.remove();
  }
  $blackBg.style.display = "none";
  document.documentElement.classList.remove(modalClass);
}