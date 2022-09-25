var voice = new Audio("audio/speech/3.mp3")

voice.play();

setTimeout(()=>{
    document.querySelector(".off_duru").className = "duru";
},1000);

setTimeout(()=>{
    document.querySelector(".off_announce_1").className = "announce_1";
},4000);

setTimeout(()=>{
    document.querySelector(".off_select_btn_box").className = "select_btn_box";
},2000);

const yes = document.getElementById("YES");
const no = document.getElementById("NO");

yes.addEventListener("click", e=>{
    yes.className = "yes_btn_click";
    setTimeout(()=>{
        location.replace("loading.html");
    },500);
    
});

no.addEventListener("click", e=>{
    location.replace("upload.html");
});



const btn_home = document.getElementById("btn_home");

var go_home = 0;

btn_home.addEventListener("click",e=>{
    go_home++;
    if(go_home >= 5) {
        location.replace("intro.html");
    }
});