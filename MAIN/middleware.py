#-*- coding: utf-8 -*-

from __future__ import unicode_literals

from django.conf import settings
from django.http import HttpResponse, HttpResponseRedirect

from mezzanine.conf import settings
from models import *


class IndexMiddleware(object):
    def process_template_response(self, request, response):
        highlights = Projet.objects.filter(highlight=True)
        squares = Projet.objects.filter(illustration_banner="")
        banners = Projet.objects.exclude(illustration_banner="")
        projets = []
        i = 1
        t = 0
        while i < (len(squares)+len(banners)):
            if i % 3 == 0:
                t += 1
                try: 
                    projets.append([banners[i/3 -1], 'banner', t ])
                    t += 1
                except:
                    break
            else:
                try: 
                    projets.append([squares[i-i/3-1], 'square', t])
                except:
                    break
            i +=1
        print projets
        response.context_data['highlights'] = highlights
        response.context_data['projets'] = projets
        return response
