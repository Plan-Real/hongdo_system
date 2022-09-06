#!/usr/bin/env python3
from turtle import position
import rospy
from std_msgs.msg import String
from std_msgs.msg import Float64MultiArray  
from std_msgs.msg import Bool
from sol_msg.msg import track
from geometry_msgs.msg import Twist

class listen:
    def __init__(self):

        self.x=0
        self.stop=0

        rospy.Subscriber('tracker', track, self.callback)
        rospy.Subscriber('stop', Bool, self.callback2)

        if self.stop:
            self.cmd(0,0)
        
        else:
            if self.x <260:
                rospy.loginfo('turn right')
                self.cmd(0, -0.1) 

            elif self.x <410:
                rospy.loginfo('go')
                self.cmd(0.1,0)
    
            else:
                rospy.loginfo('turn left')
                self.cmd(0, 0.1)

    def callback(self,data):
        self.x=data.position[0]


    def callback2(self, data):
        self.stop=data.data
        
    def cmd(self, linear, angular):

        pub=rospy.Publisher("cmd_vel", Twist, queue_size=10)
        cmd_msg=Twist()
        cmd_msg.linear.x=linear
        cmd_msg.linear.y=0
        cmd_msg.linear.z=0
        cmd_msg.angular.x=0
        cmd_msg.angular.y=0
        cmd_msg.angular.z=angular
        pub.publish(self.cmd_msg)
    
    def loop(self):
        rospy.logwarn("Starting Loop...")
        rospy.spin()
    
if __name__ == '__main__':
    rospy.init_node('listener', anonymous=True)
    mylisten=listen()
    mylisten.loop()