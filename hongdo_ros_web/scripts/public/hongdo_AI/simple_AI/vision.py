from distutils.command.config import LANG_EXT
from re import I
import fastai
from fastai.utils.mem import *
from matplotlib.pyplot import show
import numpy as np
import urllib.request
import PIL.Image
from io import BytesIO
import torchvision.transforms as T
from PIL import Image, ImageShow
import requests
from fastai.vision import *
from IPython.display import display
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
from torchvision.utils import save_image
import torchvision.transforms as transforms

class fileRoot(object):
    file_abspath = os.path.abspath(__file__)
    dirpath = os.path.dirname(file_abspath)
    pr_dirpath = os.path.dirname(dirpath)



class FeatureLoss(nn.Module):
    def __init__(self, m_feat, layer_ids, layer_wgts):
        super().__init__()
        self.m_feat = m_feat
        self.loss_features = [self.m_feat[i] for i in layer_ids]
        self.hooks = hook_outputs(self.loss_features, detach=False)
        self.wgts = layer_wgts
        self.metric_names = ['pixel',] + [f'feat_{i}' for i in range(len(layer_ids))
              ] + [f'gram_{i}' for i in range(len(layer_ids))]

    def make_features(self, x, clone=False):
        self.m_feat(x)
        return [(o.clone() if clone else o) for o in self.hooks.stored]
    
    def forward(self, input, target):
        out_feat = self.make_features(target, clone=True)
        in_feat = self.make_features(input)
        self.feat_losses = [base_loss(input,target)]
        self.feat_losses += [base_loss(f_in, f_out)*w
                             for f_in, f_out, w in zip(in_feat, out_feat, self.wgts)]
        self.feat_losses += [base_loss(gram_matrix(f_in), gram_matrix(f_out))*w**2 * 5e3
                             for f_in, f_out, w in zip(in_feat, out_feat, self.wgts)]
        self.metrics = dict(zip(self.metric_names, self.feat_losses))
        return sum(self.feat_losses)
    
    def __del__(self): self.hooks.remove()

_path = fileRoot.dirpath
_pr_dirpath = fileRoot.pr_dirpath

learn=load_learner(_path, 'ArtLine_650.pkl')

# response = PIL.Image.open('./mdoel.jpg')
img = PIL.Image.open(_pr_dirpath + '/input/model.png')
img_t = T.ToTensor()(img)
img_fast = Image(img_t)
# print(img_fast)
p,img_hr,b = learn.predict(img_fast)

# print(img_hr)
#img_last=img_hr.permute(1,2,0)

save_image(img_hr, os.path.join(_pr_dirpath+"/output",'trained_model.png'))

#f=open()
