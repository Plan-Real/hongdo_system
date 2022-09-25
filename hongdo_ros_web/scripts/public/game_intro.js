

var voice5_audio = new Audio('audio/speech/5.mp3');
voice5_audio.muted = true;

setTimeout(()=>{
    voice5_audio.play();
    voice5_audio.muted=false;
},2500);

setTimeout(()=>{
    document.getElementById("tx1").className = "tx1";
    document.getElementById("tx2").className = "tx2";
    document.getElementById("tx3").className = "tx3";
},4000);

setTimeout(()=>{
    document.querySelector(".txt_box").className = "txt_box_";
    document.getElementById("sb1").className = "s_box1"
    document.getElementById("sb2").className = "s_box2";
},7500);

setTimeout(()=>{

},17500);


const sb1 = document.getElementById("sb1");
const sb2 = document.getElementById("sb2");

sb1.addEventListener("click", e=>{
    sb1.className = "s_box1_b";
    setTimeout(()=>{
        sb1.className = "s_box_f";
        location.replace("game.html");
    },300);
});

sb2.addEventListener("click",e=>{
    sb2.className = "s_box2_b";
    setTimeout(()=>{
        document.querySelector(".off_black").className = "black";
        document.querySelector(".off_wrn_box").className = "wrn_box";
        sb2.className = "s_box2_f";
    },300);
});

const yes = document.getElementById("yes");
const no = document.getElementById("no");

yes.addEventListener("click",e=>{
    yes.className = "yes_b";
    setTimeout(()=>{
        yes.className = "yes";
        location.replace("finish.html");
    },300);
});

no.addEventListener("click",e=>{
    no.className = "no_b";
    setTimeout(()=>{
        no.className = "no";
        document.querySelector(".wrn_box").className = "dis_wrn_box";
        document.querySelector(".black").className = "off_black";
    },300);
    setTimeout(() => {
        document.querySelector(".dis_wrn_box").className = "off_wrn_box";
    }, 800);
})


const btn_home = document.getElementById("btn_home");

var go_home = 0;

btn_home.addEventListener("click",e=>{
    go_home++;
    if(go_home >= 5) {
        location.replace("game_touch.html");
    }
});