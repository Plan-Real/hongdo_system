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

const s_article1 = document.querySelector(".off_selected_article .article1");
const s_article2 = document.querySelector(".off_selected_article .article2");
const s_article3 = document.querySelector(".off_selected_article .article3");
const s_article4 = document.querySelector(".off_selected_article .article4");
const s_article5 = document.querySelector(".off_selected_article .article5");
const s_article6 = document.querySelector(".off_selected_article .article6");
const s_article7 = document.querySelector(".off_selected_article .article7");
const s_article8 = document.querySelector(".off_selected_article .article8");
const s_article9 = document.querySelector(".off_selected_article .article9");
const s_article10 = document.querySelector(".off_selected_article .article10");
const s_article11 = document.querySelector(".off_selected_article .article11");
const s_article12 = document.querySelector(".off_selected_article .article12");
const s_article13 = document.querySelector(".off_selected_article .article13");
const s_article14 = document.querySelector(".off_selected_article .article14");
const s_article15 = document.querySelector(".off_selected_article .article15");
const s_article16 = document.querySelector(".off_selected_article .article16");
const s_article17 = document.querySelector(".off_selected_article .article17");
const s_article18 = document.querySelector(".off_selected_article .article18");
const s_article19 = document.querySelector(".off_selected_article .article19");
const s_article20 = document.querySelector(".off_selected_article .article20");
const s_article21 = document.querySelector(".off_selected_article .article21");
const s_article22 = document.querySelector(".off_selected_article .article22");
const s_article23 = document.querySelector(".off_selected_article .article23");
const s_article24 = document.querySelector(".off_selected_article .article24");
const s_article25 = document.querySelector(".off_selected_article .article25");
const s_article26 = document.querySelector(".off_selected_article .article26");
const s_article27 = document.querySelector(".off_selected_article .article27");
const s_article28 = document.querySelector(".off_selected_article .article28");
const s_article29 = document.querySelector(".off_selected_article .article29");
const s_article30 = document.querySelector(".off_selected_article .article30");


document.querySelector(".off_select_article").className = "select_article";
document.querySelector(".off_home").className = "home";

setTimeout(()=>{
    document.querySelector(".bg").className = "off_bg";
},2000);

const x = document.getElementById("x");
const back = document.getElementById("back");

x.addEventListener("click", e=>{
    s_article1.className = "article1";
    s_article2.className = "article2";
    s_article3.className = "article3";
    s_article4.className = "article4";
    s_article5.className = "article5";
    s_article6.className = "article6";
    s_article7.className = "article7";
    s_article8.className = "article8";
    s_article9.className = "article9";
    s_article10.className = "article10";
    s_article11.className = "article11";
    s_article12.className = "article12";
    s_article13.className = "article13";
    s_article14.className = "article14";
    s_article15.className = "article15";
    s_article16.className = "article16";
    s_article17.className = "article17";
    s_article18.className = "article18";
    s_article19.className = "article19";
    s_article20.className = "article20";
    s_article21.className = "article21";
    s_article22.className = "article22";
    s_article23.className = "article23";
    s_article24.className = "article24";
    s_article25.className = "article25";
    s_article26.className = "article26";
    s_article27.className = "article27";
    s_article28.className = "article28";
    s_article29.className = "article29";
    s_article30.className = "article30";
    document.querySelector(".selected_article").className = "off_selected_article";
    x.className = "off_x";
    document.querySelector(".blur_home").className = "home";
    document.querySelector(".blur_article").className = "select_article";
    document.querySelector(".back").className = "off_back";
})

