

// ***************** background_video actions  ******************** //
// initializing variables necessary for background_video display effects
var background_video_src = "../media/videos/sky.mp4";
var background_video = document.getElementById('background_video');

// inserting video... at the beggining
background_video.src = background_video_src;

//background_video should always be in a loop
//background_video should always be on autoplay
// looping and autoplay should be enforced when a page is loaded :
window.onload = function() {
    background_video.autoplay = true;
    background_video.loop = true;
    background_video.muted = true;
}
