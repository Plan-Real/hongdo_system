// background
var gamestart_audio = new Audio('audio/effect/game_start.mp3');
gamestart_audio.volume = 0.5;
gamestart_audio.muted = true;

var finding_audio = new Audio('audio/effect/finding.mp3');
finding_audio.volume = 0.5;
finding_audio.loop = true;
finding_audio.muted = true;

var catching_audio = new Audio('audio/effect/catching.mp3');
catching_audio.volume = 0.5;
catching_audio.loop = true;

var teacher_audio = new Audio("audio/effect/teacher.mp3");
teacher_audio.volume = 0.5;
teacher_audio.loop = true;

var battle1_audio = new Audio('audio/effect/battle1.mp3');
battle1_audio.volume = 0.5;

var seabattle_audio = new Audio('audio/effect/sea_battle.mp3');
seabattle_audio.volume = 0.5;
seabattle_audio.muted = true;

var battle3_audio = new Audio('audio/effect/battle3.mp3');
battle3_audio.volume=0.5;
battle3_audio.muted=true;

var gameclear_audio = new Audio('audio/effect/game_clear.mp3');
gameclear_audio.volume = 0.5;
gameclear_audio.muted = true;

// voice

var voice6_audio = new Audio('audio/speech/6.mp3');
var voice7_audio = new Audio('audio/speech/7.mp3');
var voice8_audio = new Audio('audio/speech/8.mp3');
var voice9_audio = new Audio('audio/speech/9.mp3');
var voice10_audio = new Audio('audio/speech/10.mp3');
var voice11_audio = new Audio('audio/speech/11.mp3');
var voice12_audio = new Audio('audio/speech/12.mp3');
var voice13_audio = new Audio('audio/speech/13.mp3');
var voice14_audio = new Audio('audio/speech/14.mp3');
var voice15_audio = new Audio('audio/speech/15.mp3');
var voice16_audio = new Audio('audio/speech/16.mp3');


voice6_audio.muted = true;
voice7_audio.muted = true;
voice8_audio.muted = true;
voice9_audio.muted = true;
voice10_audio.muted = true;
voice11_audio.muted = true;
voice12_audio.muted = true;
voice13_audio.muted = true;
voice14_audio.muted = true;
voice15_audio.muted = true;
voice16_audio.muted = true;

//skill

var brush_audio = new Audio('audio/effect/brush.mp3');
brush_audio.loop = true;

var meteo1 = new Audio('audio/effect/air_meteo.mp3');
var meteo2 = new Audio('audio/effect/exclusion.mp3');

var th1 = new Audio('audio/effect/th1_audio.mp3');
th1.volume=0.5;
var th2 = new Audio('audio/effect/th2_audio.mp3');
th2.volume=0.5;
var th3 = new Audio('audio/effect/th3_audio.mp3');
th3.volume=0.5;

var dr1 = new Audio('audio/effect/dr1.mp3');
dr1.volume=0.5;
var dr2 = new Audio('audio/effect/dr2.mp3');
dr2.volume=0.7;
var dr3 = new Audio('audio/effect/dr3.mp3');
dr3.volume=0.7;
var dr4 = new Audio('audio/effect/dr4.mp3');
dr4.volume=0.7;
var dr5= new Audio('audio/effect/dr5.mp3');
dr5.volume=0.7;

var sad= new Audio('audio/effect/sad.mp3');
sad.volume=0.2;

voice6_audio.play();
voice6_audio.muted = false;
setTimeout(()=>{
    document.querySelector(".container").className = "off_container";
},1500);


const article1 = document.querySelector(".article1");
const article2 = document.querySelector(".article2");
const article3 = document.querySelector(".article3");
const article4 = document.querySelector(".article4");
const article5 = document.querySelector(".article5");
const article6 = document.querySelector(".article6");
const article7 = document.querySelector(".article7");
const article8 = document.querySelector(".article8");
const article9 = document.querySelector(".article9");
const article10 = document.querySelector(".article10");
const article11 = document.querySelector(".article11");
const article12 = document.querySelector(".article12");
const article13 = document.querySelector(".article13");
const article14 = document.querySelector(".article14");
const article15 = document.querySelector(".article15");
const article16 = document.querySelector(".article16");
const article17 = document.querySelector(".article17");
const article18 = document.querySelector(".article18");
const article19 = document.querySelector(".article19");
const article20 = document.querySelector(".article20");
const article21 = document.querySelector(".article21");
const article22 = document.querySelector(".article22");
const article23 = document.querySelector(".article23");
const article24 = document.querySelector(".article24");
const article25 = document.querySelector(".article25");
const article26 = document.querySelector(".article26");
const article27 = document.querySelector(".article27");
const article28 = document.querySelector(".article28");
const article29 = document.querySelector(".article29");
const article30 = document.querySelector(".article30");

