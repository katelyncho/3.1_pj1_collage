var audio_hi = new Audio("../audio/hi.mp3");
var audio_want = new Audio("../audio/want.mp3");
var audio_comfort = new Audio("../audio/comfort.mp3");
var audio_hunt = new Audio("../audio/hunt.mp3");
var audio_warn = new Audio("../audio/warn.mp3");
var audio_mad = new Audio("../audio/mad.mp3");
function myAudioFunction(letter) {
  if (letter == "a") {
    audio_hi.play();
  } else if (letter == "b") {
    audio_want.play();
  } else if (letter == "c") {
    audio_comfort.play();
  } else if (letter == "d") {
    audio_hunt.play();
  } else if (letter == "e") {
    audio_warn.play();
  } else if (letter == "f") {
    audio_mad.play();
  }
}

function changeImage() {
  document.getElementById("item1").src = "../img/test_2.jpg";
}
function backImage() {
  document.getElementById("item1").src = "../img/test_1.png";
}
