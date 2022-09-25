#!/usr/bin/env node

/************************************************************************
 Copyright (c) 2017, Rethink Robotics
 Copyright (c) 2017, Ian McMahon

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
************************************************************************/

'use strict';
/**no
 * This example demonstrates simple sending of messages over the ROS system.
 */

// Require rosnodejs itself
const rosnodejs = require('rosnodejs');
const express = require('express');
const app = express();
const imgbbUploader = require("imgbb-uploader")
const path = require('path');
const fs = require('fs')
const port = 5000;
const {exec} = require("child_process");
const { url } = require('inspector');
const { response } = require('express');
// Requrotires the std_msgs message package


rosnodejs.initNode('/hongdo_ros_web_node');
const nh = rosnodejs.nh;

function sound_play(number) {
  const client = nh.serviceClient('/play_song', 'hongdo_ros_speak/PlaySong');
  client.call({sequence : number})
}

function opnecv_capture() {
  const client = nh.serviceClient('/capture', 'std_srvs/Trigger');
  client.call()
}

function handshake_service() {
  const client = nh.serviceClient('/execution', 'std_srvs/Trigger');
  client.call()
}

function url_service(urlstring) {
  const client = nh.serviceClient('/make_qr', 'hongdo_ros_webconnect/UrlTunnel');
  client.call({url : urlstring})

}





if (require.main === module) {
  app.use(express.static(path.join(__dirname, 'public')));
  app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/index.html');
  })
  app.listen(port, ()=>{
    console.log(`The express`);
  })

  app.get('/intro.html', (req,res) =>{
    res.sendFile(__dirname+'/intro.html');
    console.log(__dirname+'')
  })

  app.get('/select_effect.html', (req,res) =>{
    res.sendFile(__dirname+'/select_effect.html');
  })

  app.get('/index.html', (req,res) =>{
    res.sendFile(__dirname+'/index.html');
    // voice_play(1); //1번 녹음파일 ~ 2번녹음파일
  })


  app.get('/upload.html', (req,res) =>{
    // talker();

    // delete saved image
    // exec(`cd /home/jeonghan/catkin_ws/src/hongdo_ros/hongdo_ros_web/scripts/public/hongdo_AI/simple_AI/output && rm -f model.jpg && rm -f hi.png && rm -f AIimage.png`,async(err, stdout, stderr) => {
    //   if(err) console.error(err)
    //   console.log(stdout)
    // })

    res.sendFile(__dirname+'/upload.html');
    // voice_play(2); //3번 녹음파일(사진찍기 ~)
  })

  app.get('/taking_pic.html', (req,res) =>{
    res.sendFile(__dirname+'/taking_pic.html');
    opnecv_capture();
    //사진 저장 후 경로 public/hongdo_AI/input  파일명 : model.jpg 
  })


  app.get('/select_pic.html', (req,res) =>{
    res.sendFile(__dirname+'/select_pic.html');
    
  })


  app.get('/loading.html', (req,res) =>{
    // handshake_service();
    // drawing motion 


    exec('python3 '+__dirname + '/public/hongdo_AI/simple_AI/vision.py',async(err, stdout, stderr) => {
      if(err) console.error(err)
      console.log(stdout)
    })
    // simple AI


    // exec('cd ' +__dirname + '/public/hongdo_AI/pencil_AI && ./startAI.sh',async(err, stdout, stderr) => {
    //   if(err) console.error(err)
    //   console.log(stdout)
    // })
    // pecil AI



    
    // exec('cd' +__dirname + '/hongdo_AI/pencil_AI && ./startAI.sh',async(err, stdout, stderr) => {
    //   if(err) console.error(err)
    //   console.log(stdout)
    // })

    res.sendFile(__dirname+'/loading.html');
  })

  app.get('/QR_make.html', (req,res) => {
    res.sendFile(__dirname+'/QR_make.html');
    imgbbUploader("e4422a3845100fe670775736ffd0e7cb", '/home/jeonghan/catkin_ws/src/hongdo_ros/hongdo_ros_web/scripts/public/hongdo_AI/output/trained_model.png'). then((response)=> {
      // if( url_service(JSON.stringify(response.url)) == true ) {
      //   return res.redirect("/drawn.html");
      // }

      url_service(JSON.stringify(response.url))
    }
      // console.log(JSON.stringify(response.url))
    )
    .catch((error) => 
      console.error(error)
    );
    
  })


  app.get('/drawn.html', (req,res) =>{
    res.sendFile(__dirname+'/drawn.html');
  })


  app.get('/game_intro.html', (req,res) =>{
    res.sendFile(__dirname+'/game_intro.html');
  })


  app.get('/game.html', (req,res) =>{
    res.sendFile(__dirname+'/game.html');
  })


  app.get('/finish.html', (req,res) =>{
    res.sendFile(__dirname+'/finish.html');
  })
  
  
  // Invoke Main Talker Function
  
}
