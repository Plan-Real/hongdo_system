const timeout = setTimeout(()=>{
    location.replace("select_pic.html");
}, 5000);

const btn_home = document.getElementById("btn_home");

var go_home = 0;

btn_home.addEventListener("click",e=>{
    go_home++;
    if(go_home >= 5) {
        location.replace("intro.html");
    }
});