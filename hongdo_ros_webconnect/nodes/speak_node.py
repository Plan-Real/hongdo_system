#!/usr/bin/env python


import string
from hongdo_ros_webconnect.srv import PlaySong, PlaySongResponse
import rospy
import rospkg
import os

class fileRoot(object):
    pkg_path = rospkg.RosPack()
    path = pkg_path.get_path('hongdo_ros_webconnect')

class hongdorosSpeakNode:
    def __init__(self):
        rospy.Service('play_song', PlaySong, self.play_song_handle)
        rospy.loginfo('Ready to receive sequence')
        rospy.on_shutdown(self.__del__)

    def play_song_handle(self, req):
        rospy.loginfo("Returning %s"%req.sequence)
        os.system("play " + fileRoot.path + "/speak/%s.mp3"%req.sequence)
        return PlaySongResponse('finish')

    def main(self):
        rospy.spin()

    def __del__(self):
        print("[info]terminating hongdo_ros_speak_node")
        # print("[info] Shutting down")

if __name__ == "__main__":
    rospy.init_node('hongdo_ros_speak_node')
    node = hongdorosSpeakNode()
    node.main()
