# Hongdo robot : Ansan Mascot Promotional Robot

## project Team : W.A.B

### Member : 
[김정한(Jeonghan Kim)](https://github.com/jeong-han-kim), [남윤재(Yunjea Nam)](https://github.com/ujma1234), 이왕건(Wanggeon Lee), 박수환(Suhwan Park), [박종찬(Jongchan Park)](https://github.com/coldbell8918), 김새벽(Saebyeok Kim), 김다현(Dahyun Kim), [이하연(Hayeon Lee)](https://github.com/quokkalover)Cancel changes

---

#### Robot Hardware Developer : 

이왕건(Wanggeon Lee), 박수환(Suhwan Park)

contact : dldhkdrjs2@hanyang.ac.kr, uni3967@hanyang.ac.kr

#### Robot Software Developer :

[김정한(Jeonghan Kim)](https://github.com/jeong-han-kim),  [박종찬(Jongchan Park)](https://github.com/coldbell8918), [이하연(Hayeon Lee)](https://github.com/quokkalover), 김다현(Dahyun Kim)

#### web Developer:

[남윤재(Yunjea Nam)](https://github.com/ujma1234) 

#### Robot Designer : 

김새벽(Saebyeok Kim)

contact : iam_midnight@naver.com

---

### 

## Abstract

홍도 로봇은 HRI 관점을 강조한 로봇이다. 홍도는 자유롭게 광장을 돌아다니며 사람과 상호작용을 한다. 사람을 탐지하면 사람에게 다가가고 사람에게 말을 건다. 행사에 어울리는 UI가 제작되어 사람은 UI를 통해 로봇과 상호작용한다. 사람들은 UI에서 자신의 사진촬영을 할수 있고 여러 인공지능 기술을 통해 그러한 사진들을 다양한 모습으로 변환시켜준다.

The Hongdo robot is a robot that emphasizes the HRI perspective. Hongdo freely travels around the square and interacts with people. When you detect people, you approach them and talk to them. UI suitable for the event is produced, and humans interact with robots through UI. People can take pictures of themselves in the UI and convert them into various Character through various artificial intelligence technologies.

##### Festival photos and videos

![kakaotalk_1664012771411 (1) (1) (1)](https://user-images.githubusercontent.com/98142496/192100213-434298d9-2b1d-484d-a7c5-c4f32bebdeb7.gif)

<img src="https://user-images.githubusercontent.com/98142496/192099659-0172cb13-8c62-4199-8551-1cbf48f1827f.jpg" width="270" height="360"/>  <img src="https://user-images.githubusercontent.com/98142496/192099662-f4a619b8-fc9d-4ac7-97b2-509584ee4d85.jpg" width="480" height="360"/>




## Hardware system :

### Design


<img src="https://user-images.githubusercontent.com/98142496/192099216-b592f7ad-1079-46f9-9144-1aaa22e744a5.png" width="360" height="540"/> <img src="https://user-images.githubusercontent.com/98142496/192100569-c13b93d8-5193-4cb3-9acb-14f82dbc4cf1.png" width="360" height="480"/>

### Architecture

![omorobot_system](https://user-images.githubusercontent.com/98142496/192099227-008ed8e3-2eb9-4550-b3aa-bb648ad3f12f.png)





## Software system :

### NUC System
#### web
If you are curious about the contents related to the web, click this link.
[hongdo_ros_web](https://github.com/Hanyang-WAB/hongdo_system/tree/hongdo_master/hongdo_ros_web)

#### AI

| **Input model**                                              | **Output model 1**                                           |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![model](https://user-images.githubusercontent.com/98142496/192099320-d95b1a7d-dde2-4015-a8bc-bd2ef13b64d8.png)                                                             |    ![trained_model](https://user-images.githubusercontent.com/98142496/192099348-fc619ba1-7be5-4d63-9316-f5be57372f74.png)                                                          |
|                                                              | [Vijish Madhavan of Artline](https://github.com/vijishmadhavan/ArtLine) |
|                      **Output model 2**                      |                         **Output model 3**                   |
|                                                              |    
![result_RGB](https://user-images.githubusercontent.com/98142496/192099371-f28bf4e0-4e86-4063-ac9c-153722ae81eb.jpg)                                                          | ![trained_model (1)](https://user-images.githubusercontent.com/98142496/192099561-dddc295a-bfce-4a5c-9661-9fed31a27ceb.png)
| [Sketch Generation with Drawing Process Guided by Vector Flow and Grayscale](https://github.com/TZYSJTU/Sketch-Generation-with-Drawing-Process-Guided-by-Vector-Flow-and-Grayscale) | [animegan2-pytorch](https://github.com/bryandlee/animegan2-pytorch) |

### Jetson System



## How To Do:

### Install dependency

- G2 lidar package

##### Methods for installing most dependencies

```
git clone https://github.com/Hanyang-WAB/hongdo_system.git
cd bulid_dependency
sudo ./build.sh
sudo ./create_udev_rules.sh
```



### launch on NUC

1. bringup

   ```
   roslaunch hongdo_ros_bringup hongdo_ros_robot.launch
   ```

2. webconnect

   ```
   roslaunch hongdo_ros_webconnect hongdo_ros_webconnect.launch
   ```

3. web

   ```
   rosun hongdo_ros_web talker.js
   ```

   

## reference :

##### AI(Convert image) : 

[animegan2-pytorch](https://github.com/bryandlee/animegan2-pytorch)

[Sketch-Generation-with-Drawing-Process-Guided-by-Vector-Flow-and-Grayscale](https://github.com/TZYSJTU/Sketch-Generation-with-Drawing-Process-Guided-by-Vector-Flow-and-Grayscale)

[ArtLine](https://github.com/vijishmadhavan/ArtLine)

##### Human detecting : 

[yolov5](https://github.com/ultralytics/yolov5)

