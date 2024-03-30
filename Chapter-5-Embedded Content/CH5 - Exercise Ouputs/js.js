window.onload = function() {
  var video = document.getElementById("videoPlayer");
  video.play(); // Requires the video to play and when finished it loops
};

function togglePlay() {
  var video = document.getElementById("videoPlayer");
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
