import cv2
import numpy as np
import os

class fileRoot(object):
    file_abspath = os.path.abspath(__file__)
    dirpath = os.path.dirname(file_abspath)
    pr_dirpath = os.path.dirname(dirpath)


input_path = fileRoot.pr_dirpath + '/input/model.png'
output_path = fileRoot.pr_dirpath + '/input' 

min_length = 480
img = cv2.imread(input_path, cv2.IMREAD_COLOR)
(h,w,c) = img.shape
if h<w:
    img = cv2.resize(img,(int(min_length*w/h),min_length))
else:
    img = cv2.resize(img,(min_length,int(min_length*h/w)))

cv2.imwrite(output_path + "/model.png", img)
# cv2.imshow('draw', img)
cv2.waitKey(0) 