var i = 1;
article1.addEventListener("click", e=>{
    if(document.querySelector(".select1") == article1)
        i--;
    else if (document.querySelector(".select2") == article1)
        i--;
    else if (document.querySelector(".select3") == article1)
        i--;
    else if (document.querySelector(".select4") == article1)
        i--;
    if(i<5) {
        article1.className = "select"+i.toString();
        i++;
    }
});
article2.addEventListener("click", e=>{
    if(document.querySelector(".select1") == article2)
        i--;
    else if (document.querySelector(".select2") == article2)
        i--;
    else if (document.querySelector(".select3") == article2)
        i--;
    else if (document.querySelector(".select4") == article2)
        i--;

    if(i<5) {
        article2.className = "select"+i.toString();
        i++;
    }
});
article3.addEventListener("click", e=>{
    if(document.querySelector(".select1") == article3)
        i--;
    else if (document.querySelector(".select2") == article3)
        i--;
    else if (document.querySelector(".select3") == article3)
        i--;
    else if (document.querySelector(".select4") == article3)
        i--;

    if(i<5) {
        article3.className = "select"+i.toString();
        i++;
    }
});
article4.addEventListener("click", e=>{
    if(document.querySelector(".select1") == article4)
        i--;
    else if (document.querySelector(".select2") == article4)
        i--;
    else if (document.querySelector(".select3") == article4)
        i--;
    else if (document.querySelector(".select4") == article4)
        i--;

    if(i<5) {
        article4.className = "select"+i.toString();
        i++;
    }
});
article5.addEventListener("click", e=>{
    if(document.querySelector(".select1") == article5)
        i--;
    else if (document.querySelector(".select2") == article5)
        i--;
    else if (document.querySelector(".select3") == article5)
        i--;
    else if (document.querySelector(".select4") == article5)
        i--;

    if(i<5) {
        article5.className = "select"+i.toString();
        i++;
    }
});
article6.addEventListener("click", e=>{
    if(document.querySelector(".select1") == article6)
        i--;
    else if (document.querySelector(".select2") == article6)
        i--;
    else if (document.querySelector(".select3") == article6)
        i--;
    else if (document.querySelector(".select4") == article6)
        i--;

    if(i<5) {
        article6.className = "select"+i.toString();
        i++;
    }
});
article7.addEventListener("click", e=>{
    if(document.querySelector(".select1") == article7)
        i--;
    else if (document.querySelector(".select2") == article7)
        i--;
    else if (document.querySelector(".select3") == article7)
        i--;
    else if (document.querySelector(".select4") == article7)
        i--;

    if(i<5) {
        article7.className = "select"+i.toString();
        i++;
    }
});
article8.addEventListener("click", e=>{
    if(document.querySelector(".select1") == article8)
        i--;
    else if (document.querySelector(".select2") == article8)
        i--;
    else if (document.querySelector(".select3") == article8)
        i--;
    else if (document.querySelector(".select4") == article8)
        i--;

    if(i<5) {
        article8.className = "select"+i.toString();
        i++;
    }
});
article9.addEventListener("click", e=>{
    if(document.querySelector(".select1") == article9)
        i--;
    else if (document.querySelector(".select2") == article9)
        i--;
    else if (document.querySelector(".select3") == article9)
        i--;
    else if (document.querySelector(".select4") == article9)
        i--;

    if(i<5) {
        article9.className = "select"+i.toString();
        i++;
    }
});
article10.addEventListener("click", e=>{
    if(document.querySelector(".select1") == article10)
        i--;
    else if (document.querySelector(".select2") == article10)
        i--;
    else if (document.querySelector(".select3") == article10)
        i--;
    else if (document.querySelector(".select4") == article10)
        i--;

    if(i<5) {
        article10.className = "select"+i.toString();
        i++;
    }
});
article11.addEventListener("click", e=>{
    if(document.querySelector(".select1") == article11)
        i--;
    else if (document.querySelector(".select2") == article11)
        i--;
    else if (document.querySelector(".select3") == article11)
        i--;
    else if (document.querySelector(".select4") == article11)
        i--;

    if(i<5) {
        article11.className = "select"+i.toString();
        i++;
    }
});
article12.addEventListener("click", e=>{
    if(document.querySelector(".select1") == article12)
        i--;
    else if (document.querySelector(".select2") == article12)
        i--;
    else if (document.querySelector(".select3") == article12)
        i--;
    else if (document.querySelector(".select4") == article12)
        i--;

    if(i<5) {
        article12.className = "select"+i.toString();
        i++;
    }
});
article13.addEventListener("click", e=>{
    if(document.querySelector(".select1") == article13)
        i--;
    else if (document.querySelector(".select2") == article13)
        i--;
    else if (document.querySelector(".select3") == article13)
        i--;
    else if (document.querySelector(".select4") == article13)
        i--;

    if(i<5) {
        article13.className = "select"+i.toString();
        i++;
    }
});
article14.addEventListener("click", e=>{
    if(document.querySelector(".select1") == article14)
        i--;
    else if (document.querySelector(".select2") == article14)
        i--;
    else if (document.querySelector(".select3") == article14)
        i--;
    else if (document.querySelector(".select4") == article14)
        i--;

    if(i<5) {
        article14.className = "select"+i.toString();
        i++;
    }
});
article15.addEventListener("click", e=>{
    if(document.querySelector(".select1") == article15)
        i--;
    else if (document.querySelector(".select2") == article15)
        i--;
    else if (document.querySelector(".select3") == article15)
        i--;
    else if (document.querySelector(".select4") == article15)
        i--;

    if(i<5) {
        article15.className = "select"+i.toString();
        i++;
    }
});
article16.addEventListener("click", e=>{
    if(document.querySelector(".select1") == article16)
        i--;
    else if (document.querySelector(".select2") == article16)
        i--;
    else if (document.querySelector(".select3") == article16)
        i--;
    else if (document.querySelector(".select4") == article16)
        i--;

    if(i<5) {
        article16.className = "select"+i.toString();
        i++;
    }
});
article17.addEventListener("click", e=>{
    if(document.querySelector(".select1") == article17)
        i--;
    else if (document.querySelector(".select2") == article17)
        i--;
    else if (document.querySelector(".select3") == article17)
        i--;
    else if (document.querySelector(".select4") == article17)
        i--;

    if(i<5) {
        article17.className = "select"+i.toString();
        i++;
    }
});
article18.addEventListener("click", e=>{
    if(document.querySelector(".select1") == article18)
        i--;
    else if (document.querySelector(".select2") == article18)
        i--;
    else if (document.querySelector(".select3") == article18)
        i--;
    else if (document.querySelector(".select4") == article18)
        i--;

    if(i<5) {
        article18.className = "select"+i.toString();
        i++;
    }
});
article19.addEventListener("click", e=>{
    if(document.querySelector(".select1") == article19)
        i--;
    else if (document.querySelector(".select2") == article19)
        i--;
    else if (document.querySelector(".select3") == article19)
        i--;
    else if (document.querySelector(".select4") == article19)
        i--;

    if(i<5) {
        article19.className = "select"+i.toString();
        i++;
    }
});
article20.addEventListener("click", e=>{
    if(document.querySelector(".select1") == article20)
        i--;
    else if (document.querySelector(".select2") == article20)
        i--;
    else if (document.querySelector(".select3") == article20)
        i--;
    else if (document.querySelector(".select4") == article20)
        i--;

    if(i<5) {
        article20.className = "select"+i.toString();
        i++;
    }
});
article21.addEventListener("click", e=>{
    if(document.querySelector(".select1") == article21)
        i--;
    else if (document.querySelector(".select2") == article21)
        i--;
    else if (document.querySelector(".select3") == article21)
        i--;
    else if (document.querySelector(".select4") == article21)
        i--;

    if(i<5) {
        article21.className = "select"+i.toString();
        i++;
    }
});
article22.addEventListener("click", e=>{
    if(document.querySelector(".select1") == article22)
        i--;
    else if (document.querySelector(".select2") == article22)
        i--;
    else if (document.querySelector(".select3") == article22)
        i--;
    else if (document.querySelector(".select4") == article22)
        i--;

    if(i<5) {
        article22.className = "select"+i.toString();
        i++;
    }
});
article23.addEventListener("click", e=>{
    if(document.querySelector(".select1") == article23)
        i--;
    else if (document.querySelector(".select2") == article23)
        i--;
    else if (document.querySelector(".select3") == article23)
        i--;
    else if (document.querySelector(".select4") == article23)
        i--;

    if(i<5) {
        article23.className = "select"+i.toString();
        i++;
    }
});
article24.addEventListener("click", e=>{
    if(document.querySelector(".select1") == article24)
        i--;
    else if (document.querySelector(".select2") == article24)
        i--;
    else if (document.querySelector(".select3") == article24)
        i--;
    else if (document.querySelector(".select4") == article24)
        i--;

    if(i<5) {
        article24.className = "select"+i.toString();
        i++;
    }
});
article25.addEventListener("click", e=>{
    if(document.querySelector(".select1") == article25)
        i--;
    else if (document.querySelector(".select2") == article25)
        i--;
    else if (document.querySelector(".select3") == article25)
        i--;
    else if (document.querySelector(".select4") == article25)
        i--;

    if(i<5) {
        article25.className = "select"+i.toString();
        i++;
    }
});
article26.addEventListener("click", e=>{
    if(document.querySelector(".select1") == article26)
        i--;
    else if (document.querySelector(".select2") == article26)
        i--;
    else if (document.querySelector(".select3") == article26)
        i--;
    else if (document.querySelector(".select4") == article26)
        i--;

    if(i<5) {
        article26.className = "select"+i.toString();
        i++;
    }
});
article27.addEventListener("click", e=>{
    if(document.querySelector(".select1") == article27)
        i--;
    else if (document.querySelector(".select2") == article27)
        i--;
    else if (document.querySelector(".select3") == article27)
        i--;
    else if (document.querySelector(".select4") == article27)
        i--;

    if(i<5) {
        article27.className = "select"+i.toString();
        i++;
    }
});
article28.addEventListener("click", e=>{
    if(document.querySelector(".select1") == article28)
        i--;
    else if (document.querySelector(".select2") == article28)
        i--;
    else if (document.querySelector(".select3") == article28)
        i--;
    else if (document.querySelector(".select4") == article28)
        i--;

    if(i<5) {
        article28.className = "select"+i.toString();
        i++;
    }
});
article29.addEventListener("click", e=>{
    if(document.querySelector(".select1") == article29)
        i--;
    else if (document.querySelector(".select2") == article29)
        i--;
    else if (document.querySelector(".select3") == article29)
        i--;
    else if (document.querySelector(".select4") == article29)
        i--;

    if(i<5) {
        article29.className = "select"+i.toString();
        i++;
    }
});
article30.addEventListener("click", e=>{
    if(document.querySelector(".select1") == article30)
        i--;
    else if (document.querySelector(".select2") == article30)
        i--;
    else if (document.querySelector(".select3") == article30)
        i--;
    else if (document.querySelector(".select4") == article30)
        i--;

    if(i<5) {
        article30.className = "select"+i.toString();
        i++;
    }
});
const skb1 = document.getElementById("skb1");

