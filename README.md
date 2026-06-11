# Hongdo Robot

Hongdo is an Ansan mascot promotional robot developed by Team PlanR at Hanyang University.
It is an HRI-focused robot system for public events: the robot moves through event spaces, detects visitors, speaks with them, and provides a web-based photo-to-art interaction experience.

Project page: https://plan-real.github.io/hongdo_system/

## Overview

Hongdo combines ROS-based robot control, lidar obstacle handling, web-based user interaction, and AI image conversion.

Main features:

- ROS bringup for robot, motors, TF, lidar, and web connection
- Browser-based robot display UI
- Visitor photo capture and AI style conversion flow
- URDF and mesh description for the robot model
- Dynamixel and mobile base integration

## Repository Structure

| Package | Description |
| --- | --- |
| `hongdo_ros_bringup` | Main launch files for robot, motor, model, and web connection |
| `hongdo_ros_web` | Browser-based event UI shown on the robot display |
| `hongdo_ros_webconnect` | ROS-Web bridge nodes, capture, QR, speech, and service logic |
| `hongdo_ros_obstacle` | Lidar driver and obstacle detection logic |
| `hongdo_ros_description` | URDF, xacro, RViz config, and robot meshes |
| `hongdo_ros_dynamixel` | Dynamixel workbench packages and joint control |
| `hongdo_ros_teleop` | Keyboard teleoperation package |
| `hongdo_ros_tf2_broadcaster` | TF broadcaster examples and sensor transform demos |

## Installation

```bash
git clone https://github.com/Plan-Real/hongdo_system.git
cd hongdo_system/build_dependecy

sudo ./build.sh
sudo ./create_udev_rules.sh
```

## Run

Robot bringup:

```bash
roslaunch hongdo_ros_bringup hongdo_ros_robot.launch
```

Web connection:

```bash
roslaunch hongdo_ros_webconnect hongdo_ros_webconnect.launch
```

Web UI:

```bash
rosrun hongdo_ros_web talker.js
```

For web-only testing:

```bash
cd hongdo_ros_web
node scripts/nam.js
```

Then open:

```text
http://localhost:5000/intro.html
```

## References

AI image conversion references:

- [animegan2-pytorch](https://github.com/bryandlee/animegan2-pytorch)
- [Sketch Generation with Drawing Process Guided by Vector Flow and Grayscale](https://github.com/TZYSJTU/Sketch-Generation-with-Drawing-Process-Guided-by-Vector-Flow-and-Grayscale)
- [ArtLine](https://github.com/vijishmadhavan/ArtLine)

Human detection reference:

- [YOLOv5](https://github.com/ultralytics/yolov5)

## License

Robot character and related design rights follow the original project notes and Ansan Cultural Foundation restrictions.
Source code is provided under the licenses included in this repository.
