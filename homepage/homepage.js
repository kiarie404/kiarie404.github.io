
// ************* background_video actions ********************** //
// initializing variables necessary for background_video display effects
var background_video_src = "../media/videos/sky.mp4";
var background_video = document.getElementById('background_video');

// inserting video...
background_video.src = background_video_src;
// making the video to always be in a loop
if (background_video.paused){ background_video.play();  }