const init = document.querySelector(".initial");
init.addEventListener("click", e=>{
    i=1;
    article1.className = "article1";
    article2.className = "article2";
    article3.className = "article3";
    article4.className = "article4";
    article5.className = "article5";
    article6.className = "article6";
    article7.className = "article7";
    article8.className = "article8";
    article9.className = "article9";
    article10.className = "article10";
    article11.className = "article11";
    article12.className = "article12";
    article13.className = "article13";
    article14.className = "article14";
    article15.className = "article15";
    article16.className = "article16";
    article17.className = "article17";
    article18.className = "article18";
    article19.className = "article19";
    article20.className = "article20";
    article21.className = "article21";
    article22.className = "article22";
    article23.className = "article23";
    article24.className = "article24";
    article25.className = "article25";
    article26.className = "article26";
    article27.className = "article27";
    article28.className = "article28";
    article29.className = "article29";
    article30.className = "article30";
});

const next = document.querySelector(".next");
next.addEventListener("click", e=>{
    if( i !=5 ) {
        document.getElementById("wrn").className = "warning";
        const timeout = setTimeout(()=>{
            document.getElementById("wrn").className = "off_warning"
        },2000)
    }
    else {
        voice6_audio.pause();
        document.querySelector(".explain").className = "off_explain";
        document.querySelector(".next").className = "off_next";
        document.querySelector(".initial").className = "off_initial";
        document.querySelector(".select_article").className = "selected_article";
        gamestart_audio.play();
        gamestart_audio.muted=false;

        document.querySelector(".off").className = "on";
        setTimeout(()=>{
            document.querySelector(".off_hong2").className = "hong2";
        },2000);

        setTimeout(()=>{
            document.querySelector(".off_game_announce").className = "game_announce";
            gamestart_audio.volume=0.2;
            voice7_audio.play();
            voice7_audio.muted=false;
        },6000);

        setTimeout(()=>{
            document.querySelector(".off_portal").className = "portal";
        },8000);
        setTimeout(()=>{
            document.querySelector(".hong2").className = "in_hong2";
            gamestart_audio.volume=0.5;
        },10000);
        setTimeout(()=>{
            document.querySelector(".game_announce").className = "bye_game_announce";
            document.querySelector(".portal").className = "bye_portal";
            gamestart_audio.volume=0.3;
        },16000);
        setTimeout(()=>{
            document.querySelector(".bye_portal").className = "off_portal";
            document.querySelector(".bye_game_announce").className = "off_game_announce";
            gamestart_audio.volume=0.1;
        },18000);
        setTimeout(()=>{
            document.querySelector('.off_black_bg').className = "change_bg";
        },18000);
        setTimeout(()=>{
            document.getElementById("1st_bg").className = "off_bg";
            document.getElementById("2nd_bg").className = "bg";
            gamestart_audio.pause();
            gamestart_audio.muted=true;
            finding_audio.play();
            finding_audio.muted=false;
            finding_audio.volume=0.1;
        },19000);
        setTimeout(()=>{
            document.querySelector(".off_book1_announce").className = "book1_announce";
            finding_audio.volume=0.2;
            voice8_audio.play();
            voice8_audio.muted=false;
            document.querySelector(".off_game_skip").className = "game_skip";
            document.querySelector('.change_bg').className = "off_black_bg";
        },20000);
        setTimeout(()=>{
            skb1.className = "skill_book1";
        },21000);

        setTimeout(()=>{
            finding_audio.volume=0.5;
        },24000);
    }
});

