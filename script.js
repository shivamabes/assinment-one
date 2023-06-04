var videoPlayer = document.getElementById('videoPlayer');
var videoFile = document.getElementById('videoFile');
var jumpTime = document.getElementById('jumpTime');

function playVideo() {
  videoPlayer.play();
}

function stopVideo() {
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
}

function forwardVideo() {
  videoPlayer.currentTime += 10;
}

function backwardVideo() {
  videoPlayer.currentTime -= 10;
}

function jumpToTime() {
  var time = parseInt(jumpTime.value);
  if (!isNaN(time)) {
    videoPlayer.currentTime = time;
    videoPlayer.play();
  }
}

videoFile.addEventListener('change', function(e) {
  var file = videoFile.files[0];
  var videoURL = URL.createObjectURL(file);
  videoPlayer.src = videoURL;
});