back.addEventListener("click", e=>{
    s_article1.className = "article1";
    s_article2.className = "article2";
    s_article3.className = "article3";
    s_article4.className = "article4";
    s_article5.className = "article5";
    s_article6.className = "article6";
    s_article7.className = "article7";
    s_article8.className = "article8";
    s_article9.className = "article9";
    s_article10.className = "article10";
    s_article11.className = "article11";
    s_article12.className = "article12";
    s_article13.className = "article13";
    s_article14.className = "article14";
    s_article15.className = "article15";
    s_article16.className = "article16";
    s_article17.className = "article17";
    s_article18.className = "article18";
    s_article19.className = "article19";
    s_article20.className = "article20";
    s_article21.className = "article21";
    s_article22.className = "article22";
    s_article23.className = "article23";
    s_article24.className = "article24";
    s_article25.className = "article25";
    s_article26.className = "article26";
    s_article27.className = "article27";
    s_article28.className = "article28";
    s_article29.className = "article29";
    s_article30.className = "article30";
    document.querySelector(".selected_article").className = "off_selected_article";
    x.className = "off_x";
    document.querySelector(".blur_home").className = "home";
    document.querySelector(".blur_article").className = "select_article";
    document.querySelector(".back").className = "off_back";
})

article1.addEventListener("click",e=>{
    document.querySelector(".off_selected_article").className = "selected_article";
    s_article1.className = "select_view";
    document.querySelector(".off_x").className = "x";
    document.querySelector(".select_article").className = "blur_article";
    document.querySelector(".home").className = "blur_home";
    document.querySelector(".off_back").className = "back";
});

article2.addEventListener("click",e=>{
    document.querySelector(".off_selected_article").className = "selected_article";
    s_article2.className = "select_view";
    document.querySelector(".off_x").className = "x";
    document.querySelector(".select_article").className = "blur_article";
    document.querySelector(".home").className = "blur_home";
    document.querySelector(".off_back").className = "back";
});

article3.addEventListener("click",e=>{
    document.querySelector(".off_selected_article").className = "selected_article";
    s_article3.className = "select_view";
    document.querySelector(".off_x").className = "x";
    document.querySelector(".select_article").className = "blur_article";
    document.querySelector(".home").className = "blur_home";
    document.querySelector(".off_back").className = "back";
});

article4.addEventListener("click",e=>{
    document.querySelector(".off_selected_article").className = "selected_article";
    s_article4.className = "select_view";
    document.querySelector(".off_x").className = "x";
    document.querySelector(".select_article").className = "blur_article";
    document.querySelector(".home").className = "blur_home";
    document.querySelector(".off_back").className = "back";
});

article5.addEventListener("click",e=>{
    document.querySelector(".off_selected_article").className = "selected_article";
    s_article5.className = "select_view";
    document.querySelector(".off_x").className = "x";
    document.querySelector(".select_article").className = "blur_article";
    document.querySelector(".home").className = "blur_home";
    document.querySelector(".off_back").className = "back";
});

article6.addEventListener("click",e=>{
    document.querySelector(".off_selected_article").className = "selected_article";
    s_article6.className = "select_view";
    document.querySelector(".off_x").className = "x";
    document.querySelector(".select_article").className = "blur_article";
    document.querySelector(".home").className = "blur_home";
    document.querySelector(".off_back").className = "back";
});

article7.addEventListener("click",e=>{
    document.querySelector(".off_selected_article").className = "selected_article";
    s_article7.className = "select_view";
    document.querySelector(".off_x").className = "x";
    document.querySelector(".select_article").className = "blur_article";
    document.querySelector(".home").className = "blur_home";
    document.querySelector(".off_back").className = "back";
});

article8.addEventListener("click",e=>{
    document.querySelector(".off_selected_article").className = "selected_article";
    s_article8.className = "select_view";
    document.querySelector(".off_x").className = "x";
    document.querySelector(".select_article").className = "blur_article";
    document.querySelector(".home").className = "blur_home";
    document.querySelector(".off_back").className = "back";
});