skb1.addEventListener("click", e=>{
    document.querySelector(".select1").className = "select_view";
    skb1.className = "off_skill_book1";

    setTimeout(()=>{
        finding_audio.volume=0.2;
        voice9_audio.play();
        voice9_audio.muted = false;
    },2500);
    
    setTimeout(()=>{
        document.getElementById("teacher1").className = "teacher";
        
    },3000);

    setTimeout(()=>{
        finding_audio.volume=0.5;
    },7500);
});

const teacher1 = document.getElementById("teacher1");

teacher1.addEventListener("click", e=>{
    finding_audio.pause();
    finding_audio.muted=true;
    voice9_audio.muted=true;
    teacher_audio.currentTime = 0;
    teacher_audio.play();
    document.querySelector(".off_tenor1").className = "tenor1";
    document.querySelector(".off_qz_intro").className = "qz_intro";
    teacher1.className = "off_teacher";
    document.querySelector(".book1_announce").className = "off_book1_announce";
    document.querySelector(".game_skip").className = "off_game_skip";
    document.querySelector(".select_view").className = "select_hidden";

    setTimeout(()=>{
        const answer = document.querySelector(".select_hidden");
        answer.className = "select_qz";
        document.querySelector(".qz_intro").className = "off_qz_intro";
        
    },6000);
});

const answer1 = document.querySelectorAll(".o");
const answer2 = document.querySelectorAll(".x");

var cnt = -1;

for(let j = 0; j<answer1.length; j++) {
    answer1[j].addEventListener("click",e=>{
        document.querySelector(".select_qz").className = "select_out_qz";
        
        setTimeout(()=>{
            teacher_audio.volume=0.2;
            voice11_audio.play();
            voice11_audio.muted=false;
        },1000);
        

        setTimeout(()=>{
            document.querySelector(".select_out_qz").className = "off_select";
            document.querySelector(".off_cor").className = "cor";
            cnt++;
        },2000);

        setTimeout(()=>{
            document.querySelector(".cor").className = "off_cor";
            teacher_audio.volume=0.5;
            document.getElementById("skill_get").className = "skill_get";
        },6000);
    });
};

for(let j=0; j<answer2.length; j++) {
    answer2[j].addEventListener("click",e=>{
        document.querySelector(".off_wrg").className = "wrg";
        document.querySelector(".select_qz").className = "select_blur_qz";
        teacher_audio.volume=0.2;
        voice10_audio.play();
        voice10_audio.muted = false;
        setTimeout(()=>{
            document.querySelector(".wrg").className = "off_wrg";
            document.querySelector(".select_blur_qz").className = "select_qz";
        },4000);

        setTimeout(()=>{
            teacher_audio.volume=0.5;
        },5000);
    });
}

const skgt = document.getElementById("skill_get");
skgt.addEventListener("click",e=>{
    voice12_audio.play();
    voice12_audio.muted=false;
    teacher_audio.volume=0.2;
    if(cnt==0) {
        document.querySelector(".off_black_bg").className = "change_bg";
        setTimeout(()=>{
            document.querySelector(".tenor1").className = "off_tenor1";
            document.getElementById("skill_get").className = "off_skill_get";
            document.querySelector(".off_enemy_announce").className = "enemy_announce";
            document.querySelector(".off_game_skip").className = "game_skip";
            teacher_audio.pause();
            catching_audio.play();
        },1500);

        setTimeout(()=>{
            document.querySelector(".change_bg").className = "off_black_bg";
            document.querySelector(".off_whoRU").className = "whoRU";
            
        },3000);

    }
    if(cnt==1) {
        document.querySelector(".off_black_bg").className = "change_bg";
        setTimeout(()=>{
            document.querySelector(".tenor2").className = "off_tenor2";
            document.getElementById("skill_get").className = "off_skill_get";
            document.querySelector(".off_enemy_announce").className = "enemy_announce";
            document.querySelector(".off_game_skip").className = "game_skip";
            teacher_audio.pause();
            catching_audio.play();
        },1500);

        setTimeout(()=>{
            document.querySelector(".change_bg").className = "off_black_bg";
            document.getElementById("enemy2_who").className = "whoRU";
            
        },3000);

    }
    if(cnt==2) {
        document.querySelector(".off_black_bg").className = "change_bg";

        setTimeout(()=>{
            document.querySelector(".tenor3").className = "off_tenor3";
            document.getElementById("skill_get").className = "off_skill_get";
            document.querySelector(".off_enemy_announce").className = "enemy_announce";
            document.querySelector(".off_game_skip").className = "game_skip";
            teacher_audio.pause();
            catching_audio.play();

        },1500);

        setTimeout(()=>{
            document.querySelector(".change_bg").className = "off_black_bg";
            document.getElementById("enemy3_who").className = "whoRU";
        },3000);

    }

    if(cnt==3) {
        document.querySelector(".off_black_bg").className = "change_bg";
        setTimeout(()=>{
            document.querySelector(".tenor4").className = "off_tenor4";
            document.getElementById("skill_get").className = "off_skill_get";
            document.querySelector(".off_enemy_announce").className = "enemy_announce";
            document.querySelector(".off_game_skip").className = "game_skip";
            teacher_audio.pause();
            catching_audio.play();

        },1500);

        setTimeout(()=>{
            document.querySelector(".change_bg").className = "off_black_bg";
            document.getElementById("enemy4_who").className = "whoRU";
        },3000);

    }
});

