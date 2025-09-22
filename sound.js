var audio_call = new Audio("audio/sample_meow.ogg");
var audio_comfort = new Audio("audio/sample_meow2.wav");
// var audio_happy = new Audio("b.mp3");
// var audio_hunt = new Audio("b.mp3");
// var audio_warn = new Audio("b.mp3");
// var audio_mad = new Audio("b.mp3");
function myAudioFunction(letter) {
  if (letter == "a") {
    audio_call.play();
  } else if (letter == "b") {
    audio_comfort.play();
  }
}

function changeImage() {
  document.getElementById("item1").src = "img/test_2.jpg";
}
function backImage() {
  document.getElementById("item1").src = "img/test_1.png";
}
