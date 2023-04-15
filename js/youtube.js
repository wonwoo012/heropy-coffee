// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'teV57pQHvbY', // 최초 재생할 유튜브 영상 id
    playerVars: {
      autoplay: true, //자동 재생 유무
      loop: true, //반복 재생 유무
      playlist: 'teV57pQHvbY' // 반복 재생할 유튜브 영상 id 목록
    },
    events: {
      //영상이 준빋하었을 떄,
      onReady:function (events) {
        events.target.mute() // true Yes  // mute No 
      }
    }
  });
}