const fight1 = document.getElementById("enemy1_who");

fight1.addEventListener("click", e=>{
    voice12_audio.muted=true;
    catching_audio.pause();
    document.querySelector(".off_black_bg").className = "change_bg";
    document.querySelector(".whoRU").className = "off_whoRU";
    document.querySelector(".enemy_announce").className = "off_enemy_announce";
    voice13_audio.play();
    voice13_audio.muted=false;
    battle1_audio.play();
    battle1_audio.volume=0.2;
    setTimeout(()=>{
        document.querySelector(".off_skill_announce").className = "skill_announce";
    },1500);
    setTimeout(()=>{
        
        document.querySelector(".off_back_hong2").className = "back_hong2";
        document.querySelector(".off_monster1").className = "monster1";
        document.querySelector(".off_skill_list").className = "skill_list";
        document.querySelector(".skill1").className = "skill1_active";
        document.querySelector(".change_bg").className = "off_black_bg";
    },3000);

    setTimeout(()=>{
        voice13_audio.muted = true;
        battle1_audio.volume=0.5;
    },5000);
});

const skill_1 = document.getElementById("sk1");

skill_1.addEventListener("click", e=>{
    document.querySelector(".skill_announce").className = "bye_skill_announce";
    document.querySelector(".game_skip").className = "bye_game_skip";
    document.querySelector(".skill_list").className = "bye_skill_list";

    setTimeout(()=>{
        document.querySelector(".back_hong2").className = "back_hong2_attack";
        document.querySelector(".off_brush").className = "brush";
        battle1_audio.volume=0.2;
    },2000);

    setTimeout(()=>{
        brush_audio.play();
    },2200);
    

    setTimeout(()=>{
        document.querySelector(".brush").className = "off_brush";

        brush_audio.pause();
        battle1_audio.volume=0.5;

        document.querySelector(".monster1").className = "bye_monster1";
        document.querySelector(".bye_skill_announce").className = "off_skill_announce";
        document.querySelector(".bye_game_skip").className = "off_game_skip";
        document.querySelector(".bye_skill_list").className = "off_skill_list";
        
        
    },7500);

    setTimeout(()=>{
        document.querySelector(".bye_monster1").className = "off_monster1";
        document.querySelector(".off_blur_bg").className = "blur_bg";
        document.querySelector(".off_stage2_go").className = "stage2_go";
        battle1_audio.pause();
        gameclear_audio.currentTime = 0;
        gameclear_audio.play();
        gameclear_audio.volume=0.2;
        gameclear_audio.muted=false;
        voice14_audio.play();
        voice14_audio.muted=false;
        if(cnt==0)
            document.querySelector(".off_clear_announce").className = "clear_announce";
        else if(cnt==1)
            document.querySelector(".off_clear_announce2").className = "clear_announce";
        else if(cnt==2)
            document.querySelector(".off_clear_announce3").className = "clear_announce";
        else 
            document.querySelector(".off_clear_announce4").className = "clear_announce";
    },9500);

    setTimeout(()=>{
        gameclear_audio.volume=0.5;
    },14500);
});

const stage2 = document.getElementById("stage2");

stage2.addEventListener("click", e=>{
    gameclear_audio.volume=0.2;
    voice14_audio.muted=true;
    document.querySelector(".off_black_bg").className = "change_bg";
    setTimeout(()=>{
        gameclear_audio.pause();
        document.getElementById("2nd_bg").className = "off_bg";
        document.getElementById("3rd_bg").className = "bg";
        document.querySelector(".blur_bg").className = "off_blur_bg";
        document.querySelector(".clear_announce").className = "off_clear_announce";
        document.querySelector(".stage2_go").className = "off_stage2_go";
        document.querySelector(".back_hong2_attack").className = "off_back_hong2";
        document.querySelector(".off_book1_announce").className = "book1_announce";
        voice8_audio.play();
        document.querySelector(".off_game_skip").className = "game_skip";
        document.getElementById("skb2").className = "skill_book1";
        finding_audio.play();
        finding_audio.volume=0.2;
        finding_audio.muted=false;
    },1200);

    setTimeout(()=>{
        finding_audio.volume=0.5;
    },1600);

    setTimeout(()=>{
        document.querySelector(".change_bg").className = "off_black_bg";
    },3000);
});

const skb2 = document.getElementById("skb2");

skb2.addEventListener("click", e=>{
    document.querySelector(".select2").className = "select_view";
    skb2.className = "off_skill_book1";

    setTimeout(()=>{
        finding_audio.volume=0.2;
        voice9_audio.play();
        voice9_audio.muted = false;
    },2500);

    setTimeout(()=>{
        document.getElementById("teacher2").className = "teacher";
    },3000);

    setTimeout(()=>{
        finding_audio.volume=0.5;
    },7500);
});

const teacher2 = document.getElementById("teacher2");

teacher2.addEventListener("click", e=>{
    finding_audio.pause();
    voice9_audio.muted=true;
    teacher_audio.currentTime = 0;
    teacher_audio.play();
    document.querySelector(".off_tenor2").className = "tenor2";
    document.querySelector(".off_qz_intro").className = "qz_intro";
    teacher2.className = "off_teacher";
    document.querySelector(".book1_announce").className = "off_book1_announce";
    document.querySelector(".game_skip").className = "off_game_skip";
    document.querySelector(".select_view").className = "select_hidden";

    setTimeout(()=>{
        const answer = document.querySelector(".select_hidden");
        answer.className = "select_qz";
        document.querySelector(".qz_intro").className = "off_qz_intro";
        
    },6000);
});

const fight2 = document.getElementById("enemy2_who");

