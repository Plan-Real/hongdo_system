#!/usr/bin/env python3
import cv2
import rospy
from std_msgs.msg import Int16
import rospkg

class fileRoot(object):
    pkg_path = rospkg.RosPack()
    path = pkg_path.get_path('hongdo_ros_webconnect')

def callback(data):
    if data.data==1:
        cap = cv2.VideoCapture(4)                       # 0번 카메라 연결
        if cap.isOpened() :
            while True:
                ret, frame = cap.read()                 # 카메라 프레임 읽기
                if ret:
                    cv2.imshow('camera',frame)          # 프레임 화면에 표시
                    if cv2.waitKey(1) != -1:            # 아무 키나 누르면
                        rospy.sleep(10)
                        cv2.imwrite(fileRoot.path+'images/photo.jpg', frame) # 프레임을 'photo.jpg'에 저장
                        pub(2)
                        break
                else:
                    print('no frame!')
                    break
        else:
            print('no camera!')
        cap.release()
        cv2.destroyAllWindows()

def pub(data):
    pub = rospy.Publisher('mode', Int16, queue_size=10)
    rate=rospy.Rate(10)
    pub.publish(data)

def listener():
    rospy.Subscriber("mode", Int16, callback)
    rospy.spin()

if __name__ == '__main__':
    rospy.init_node('set_image', anonymous=True)
    listener()