article9.addEventListener("click",e=>{
    document.querySelector(".off_selected_article").className = "selected_article";
    s_article9.className = "select_view";
    document.querySelector(".off_x").className = "x";
    document.querySelector(".select_article").className = "blur_article";
    document.querySelector(".home").className = "blur_home";
    document.querySelector(".off_back").className = "back";
});

article10.addEventListener("click",e=>{
    document.querySelector(".off_selected_article").className = "selected_article";
    s_article10.className = "select_view";
    document.querySelector(".off_x").className = "x";
    document.querySelector(".select_article").className = "blur_article";
    document.querySelector(".home").className = "blur_home";
    document.querySelector(".off_back").className = "back";
});

article11.addEventListener("click",e=>{
    document.querySelector(".off_selected_article").className = "selected_article";
    s_article11.className = "select_view";
    document.querySelector(".off_x").className = "x";
    document.querySelector(".select_article").className = "blur_article";
    document.querySelector(".home").className = "blur_home";
    document.querySelector(".off_back").className = "back";
});

article12.addEventListener("click",e=>{
    document.querySelector(".off_selected_article").className = "selected_article";
    s_article12.className = "select_view";
    document.querySelector(".off_x").className = "x";
    document.querySelector(".select_article").className = "blur_article";
    document.querySelector(".home").className = "blur_home";
    document.querySelector(".off_back").className = "back";
});

article13.addEventListener("click",e=>{
    document.querySelector(".off_selected_article").className = "selected_article";
    s_article13.className = "select_view";
    document.querySelector(".off_x").className = "x";
    document.querySelector(".select_article").className = "blur_article";
    document.querySelector(".home").className = "blur_home";
    document.querySelector(".off_back").className = "back";
});

article14.addEventListener("click",e=>{
    document.querySelector(".off_selected_article").className = "selected_article";
    s_article14.className = "select_view";
    document.querySelector(".off_x").className = "x";
    document.querySelector(".select_article").className = "blur_article";
    document.querySelector(".home").className = "blur_home";
    document.querySelector(".off_back").className = "back";
});

article15.addEventListener("click",e=>{
    document.querySelector(".off_selected_article").className = "selected_article";
    s_article15.className = "select_view";
    document.querySelector(".off_x").className = "x";
    document.querySelector(".select_article").className = "blur_article";
    document.querySelector(".home").className = "blur_home";
    document.querySelector(".off_back").className = "back";
});

article16.addEventListener("click",e=>{
    document.querySelector(".off_selected_article").className = "selected_article";
    s_article16.className = "select_view";
    document.querySelector(".off_x").className = "x";
    document.querySelector(".select_article").className = "blur_article";
    document.querySelector(".home").className = "blur_home";
    document.querySelector(".off_back").className = "back";
});

article17.addEventListener("click",e=>{
    document.querySelector(".off_selected_article").className = "selected_article";
    s_article17.className = "select_view";
    document.querySelector(".off_x").className = "x";
    document.querySelector(".select_article").className = "blur_article";
    document.querySelector(".home").className = "blur_home";
    document.querySelector(".off_back").className = "back";
});

article18.addEventListener("click",e=>{
    document.querySelector(".off_selected_article").className = "selected_article";
    s_article18.className = "select_view";
    document.querySelector(".off_x").className = "x";
    document.querySelector(".select_article").className = "blur_article";
    document.querySelector(".home").className = "blur_home";
    document.querySelector(".off_back").className = "back";
});

article19.addEventListener("click",e=>{
    document.querySelector(".off_selected_article").className = "selected_article";
    s_article19.className = "select_view";
    document.querySelector(".off_x").className = "x";
    document.querySelector(".select_article").className = "blur_article";
    document.querySelector(".home").className = "blur_home";
    document.querySelector(".off_back").className = "back";
});

article20.addEventListener("click",e=>{
    document.querySelector(".off_selected_article").className = "selected_article";
    s_article20.className = "select_view";
    document.querySelector(".off_x").className = "x";
    document.querySelector(".select_article").className = "blur_article";
    document.querySelector(".home").className = "blur_home";
    document.querySelector(".off_back").className = "back";
});

