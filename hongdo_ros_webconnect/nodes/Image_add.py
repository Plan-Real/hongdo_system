import cv2
import numpy as np

def Image_add(img_fg_path, img_bg_path):
#--① 합성에 사용할 영상 읽기, 전경 영상은 4채널 png 파일
    img_fg = cv2.imread(img_fg_path, cv2.IMREAD_UNCHANGED)
    img_bg = cv2.imread(img_bg_path)

    #--② 알파채널을 이용해서 마스크와 역마스크 생성
    _, mask = cv2.threshold(img_fg[:,:,3], 1, 255, cv2.THRESH_BINARY)
    mask_inv = cv2.bitwise_not(mask)

    #--③ 전경 영상 크기로 배경 영상에서 ROI 잘라내기
    img_fg = cv2.cvtColor(img_fg, cv2.COLOR_BGRA2BGR)
    h, w = img_fg.shape[:2]
    roi = img_bg[0:h, 0:w ]

    #--④ 마스크 이용해서 오려내기
    masked_fg = cv2.bitwise_and(img_fg, img_fg, mask=mask)
    # masked_word = masked_fg[650:650, 651:680]
    masked_fg_words = masked_fg[642: ,:]
    masked_fg = masked_fg[0:650,0:650]
    mask_small= mask_inv[0:650, 0:650]
    masked_bg = cv2.bitwise_and(roi, roi, mask=mask_small)
    # masked_result = cv2.hconcat([masked_bg,masked_word])


    # print('masked_fg.shape', img_fg.shape)
    #--⑥ 이미지 합성
    added = masked_fg + masked_bg
    added = added[0:642, :]
    # print('masked_fg.shape', added.shape)
    masked_result = cv2.vconcat([added,masked_fg_words])
    return masked_result
# print('masked_fg.shape', masked_result.shape)
    # imsave()
# cv2.imshow('masked_result', masked_result)
# cv2.waitKey()
# cv2.destroyAllWindows()