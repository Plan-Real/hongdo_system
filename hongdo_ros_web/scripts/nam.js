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
// const rosnodejs = require('rosnodejs');
const express = require('express');
const app = express();
const path = require('path');
const imgbbUploader = require("imgbb-uploader")
const fs = require('fs');
const url = require('url');
const port = 5000;
// Requrotires the std_msgs message package
// const std_msgs = rosnodejs.require('std_msgs').msg;

// function talker_topic() {
//   // Register node with ROS master
//   rosnodejs.initNode('/talker_node')
//     .then((rosNode) => {
//       // Create ROS publisher on the 'chatter' topic with String message
//       let pub = rosNode.advertise('/chatter', std_msgs.String);
//       let count = 0;
//       const msg = new std_msgs.String();
//       // Define a function to execute every 100ms
//       setInterval(() => {
//         // Construct the message
//         msg.data = 'hello world ' + count;
//         // Publish over ROS
//         pub.publish(msg);
//         // Log through stdout and /rosout
//         rosnodejs.log.info('I said: [' + msg.data + ']');
//         ++count;
//       }, 100);
//     });
// }

// function talker() {
//   // Register node with ROS master
//   rosnodejs.initNode('/talker_node')
//     .then((rosNode) => {
//       // Create ROS publisher on the 'chatter' topic with String message
//       const nh = rosnodejs.nh;
//       const client = nh.serviceClient('/play_song', 'hongdo_ros_speak/PlaySong');
//       // let count = 0;
//       // const sequence = new hongdo_ros_speak.PlaySong();
//       // sequence = 1;
//       client.call({sequence : 1})
//       // rosnodejs.log.info('['+ response + ']')
//     });
// }

// function opnecv_capture() {
//   // Register node with ROS master
//   rosnodejs.initNode('/opencv_capture_node')
//     .then((rosNode) => {
//       const nh = rosnodejs.nh;
//       const client = nh.serviceClient('/capture', 'std_srvs/Trigger');
//       client.call()
//     });
// }

// function handshake_service() {
//   // Register node with ROS master
//   rosnodejs.initNode('/handshake_node')
//     .then((rosNode) => {
//       const nh = rosnodejs.nh;
//       const client = nh.serviceClient('/capture', 'std_srvs/Trigger');
//       client.call()
//     });
// }






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
  })


  app.get('/index.html', (req,res) =>{
    res.sendFile(__dirname+'/index.html');
  })

  app.get('/select_effect.html', (req,res) =>{
    res.sendFile(__dirname+'/select_effect.html');
  })


  app.get('/upload.html', (req,res) =>{
    // talker_service();

    // delete saved image
    // const { exec } = require("child_process")
    // exec(`roscd hongdo_ros_web && cd scripts/public/img/uploads && rm -f model.jpg && rm -f hi.png && rm -f Alimage.png`,async(err, stdout, stderr) => {
    //   if(err) console.error(err)
    //   console.log(stdout)
    // })

    res.sendFile(__dirname+'/upload.html');
  })

  app.get('/taking_pic.html', (req,res) =>{
    res.sendFile(__dirname+'/taking_pic.html');
    // opnecv_capture();
    //사진 저장 후 경로 public/img/uploads  파일명 : model.jpg 
  })


  app.get('/select_pic.html', (req,res) =>{
    res.sendFile(__dirname+'/select_pic.html');
    
  })


  app.get('/loading.html', (req,res) =>{
    // handshake_service();
    // drawing motion 

    

    // const { exec } = require("child_process")
    // exec(`cd /Users/geseuteu/Documents/UI_HTML/hongdo_ros_web/scripts/public/img/uploads && python3.8 vision.py`,async(err, stdout, stderr) => {
    //   if(err) console.error(err)
    //   console.log(stdout)
    // })

    res.sendFile(__dirname+'/loading.html');

  })

  app.get('/QR_make.html', (req,res) => {
    // imgbbUploader("e4422a3845100fe670775736ffd0e7cb", '/home/jeonghan/catkin_ws/src/hongdo_ros/hongdo_ros_web/scripts/public/img/uploads/hi.png'). then((response)=>
    //   url_service(JSON.stringify(response.url))
    // )
    // .catch((error) => 
    //   console.error(error)
    // );
    res.sendFile(__dirname+'/QR_make.html');
  })


  app.get('/drawn.html', (req,res) =>{
    // let readFile = fs.readFileSync('/Users/geseuteu/Documents/UI_HTML/hongdo_ros_web/scripts/public/img/uploads/hi.png');
    // imgbbUploader("e4422a3845100fe670775736ffd0e7cb", "/Users/geseuteu/Documents/UI_HTML/hongdo_ros_web/scripts/public/img/uploads/hi.png")
    // .then((response) => 
    //   console.log(response.url)
    // )
    // .catch((error) => 
    //   console.error(error)
    // );

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

  app.get('/game_touch.html', (req,res) =>{
    res.sendFile(__dirname+'/game_touch.html');
  })


  // Invoke Main Talker Function

}
