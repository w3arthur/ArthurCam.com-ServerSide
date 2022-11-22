
import {tags} from '../config/htmlElements.js';
import {videoSrc} from '../config/hlsVideoStream.js';
//use youtube instead
//global variables: video 
let config = {
    "debug": false,
    "enableWorker": true,
    "lowLatencyMode": false,
    "startPosition": false,
    "backBufferLength": 0
};

    //to fix
export const hlsStart = () => {
    if (tags.video.canPlayType("application/vnd.apple.mpegurl")) {
        tags.video.src = videoSrc;
    } else if (hls.isSupported()) {
        var hls = new hls(config);
        hls.loadSource(videoSrc);
        hls.attachMedia(tags.video);
        //video.play(); //not work on chrome
    }
    video.currentTime +=  10000;
    setInterval(() => { //to fix
        if(video.paused)  {
        video.currentTime +=  1; 
        }//1.5
        //video.play();
    }, 500);
    setInterval(() => { //to fix
        hls.startLoad(0);
    }, 180000);
};
