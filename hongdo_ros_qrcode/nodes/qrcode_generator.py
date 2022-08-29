#!/usr/bin/env python3


import string
import rospy
import rospkg
import qrcode
from PIL import Image
from hongdo_ros_qrcode.srv import Url, UrlResponse

class fileRoot(object):
    pkg_path = rospkg.RosPack()
    path = pkg_path.get_path('hongdo_ros_qrcode')

class hongdorosQrcodeNode():
    def __init__(self):
        self.qrhongdo('www.naver.com')
        rospy.Service('make_qr', Url, self.make_qr)
        rospy.loginfo('Ready to hongdo qrcode')
        
    def make_qr(self, req):
        rospy.loginfo("Returning : " + req.url)
        self.qrhongdo(req.url)
        return UrlResponse(True)

    def qrhongdo(self, url):
        hongdo_img = Image.open(fileRoot.path + '/images/hongdo.png')
        hongdo_img.thumbnail((60,60))
        qr=qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_H)
        qr.add_data(url)
        qr.make()
        hongdo_qr = qr.make_image().convert('RGB')

        pos = ((hongdo_qr.size[0] - hongdo_img.size[0]) //2, (hongdo_qr.size[1]-hongdo_img.size[1])//2)
        hongdo_qr.paste(hongdo_img, pos)
        hongdo_qr.save(fileRoot.path + '/images/AIimage.png') 

    def main(self):
        rospy.spin()

    def __del__(self):
        print("[info] Shutting down")

if __name__ == "__main__":
    rospy.init_node('hongdo_ros_speak_node')
    node = hongdorosQrcodeNode()
    node.main()
