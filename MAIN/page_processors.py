# from django import forms
# from django.http import HttpResponse, HttpResponseRedirect
# from django.shortcuts import render, redirect
from mezzanine.pages.page_processors import processor_for
from .models import *

# from mezzanine.core.request import current_request

@processor_for(Projet)
def processor_projet(request, page):
    projet = Projet.objects.get(pk=page.pk)
    projet.captions = ProjetCaption.objects.filter(projet=projet)
    try: 
        next_projet = Projet.objects.filter(pk__gt=(projet.pk+1))
        next_projet = next_projet[0]
    except:
        previous_projet = Projet.objects.order_by('-pk')
        previous_projet = previous_projet[0]
    return locals()


