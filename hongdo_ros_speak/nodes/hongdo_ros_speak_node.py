#!/usr/bin/env python


from hongdo_ros_speak.srv import PlaySong, PlaySongResponse
import rospy
import os

class hongdorosSpeakNode:
    def __init__(self):
        rospy.Service('play_song', PlaySong, self.play_song_handle)
        print('[info] Ready to receive sequence')
        rospy.on_shutdown(self.__del__)

    def play_song_handle(self, req):
        print("[info] Returning %s"%req.sequence)
        os.system("play /home/jeonghan/catkin_ws/src/hongdo_ros/hongdo_ros_speak/speak/%s.mp3"%req.sequence)
        return PlaySongResponse()

    def main(self):
        rospy.spin()

    def __del__(self):
        print("[info] terminating hongdo_ros_speak_node")
        # print("[info] Shutting down")

if __name__ == "__main__":
    rospy.init_node('hongdo_ros_speak_node')
    node = hongdorosSpeakNode()
    node.main()
