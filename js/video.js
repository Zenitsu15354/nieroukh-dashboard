let video = document.getElementById("video");
let play = document.getElementById("play");
let playImg = document.querySelector(".playImg");

play.addEventListener("click", () => {
  if(video.classList.contains('play-video')){
    video.pause();
    playImg.style.display='flex';
    video.classList.remove('play-video');
  }else{
    playImg.style.display='none';
    video.play();
    video.addEventListener('ended',()=>{
      playImg.style.display='flex';
    })
    video.classList.add('play-video');
  }
});
