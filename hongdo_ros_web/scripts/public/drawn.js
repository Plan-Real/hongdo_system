var voice = new Audio("audio/speech/4.mp3")
voice.currentTime = 3;

voice.play();

const btn_home = document.getElementById("btn_home");

var go_home = 0;

btn_home.addEventListener("click",e=>{
    go_home++;
    if(go_home >= 5) {
        location.replace("intro.html");
    }
});

const btn_next = document.getElementById("next_btn");

btn_next.addEventListener("click", e=>{
    document.querySelector(".off_end").className = "end";
});

const go_back = document.querySelector(".txt_end2");

go_back.addEventListener("click", e=>{
    go_back.className = "txt_end2_b";
    document.querySelector(".img2").className = "img2_b";
    setTimeout(()=>{
        location.replace("intro.html");
    },300);
});