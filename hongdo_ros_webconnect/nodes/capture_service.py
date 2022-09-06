#!/usr/bin/env python3

import cv2
import rospy
import rospkg
# from std_msgs.msg import Int16
from std_srvs.srv import Trigger, TriggerResponse

class fileRoot(object):
    pkg_path = rospkg.RosPack()
    path = pkg_path.get_path('hongdo_ros_web')

class hongdorosCameraNode:
    def __init__(self):
        
        rospy.Service('/capture', Trigger, self.capture_order)
        # self.opencvStart()
        rospy.loginfo('Ready to capture order')
        rospy.on_shutdown(self.__del__)

    def capture_order(self, req):
        self.opencvStart()
        rospy.loginfo('caputre finish')
        return TriggerResponse()

    def opencvStart(self):
        rospy.sleep(0.05)
        cap = cv2.VideoCapture(4)                       # 0번 카메라 연결
        if cap.isOpened() :
            rospy.loginfo('camera is connected')
            while True:
                rospy.sleep(0.45)
                ret, frame = cap.read()                 # 카메라 프레임 읽기
                if ret:
                    cv2.imshow('camera',frame)          # 프레임 화면에 표시
                    cv2.imwrite(fileRoot.path+'/scripts/public/img/uploads/model.jpg', frame) # 프레임을 'photo.jpg'에 저장
                    rospy.loginfo('capture success')
                    break
                else:
                    rospy.logwarn('no frame!')
                    break
        else:
            rospy.logwarn('no camera!')
        cap.release()
        cv2.destroyAllWindows()

    def main(self):
        rospy.spin()

    def __del__(self):
        print("[info]terminating hongdo_ros_capture_node")



if __name__ == '__main__':
    rospy.init_node('hongdo_ros_catprue_node', anonymous=True)
    node= hongdorosCameraNode()
    node.main()