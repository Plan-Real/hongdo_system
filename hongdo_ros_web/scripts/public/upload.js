const C_btn = document.querySelector(".camera_btn");
var voice = new Audio("audio/speech/2.mp3")
voice.currentTime = 4;

voice.play();
C_btn.addEventListener("click", e=>{
  C_btn.className = "camera_btn_click";

  setTimeout(()=>{
    document.querySelector(".off_duru").className = "duru";
    document.querySelector(".announce_1").className = "off_announce_1";
  },500);

  setTimeout(()=>{
    document.querySelector(".off_announce_2").className = "announce_2";
  },1500);

  setTimeout(()=>{
    document.querySelector(".dem").className = "demo";
  },4000);

  setTimeout(()=>{
    location.replace("taking_pic.html");
  }, 7000);
});

var myVideoStream = document.getElementById('myVideo')     // make it a global variable
  var myStoredInterval = 0

function getVideo(){
  navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

  navigator.getMedia({
    video: {
        deviceId:"ec24fa6365362930858ecd21b8f258fce23c1ab63fe6e39a8a8082ffeda769e0"
    }, 
    audio: false
},
                     
    function(stream) {
      myVideoStream.srcObject = stream   
      myVideoStream.play();
  }, 
                     
   function(error) {
     alert('webcam not working');
  });
}

if (!navigator.mediaDevices?.enumerateDevices) {
    console.log("enumerateDevices() not supported.");
  } else {
    // List cameras and microphones.
    navigator.mediaDevices.enumerateDevices()
      .then((devices) => {
        devices.forEach((device) => {
          console.log(`${device.kind}: ${device.label} id = ${device.deviceId}`);
        });
      })
      .catch((err) => {
        console.error(`${err.name}: ${err.message}`);
      });
  }

  const btn_home = document.getElementById("btn_home");

var go_home = 0;

btn_home.addEventListener("click",e=>{
    go_home++;
    if(go_home >= 5) {
        location.replace("intro.html");
    }
});
