const s1 = document.getElementById("s1");
const s2 = document.getElementById("s2");
const s3 = document.getElementById("s3");
const s4 = document.getElementById("s4");
const btn = document.getElementById("next_btn");

var t1 = 0;
var t2 = 0;
var t3 = 0;
var t4 = 0;

s1.addEventListener("click", e=>{
    if(t1 == 0) {
        t1 = 1;
        s1.className = "s1_s";
        btn.className = "next_btn";
        if(t2 == 1) {
            s2.className = "s2";
            t2 = 0;
        }
        if(t3 == 1) {
            t3 = 0;
            s3.className = "s3";
        }
        if(t4 == 1) {
            t4 = 0;
            s4.className = "s4";
        }
    }
});

s2.addEventListener("click", e=>{
    if(t2 == 0) {
        t2 = 1;
        s2.className = "s2_s";
        btn.className = "next_btn";
        if(t1 == 1) {
            s1.className = "s1";
            t1 = 0;
        }
        if(t3 == 1) {
            t3 = 0;
            s3.className = "s3";
        }
        if(t4 == 1) {
            t4 = 0;
            s4.className = "s4";
        }
    }
});

s3.addEventListener("click", e=>{
    if(t3 == 0) {
        t3 = 1;
        s3.className = "s3_s";
        btn.className = "next_btn";
        if(t2 == 1) {
            s2.className = "s2";
            t2 = 0;
        }
        if(t1 == 1) {
            t1 = 0;
            s1.className = "s1";
        }
        if(t4 == 1) {
            t4 = 0;
            s4.className = "s4";
        }
    }
});

s4.addEventListener("click", e=>{
    if(t4 == 0) {
        t4 = 1;
        s4.className = "s4_s";
        btn.className = "next_btn";
        if(t2 == 1) {
            s2.className = "s2";
            t2 = 0;
        }
        if(t3 == 1) {
            t3 = 0;
            s3.className = "s3";
        }
        if(t1 == 1) {
            t1 = 0;
            s1.className = "s1";
        }
    }
});

btn.addEventListener("click", e=>{
    location.replace("loading.html")
});