fight2.addEventListener("click", e=>{
    voice12_audio.muted=true;
    catching_audio.pause();
    document.querySelector(".off_black_bg").className = "change_bg";
    document.querySelector(".whoRU").className = "off_whoRU";
    document.querySelector(".enemy_announce").className = "off_enemy_announce";
    voice13_audio.play();
    voice13_audio.muted=false;
    battle1_audio.play();
    battle1_audio.volume=0.2;
    setTimeout(()=>{
        document.querySelector(".off_skill_announce").className = "skill_announce";
    },1500);
    setTimeout(()=>{
        document.querySelector(".off_back_hong2").className = "back_hong2";
        document.getElementById("monster2").className = "monster1";
        document.querySelector(".off_skill_list").className = "skill_list";
        document.querySelector(".skill2").className = "skill2_active";
        document.querySelector(".change_bg").className = "off_black_bg";
    },3000);

    setTimeout(()=>{
        voice13_audio.muted = true;
        battle1_audio.volume=0.5;
    },5000);

    setTimeout(()=>{
        voice13_audio.muted = true;
    },5000);
});

const skill_2 = document.getElementById("sk2");

skill_2.addEventListener("click", e=>{
    document.querySelector(".skill_announce").className = "bye_skill_announce";
    document.querySelector(".game_skip").className = "bye_game_skip";
    document.querySelector(".skill_list").className = "bye_skill_list";

    setTimeout(()=>{
        document.querySelector(".back_hong2").className = "back_hong2_attack";
        battle1_audio.volume=0.2;
    },2000);

    setTimeout(()=>{
        document.querySelector(".off_metor1").className = "metor1";
        document.querySelector(".bye_skill_list").className = "off_skill_list";
        document.querySelector(".bye_skill_announce").className = "off_skill_announce";
        document.querySelector(".bye_game_skip").className = "off_game_skip";

        battle1_audio.pause();
        meteo1.play();
    },3000);

    setTimeout(()=>{
        document.querySelector(".off_change_gif").className = "change_gif";
        meteo1.volume=0.2;
    },7500);

    setTimeout(()=>{
        document.querySelector(".metor1").className = "off_metor1";
        document.querySelector(".off_metor2").className = "metor2";
        meteo1.pause();
        meteo2.play();
    },8000);

    setTimeout(()=>{
        document.querySelector(".metor2").className = "off_metor2";
        meteo2.pause();
        document.querySelector(".change_gif").className = "off_change_gif";
        battle1_audio.load();
    },11000);

    setTimeout(()=>{
        document.querySelector(".monster1").className = "bye_monster1";
        battle1_audio.volume=0.2;
    },13000);

    setTimeout(()=>{
        document.querySelector(".bye_monster1").className = "off_monster1";
        battle1_audio.pause();
        gameclear_audio.currentTime = 0;
        gameclear_audio.play();
        gameclear_audio.volume=0.2;
        gameclear_audio.muted=false;
        document.querySelector(".off_blur_bg").className = "blur_bg";
        document.querySelector(".off_stage2_go").className = "stage2_go";
        voice14_audio.play();
        voice14_audio.muted=false;
        if(cnt==0)
            document.querySelector(".off_clear_announce").className = "clear_announce";
        else if(cnt==1)
            document.querySelector(".off_clear_announce2").className = "clear_announce";
        else if(cnt==2)
            document.querySelector(".off_clear_announce3").className = "clear_announce";
        else 
            document.querySelector(".off_clear_announce4").className = "clear_announce";
    },14000);

    setTimeout(()=>{
        gameclear_audio.volume=0.5;
    },19000);
});

const stage3 = document.getElementById("stage3");

stage3.addEventListener("click",e=>{
    gameclear_audio.volume=0.2;
    document.querySelector(".off_black_bg").className = "change_bg";
    voice14_audio.muted=true;
    setTimeout(()=>{
        document.getElementById("3rd_bg").className = "off_bg";
        document.getElementById("4st_bg").className = "bg";
        document.querySelector(".blur_bg").className = "off_blur_bg";
        document.querySelector(".clear_announce").className = "off_clear_announce";
        document.querySelector(".stage2_go").className = "off_stage2_go";
        document.querySelector(".back_hong2_attack").className = "off_back_hong2";
        document.querySelector(".off_book1_announce").className = "book1_announce";
        document.getElementById("skb3").className = "skill_book1";
        document.querySelector(".off_game_skip").className = "game_skip";
        voice8_audio.play();
        gameclear_audio.pause();
        finding_audio.play();
        finding_audio.volume=0.2;
    },1200);

    setTimeout(()=>{
        finding_audio.volume=0.5;
    },1600);

    setTimeout(()=>{
        document.querySelector(".change_bg").className = "off_black_bg";
    },3000);
});

const skb3 = document.getElementById("skb3");

skb3.addEventListener("click", e=>{
    document.querySelector(".select3").className = "select_view";
    skb3.className = "off_skill_book1";
    setTimeout(()=>{
        finding_audio.volume=0.2;
        voice9_audio.play();
        voice9_audio.muted = false;
    },2500);

    setTimeout(()=>{
        document.getElementById("teacher3").className = "teacher";
    },3000);

    setTimeout(()=>{
        finding_audio.volume=0.5;
    },7500);
});

const teacher3 = document.getElementById("teacher3");

teacher3.addEventListener("click", e=>{
    finding_audio.pause();
    voice9_audio.muted=true;
    teacher_audio.currentTime = 0;
    teacher_audio.play();
    document.querySelector(".off_tenor3").className = "tenor3";
    document.querySelector(".off_qz_intro").className = "qz_intro";
    teacher3.className = "off_teacher";
    document.querySelector(".book1_announce").className = "off_book1_announce";
    document.querySelector(".game_skip").className = "off_game_skip";
    document.querySelector(".select_view").className = "select_hidden";

    setTimeout(()=>{
        const answer = document.querySelector(".select_hidden");
        answer.className = "select_qz";
        document.querySelector(".qz_intro").className = "off_qz_intro";
        
    },6000);
});

const fight3 = document.getElementById("enemy3_who");

