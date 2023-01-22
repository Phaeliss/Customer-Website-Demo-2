audio = new Audio();
audio.src = "ses.mp3";
audio.loop = true;
function play() {
  if(document.getElementById("song").className === "pause") {
    audio.play();
    document.getElementById("song").className="play";
    document.getElementById("song").style = "color: #697dce;";
  } else {
    audio.pause();
    document.getElementById("song").className = "pause";
    document.getElementById("song").style = "color: #ffffff;";
  }
}

tippy('#song', {
  content: "Müzik aç/kapat!",
});