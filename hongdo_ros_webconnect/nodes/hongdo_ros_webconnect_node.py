#!/usr/bin/env python3
import string
import cv2
import rospy
import rospkg
from std_srvs.srv import Trigger, TriggerResponse
from hongdo_ros_webconnect.srv import UrlTunnel, UrlTunnelResponse
from hongdo_ros_webconnect.srv import PlaySong, PlaySongResponse
from PIL import Image
import qrcode
import os

class fileRoot(object):
    pkg_path = rospkg.RosPack()
    webconnect = pkg_path.get_path('hongdo_ros_webconnect')
    web = pkg_path.get_path('hongdo_ros_web')

class Qrmake():
    _character_path = None
    _save_path = None

    def __init__(self, character_path, save_path):
        self._character_path = character_path
        self._save_path = save_path

    def url_connect(self, req):
        rospy.loginfo("Node is making QR")
        rospy.loginfo("Returning : " + req.url)
        hongdo_img = Image.open(self._character_path) 
        #character image open
        hongdo_img.thumbnail((60,60))
        qr=qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_H)
        qr.add_data(req.url)
        #qr data save
        qr.make()
        hongdo_qr = qr.make_image().convert('RGB')
        pos = ((hongdo_qr.size[0] - hongdo_img.size[0]) //2, (hongdo_qr.size[1]-hongdo_img.size[1])//2)
        hongdo_qr.paste(hongdo_img, pos)
        hongdo_qr.save(self._save_path) 
        return UrlTunnelResponse(True)

    def __del__(self):
        self._character_path=None
        self._save_path = None

class OpencvWebcam():
    _save_path=None
    _AI_path=None
    _number=None

    def __init__(self, save_path, AI_path):
        self._number=0
        self._save_path = save_path
        self._AI_path = AI_path

    def capture(self, req):
        self._number += 1
        rospy.sleep(0.05)
        cap = cv2.VideoCapture(4)                       # 0번 카메라 연결
        if cap.isOpened() :
            rospy.loginfo('camera is connected')
            while True:
                rospy.sleep(0.6)
                ret, frame = cap.read()                 # 카메라 프레임 읽기
                if ret:
                    cv2.imshow('camera',frame)          # 프레임 화면에 표시
                    cv2.imwrite(self._save_path+'/{0}.jpg'.format(self._number), frame) # 프레임을 'photo.jpg'에 저장
                    cv2.imwrite(self._AI_path+'/model.jpg', frame)
                    rospy.loginfo('capture success')
                    break
                else:
                    rospy.logwarn('no frame!')
                    break
        else:
            rospy.logwarn('no camera!')
        cap.release()
        cv2.destroyAllWindows()
        rospy.loginfo("caputre finish")
        return TriggerResponse(True, 'finish')
    
    def __del__(self):
        self._save_path=None
        self._AI_path=None
        self._number=None

class SoundStart:
    _voice_path=None
    _sound_path=None

    def __init__(self, vocie_path = None, sound_path = None):
        self._voice_path=vocie_path
        self._sound_path=sound_path

    def play_voice(self, req):
        rospy.loginfo("voice :  %s"%req.sequence)
        os.system('play ' + self._voice_path +'/%s.mp3'%req.sequence)
        return PlaySongResponse('finish')

    def play_sound(self,req):
        rospy.loginfo("background sound :  %s"%req.sequence)
        os.system('play ' + self._sound_path +'/%s.mp3'%req.sequence)
        return PlaySongResponse('finish')

    def __del__(self):
        self._voice_path=None
        self._sound_path=None

class hongdorosWebconnectNode:
    def __init__(self):
        character_path=fileRoot.webconnect + '/images/hongdo.png'
        qr_save_path=fileRoot.web + '/scripts/public/img/uploads/AIimage.png'
        opencv_save_path=fileRoot.web + '/scripts/public/hongdo_AI/origin_image'
        AI_save_path=fileRoot.web + '/scripts/public/hongdo_AI/AI_input'
        voice_path = fileRoot.webconnect + '/speak/voice'
        sound_path = fileRoot.webconnect + '/speak/sound'

        self.qr_make=Qrmake(character_path,qr_save_path)
        self.opencv_webcam=OpencvWebcam(opencv_save_path,AI_save_path)
        self.sound_start=SoundStart(voice_path, sound_path)

        ##service
        rospy.Service('/make_qr', UrlTunnel, self.qr_make.url_connect)
        rospy.Service('/capture', Trigger, self.opencv_webcam.capture)
        rospy.Service('/play_song', PlaySong, self.sound_start.play_sound)
        rospy.Service('/play_voice', PlaySong, self.sound_start.play_voice)
        
        # self.opencvStart()
        rospy.loginfo('Ready to capture order')
        rospy.on_shutdown(self.__del__)

    def main(self):
        rospy.spin()

    def __del__(self):
        print("[info]terminating hongdo_ros_capture_node")



if __name__ == '__main__':
    rospy.init_node('hongdo_ros_catprue_node', anonymous=True)
    node= hongdorosWebconnectNode()
    node.main()