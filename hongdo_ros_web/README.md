# Hongdo robot : Ansan Mascot Promotional Robot
main project | https://github.com/Hanyang-WAB/hongdo_system <br><br>

# hongdo_ros_web
## Description
hongdo_ros_web is a web-based user interfaces of a screen to be displayed on a HongDo robot's display. 
  * **Web-Based**: For the system linking of the display and the HongDo robot, we used Nodejs to connect ROS and WEB. The rosnodejs, a node modules, provided us with the easier way of connecting.
  By implementing web framework, it is possible to create more designed and more diverse features than other frameworks such as QR creators.
  * **Design concept**: Since the background Hongdo came from the past, the overall design concept is traditional Korean style. The background was set with a design that felt like Korean paper, and the content was composed with the concept of painting. The copyright for the desgin fo the character is in the Ansan Cultural Foundation.
  * **Contents**: Kim Hong-do, who bacame the motivation of the character, was a painter, so the main content is to convert photos into pictures. The entire conversion process used the open source AI project in Github. This content is to take pictures of participants at the venue and convert them into pictures, and does not have portrait rights for participant's photos.

## Installation
### Requirements

For development, you will only need Node.js and do npm init.

#### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.15.1

    $ npm --version
    8.13.2

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g
    
After entire installations, you just run the following command in the dircetory where README.md is located.

    $ npm init
    
### Getting Started

#### open Server

- #### ROS & nodejs
    If you want to see the web connected to the robot (for example, the robot moves its arms on the drawing page), run the following command.

        $ rosrun hongdo_ros_web talker.js

- #### Only nodejs
    If you want to see how it works on the web (if you want to test if), run the following command.
        
        $ node scripts/nam.js
        

After you open the server, go to the following address to check the web page.
    
    https://localhost:5000/intro.html
    
#### Browser support

we recommand running with the latest Chrome browser. Currently, the version of Chrome we used is **version 105.0.5195.125 (official build) (arm64)**. and it is not recommended to use too old versions. 

## License

All copyrights of "홍이와 먹이" belong to the Ansan Cultural Foundation, and all content related to "홍이와 먹이" character cannot be used without permission from the foundation. All copyrights related to the web page belong to us, So personal possessions or personal modifications are possible without permission to give.
