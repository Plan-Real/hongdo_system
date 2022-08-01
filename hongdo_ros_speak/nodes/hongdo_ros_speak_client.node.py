#!/usr/bin/env python

import rospy
from hongdo_ros_speak.srv import PlaySong, PlaySongRequest

class SpeakClientNode:
    def __init__(self):
        sequence = 1
        self.play_song_client(sequence)
        rospy.on_shutdown(self.__del__)

    def play_song_client(self, number):
        rospy.wait_for_service('play_song')
        try:
            play_song = rospy.ServiceProxy('play_song',PlaySong)
            return play_song(number)
        except rospy.ServiceException as e:
            print("Service call failed: %s"%e)
    def main(self):
        rospy.spin()

    def __del__(self):
        print("[info] terminating hongdo_ros_client_node")
        # print("[info] Shutting down")

if __name__ == "__main__":
    rospy.init_node('hongdo_ros_speak_client_node')
    node = SpeakClientNode()
    node.main()