article21.addEventListener("click",e=>{
    document.querySelector(".off_selected_article").className = "selected_article";
    s_article21.className = "select_view";
    document.querySelector(".off_x").className = "x";
    document.querySelector(".select_article").className = "blur_article";
    document.querySelector(".home").className = "blur_home";
    document.querySelector(".off_back").className = "back";
});

article22.addEventListener("click",e=>{
    document.querySelector(".off_selected_article").className = "selected_article";
    s_article22.className = "select_view";
    document.querySelector(".off_x").className = "x";
    document.querySelector(".select_article").className = "blur_article";
    document.querySelector(".home").className = "blur_home";
    document.querySelector(".off_back").className = "back";
});

article23.addEventListener("click",e=>{
    document.querySelector(".off_selected_article").className = "selected_article";
    s_article23.className = "select_view";
    document.querySelector(".off_x").className = "x";
    document.querySelector(".select_article").className = "blur_article";
    document.querySelector(".home").className = "blur_home";
    document.querySelector(".off_back").className = "back";
});

article24.addEventListener("click",e=>{
    document.querySelector(".off_selected_article").className = "selected_article";
    s_article24.className = "select_view";
    document.querySelector(".off_x").className = "x";
    document.querySelector(".select_article").className = "blur_article";
    document.querySelector(".home").className = "blur_home";
    document.querySelector(".off_back").className = "back";
});

article25.addEventListener("click",e=>{
    document.querySelector(".off_selected_article").className = "selected_article";
    s_article25.className = "select_view";
    document.querySelector(".off_x").className = "x";
    document.querySelector(".select_article").className = "blur_article";
    document.querySelector(".home").className = "blur_home";
    document.querySelector(".off_back").className = "back";
});

article26.addEventListener("click",e=>{
    document.querySelector(".off_selected_article").className = "selected_article";
    s_article26.className = "select_view";
    document.querySelector(".off_x").className = "x";
    document.querySelector(".select_article").className = "blur_article";
    document.querySelector(".home").className = "blur_home";
    document.querySelector(".off_back").className = "back";
});

article27.addEventListener("click",e=>{
    document.querySelector(".off_selected_article").className = "selected_article";
    s_article27.className = "select_view";
    document.querySelector(".off_x").className = "x";
    document.querySelector(".select_article").className = "blur_article";
    document.querySelector(".home").className = "blur_home";
    document.querySelector(".off_back").className = "back";
});

article28.addEventListener("click",e=>{
    document.querySelector(".off_selected_article").className = "selected_article";
    s_article28.className = "select_view";
    document.querySelector(".off_x").className = "x";
    document.querySelector(".select_article").className = "blur_article";
    document.querySelector(".home").className = "blur_home";
    document.querySelector(".off_back").className = "back";
});

article29.addEventListener("click",e=>{
    document.querySelector(".off_selected_article").className = "selected_article";
    s_article29.className = "select_view";
    document.querySelector(".off_x").className = "x";
    document.querySelector(".select_article").className = "blur_article";
    document.querySelector(".home").className = "blur_home";
    document.querySelector(".off_back").className = "back";
});

article30.addEventListener("click",e=>{
    document.querySelector(".off_selected_article").className = "selected_article";
    s_article30.className = "select_view";
    document.querySelector(".off_x").className = "x";
    document.querySelector(".select_article").className = "blur_article";
    document.querySelector(".home").className = "blur_home";
    document.querySelector(".off_back").className = "back";
});

const home = document.getElementById("home");

home.addEventListener("click", e=>{
    location.replace("game_touch.html");
});

const btn_home = document.getElementById("btn_home");

var go_home = 0;

btn_home.addEventListener("click",e=>{
    go_home++;
    if(go_home >= 5) {
        location.replace("game_touch.html");
    }
});