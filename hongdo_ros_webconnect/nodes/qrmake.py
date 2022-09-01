#!/usr/bin/env python

import string
import rospy
import rospkg
from hongdo_ros_webconnect.srv import UrlTunnel, UrlTunnelResponse
from PIL import Image
import qrcode

class fileRoot(object):
    pkg_path = rospkg.RosPack()
    loadpath = pkg_path.get_path('hongdo_ros_webconnect')
    savepath = pkg_path.get_path('hongdo_ros_web')

class hongdorosQrmakeNode():
    def __init__(self):
        # self.qrhongdo('www.naver.com')
        rospy.Service('make_qr', UrlTunnel, self.make_qr)
        rospy.loginfo('Ready to hongdo qrmake')
        
    def make_qr(self, req):
        rospy.loginfo("Returning : " + req.url)
        self.qrhongdo(req.url)
        return UrlTunnelResponse(True)

    def qrhongdo(self, url):
        hongdo_img = Image.open(fileRoot.loadpath + '/images/hongdo.png')
        hongdo_img.thumbnail((60,60))
        qr=qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_H)
        qr.add_data(url)
        qr.make()
        hongdo_qr = qr.make_image().convert('RGB')

        pos = ((hongdo_qr.size[0] - hongdo_img.size[0]) //2, (hongdo_qr.size[1]-hongdo_img.size[1])//2)
        hongdo_qr.paste(hongdo_img, pos)
        hongdo_qr.save(fileRoot.savepath + '/scripts/public/img/uploads/AIimage.png') 

    def main(self):
        rospy.spin()

    def __del__(self):
        print("[info]terminating hongdo_ros_qrmake_node")
        

if __name__ == "__main__":
    rospy.init_node('hongdo_ros_qrmake')
    node = hongdorosQrmakeNode()
    node.main()
