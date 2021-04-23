const video = document.querySelector("video");

function play(){
  video.play();
  video.autoplay = true;
}

setTimeout(play, 2000);