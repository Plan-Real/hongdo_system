let _video = document.getElementById("index_video");
var intro_voice = new Audio("audio/speech/1.mp3")
_video.load();
_video.play();
_video.playbackRate = 1;


setTimeout(()=>{
    intro_voice.play();
},4800);

setTimeout(()=>{
    _video.playbackRate = 0.65;
    _video.pause();
},5100);

setTimeout(()=>{
    _video.play();
},6000);

setTimeout(()=>{
    document.querySelector(".off_select_btn_box").className = "select_btn_box";
},21800);

// setTimeout(()=>{
// },8000);

const _yes = document.getElementById("YES");

const _no = document.getElementById("NO");

_yes.addEventListener("click", e=>{
    _yes.className = "yes_btn_click";

    setTimeout(()=>{
        location.replace("upload.html")
    },1000);
});

_no.addEventListener("click",e=>{
    location.replace("intro.html");
});

const btn_home = document.getElementById("btn_home");

var go_home = 0;

btn_home.addEventListener("click",e=>{
    go_home++;
    if(go_home >= 5) {
        location.replace("intro.html");
    }
});