fight3.addEventListener("click", e=>{
    voice12_audio.muted=true;
    catching_audio.pause();
    document.querySelector(".off_black_bg").className = "change_bg";
    document.querySelector(".whoRU").className = "off_whoRU";
    document.querySelector(".enemy_announce").className = "off_enemy_announce";
    voice13_audio.play();
    voice13_audio.muted=false;
    battle1_audio.play();
    battle1_audio.volume=0.2;
    setTimeout(()=>{
        document.querySelector(".off_skill_announce").className = "skill_announce";
    },1500);
    setTimeout(()=>{
        document.querySelector(".off_back_hong2").className = "back_hong2";
        document.getElementById("monster3").className = "monster1";
        document.querySelector(".off_skill_list").className = "skill_list";
        document.querySelector(".skill3").className = "skill3_active";
        document.querySelector(".change_bg").className = "off_black_bg";
    },3000);

    setTimeout(()=>{
        voice13_audio.muted = true;
        battle1_audio.volume=0.5;
    },5000);
});

const skill_3 = document.getElementById("sk3");

skill_3.addEventListener("click", e=>{
    document.querySelector(".skill_announce").className = "bye_skill_announce";
    document.querySelector(".game_skip").className = "bye_game_skip";
    document.querySelector(".skill_list").className = "bye_skill_list";

    setTimeout(()=>{
        document.querySelector(".back_hong2").className = "back_hong2_attack";
        battle1_audio.volume=0.2;
    },2000);

    setTimeout(()=>{
        document.querySelector(".off_th1").className = "th1";
        battle1_audio.pause();
        th3.play();
        th3.loop=true;
        th3.volume=0.2;
        th1.play();
        th1.volume=0.5
    },3000);

    setTimeout(()=>{
        document.querySelector(".th1").className = "off_th1";
        document.querySelector(".off_th2").className = "th2";
        document.querySelector(".bye_skill_list").className = "off_skill_list";
        document.querySelector(".bye_skill_announce").className = "off_skill_announce";
        document.querySelector(".bye_game_skip").className = "off_game_skip";
        th1.pause();
        th2.play();
    },6000);

    setTimeout(()=>{
        document.querySelector(".th2").className = "off_th2";
        document.querySelector(".off_th3").className = "th3";
    },10500);

    setTimeout(()=>{
        document.querySelector(".th3").className = "off_th3";
        th2.pause();
        th3.pause();
        battle1_audio.load();
    },15000);

    setTimeout(()=>{
        document.querySelector(".monster1").className = "bye_monster1";
        battle1_audio.volume=0.2;
    },16000);

    setTimeout(()=>{
        document.querySelector(".bye_monster1").className = "off_monster1";
        document.querySelector(".off_blur_bg").className = "blur_bg";
        document.querySelector(".off_stage2_go").className = "stage2_go";
        battle1_audio.pause();
        voice14_audio.play();
        voice14_audio.muted=false;
        gameclear_audio.currentTime = 0;
        gameclear_audio.play();
        gameclear_audio.volume=0.2;
        gameclear_audio.muted=false;
        if(cnt==0)
            document.querySelector(".off_clear_announce").className = "clear_announce";
        else if(cnt==1)
            document.querySelector(".off_clear_announce2").className = "clear_announce";
        else if(cnt==2)
            document.querySelector(".off_clear_announce3").className = "clear_announce";
        else 
            document.querySelector(".off_clear_announce4").className = "clear_announce";
    },17000);

    setTimeout(()=>{
        gameclear_audio.volume=0.5;
    },22000);
});

const stage4 = document.getElementById("stage4");

stage4.addEventListener("click",e=>{
    gameclear_audio.volume=0.2;
    document.querySelector(".off_black_bg").className = "change_bg";
    voice14_audio.muted=true;
    setTimeout(()=>{
        document.getElementById("4st_bg").className = "off_bg";
        document.getElementById("5st_bg").className = "bg";
        document.querySelector(".blur_bg").className = "off_blur_bg";
        document.querySelector(".clear_announce").className = "off_clear_announce";
        document.querySelector(".stage2_go").className = "off_stage2_go";
        document.querySelector(".back_hong2_attack").className = "off_back_hong2";
        document.querySelector(".off_book1_announce").className = "book1_announce";
        document.getElementById("skb4").className = "skill_book1";
        document.querySelector(".off_game_skip").className = "game_skip";
        voice8_audio.play();
        gameclear_audio.pause();
        finding_audio.play();
        finding_audio.volume=0.2;
    },1200);

    setTimeout(()=>{
        finding_audio.volume=0.5;
    },1600);

    setTimeout(()=>{
        document.querySelector(".change_bg").className = "off_black_bg";
    },3000);
});

const skb4 = document.getElementById("skb4");

skb4.addEventListener("click",e=>{
    document.querySelector(".select4").className = "select_view";
    skb4.className = "off_skill_book1";

    setTimeout(()=>{
        finding_audio.volume=0.2;
        voice9_audio.play();
        voice9_audio.muted = false;
    },2500);

    setTimeout(()=>{
        document.getElementById("teacher4").className = "teacher";
    },3000);

    setTimeout(()=>{
        finding_audio.volume=0.5;
    },7500);
});

const teacher4 = document.getElementById("teacher4");

teacher4.addEventListener("click",e=>{
    finding_audio.pause();
    voice9_audio.muted=true;
    teacher_audio.currentTime = 0;
    teacher_audio.play();
    document.querySelector(".off_tenor4").className = "tenor4";
    document.querySelector(".off_qz_intro").className = "qz_intro";
    teacher4.className = "off_teacher";
    document.querySelector(".book1_announce").className = "off_book1_announce";
    document.querySelector(".select_view").className = "select_hidden";
    document.querySelector(".game_skip").className = "off_game_skip";

    setTimeout(()=>{
        const answer = document.querySelector(".select_hidden");
        answer.className = "select_qz";
        document.querySelector(".qz_intro").className = "off_qz_intro";
        
    },6000);
});

const fight4 = document.getElementById("enemy4_who");

