#! /usr/bin/env python3

"""
2D Lidar Subscriber example

referenced from wiki.ros.org

url: http://wiki.ros.org/ROS/Tutorials/WritingPublisherSubscriber%28python%29
"""

import rospy
from sensor_msgs.msg import LaserScan
from std_msgs.msg import Bool


def callback(data):
    st=0
    print(data.ranges[360])
    
    for i in range(90,360,2):
        if data.ranges[i] < 0.8 and data.ranges[i] > 0.12:
            st=1
    if st:
        pub(1)
        print('stop: 1')
    else:
        pub(0)
        print('stop: 0')
            
def pub(data):
    pub=rospy.Publisher("stop", Bool, queue_size=10)
    pub.publish(data)

rospy.loginfo(
    "==== Laser Scan Subscriber node Started, move forward during 10 seconds ====\n"
)

rospy.init_node("laser_scan")
sub = rospy.Subscriber("/scan", LaserScan, callback)
rospy.spin()