fight4.addEventListener("click",e=>{
    voice12_audio.muted=true;
    catching_audio.pause();
    document.querySelector(".off_black_bg").className = "change_bg";
    document.querySelector(".whoRU").className = "off_whoRU";
    document.querySelector(".enemy_announce").className = "off_enemy_announce";
    voice13_audio.play();
    voice13_audio.muted=false;
    battle1_audio.play();
    battle1_audio.volume=0.2;

    setTimeout(()=>{
        document.querySelector(".off_skill_announce").className = "skill_announce";
    },1500);
    setTimeout(()=>{
        document.querySelector(".off_back_hong2").className = "back_hong2";
        document.getElementById("monster4").className = "monster1";
        document.querySelector(".off_skill_list").className = "skill_list";
        document.querySelector(".skill4").className = "skill4_active";
        document.querySelector(".change_bg").className = "off_black_bg";
    },3000);

    setTimeout(()=>{
        voice13_audio.muted = true;
        battle1_audio.volume=0.5;
    },5000);
});

const skill_4 = document.getElementById("sk4");

skill_4.addEventListener("click",e=>{
    document.querySelector(".skill_announce").className = "bye_skill_announce";
    document.querySelector(".game_skip").className = "bye_game_skip";
    document.querySelector(".skill_list").className = "bye_skill_list";
    battle1_audio.volume=0.2;

    setTimeout(()=>{
        document.querySelector(".back_hong2").className = "back_hong2_attack";
    },2000);

    setTimeout(()=>{
        battle1_audio.pause();
        document.querySelector(".off_dr1").className = "dr1";
        dr1.play();
        dr1.volume = 0.2;
        dr1.loop = true;
        dr2.currentTime = 1.6;
        dr2.play();
        dr2.volume=0.7;
    },3000);

    setTimeout(()=>{
        document.querySelector(".off_change_gif").className = "change_gif";
    },4000);

    setTimeout(()=>{
        document.querySelector(".dr1").className = "off_dr1"
        document.querySelector(".off_dr2").className = "dr2";
        document.querySelector(".bye_skill_list").className = "off_skill_list";
        document.querySelector(".bye_skill_announce").className = "off_skill_announce";
        document.querySelector(".bye_game_skip").className = "off_game_skip";
        dr2.pause();
        dr3.play();
    },4500);

    setTimeout(()=>{
        document.querySelector(".change_gif").className = "off_change_gif";
    },5000);

    setTimeout(()=>{
        document.querySelector(".off_change_gif").className = "change_gif";
    },8500);

    setTimeout(()=>{
        document.querySelector(".dr2").className = "off_dr2"
        document.querySelector(".off_dr3").className = "dr3";
        dr3.pause();
        dr4.currentTime=1.7;
        dr4.play();
    },9000);

    setTimeout(()=>{
        document.querySelector(".change_gif").className = "off_change_gif";
    },9500);

    setTimeout(()=>{
        document.querySelector(".off_change_gif").className = "change_gif";
    },10500);

    setTimeout(()=>{
        document.querySelector(".dr3").className = "off_dr3"
        document.querySelector(".off_dr4").className = "dr4";
        dr4.pause();
        dr5.play();
    },11000);

    setTimeout(()=>{
        dr1.volume=0.4;
        dr5.volume=0.4;
    },12000);

    setTimeout(()=>{
        dr1.volume=0.2;
        dr5.volume=0.2;
    },13000);

    setTimeout(()=>{
        document.querySelector(".dr4").className = "off_dr4";
        document.querySelector(".change_gif").className = "off_change_gif";
        dr1.pause();
        dr5.pause();
    },14000);

    setTimeout(()=>{
        document.querySelector(".monster1").className = "bye_monster1";
        battle1_audio.volume=0.2;
    },15000);

    setTimeout(()=>{
        document.querySelector(".bye_monster1").className = "off_monster1";
        document.querySelector(".off_blur_bg").className = "blur_bg";
        document.querySelector(".off_stage2_go").className = "stage2_go";
        battle1_audio.pause();
        voice14_audio.play();
        voice14_audio.muted=false;
        gameclear_audio.currentTime = 0;
        gameclear_audio.play();
        gameclear_audio.volume=0.2;
        gameclear_audio.muted=false;
        if(cnt==0)
            document.querySelector(".off_clear_announce").className = "clear_announce";
        else if(cnt==1)
            document.querySelector(".off_clear_announce2").className = "clear_announce";
        else if(cnt==2)
            document.querySelector(".off_clear_announce3").className = "clear_announce";
        else 
            document.querySelector(".off_clear_announce4").className = "clear_announce";
    },16000);

    setTimeout(()=>{
        gameclear_audio.volume=0.5;
    },21000);
});

const final = document.getElementById("final");

final.addEventListener("click", e=>{
    document.querySelector(".off_black_bg").className = "change_bg";
    gameclear_audio.pause();
    sad.play();
    sad.loop=true;
    voice14_audio.muted=true;
    voice15_audio.play();
    voice15_audio.muted="false";

    setTimeout(()=>{
        document.querySelector(".off_finish").className = "finish";

    },1500);

    setTimeout(()=>{
        document.querySelector(".change_bg").className = "off_black_bg";

    },3000);
});

const nxt = document.getElementById("go_next");

nxt.addEventListener("click",e=>{
    gameclear_audio.pause();
    
    document.querySelector(".off_container").className = "on_container";

    setTimeout(()=>{
        location.replace("finish.html");
    },1500);

});

const btn_home = document.getElementById("btn_home");

var go_home = 0;

btn_home.addEventListener("click",e=>{
    go_home++;
    if(go_home >= 5) {
        location.replace("game_touch.html");
    }
});

const game_skip = document.getElementById("game_skip");
const realY = document.getElementById("realY");
const realN = document.getElementById("realN");

game_skip.addEventListener("click", e=>{
    document.querySelector(".off_realBye").className = "realBye";
});

realY.addEventListener("click", e=>{
    document.querySelector(".off_container").className = "on_container";
    document.querySelector(".realBye").className = "bye_realBye";

    setTimeout(()=>{
        location.replace("finish.html");
    },1500);
});

realN.addEventListener("click", e=>{
    document.querySelector(".realBye").className = "bye_realBye";

    setTimeout(()=>{
        document.querySelector(".bye_realBye").className = "off_realBye";
    },1000);
});