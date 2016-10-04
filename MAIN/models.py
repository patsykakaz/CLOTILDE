#-*- coding: utf-8 -*-

from __future__ import unicode_literals

from django.db import models
from django.contrib.sites.models import *
from django.utils.translation import ugettext, ugettext_lazy as _

from settings import MEDIA_ROOT
from mezzanine.pages.models import Page
from mezzanine.core.models import RichText
from mezzanine.core.fields import RichTextField, FileField
from mezzanine.utils.sites import current_site_id, current_request
from mezzanine.utils.models import upload_to
from colorfield.fields import ColorField


class Projet(Page,RichText):
    color = ColorField(default='#FFFFFF')
    illustration_square = FileField(verbose_name=_("Square"),
        upload_to=upload_to("MAIN.Square", "Square"),
        format="Image", max_length=255, null=False, blank=True)
    illustration_banner = FileField(verbose_name=_("Banner"),
        upload_to=upload_to("MAIN.Banner", "Banner"),
        format="Image", max_length=255, null=False, blank=True)
    baseline = models.CharField(max_length=255,null=True, blank=True)
    highlight = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        # in_menus empty pour exclure les archives des content_tree
        try: 
            parent = Page.objects.get(title='PROJETS')
            self.parent = parent
        except: 
            pass
        if self.highlight and not self.illustration_banner:
            self.highlight = False
        super(Projet, self).save(*args, **kwargs)

class ProjetCaption(models.Model):
    Projet = models.ForeignKey("Projet")
    image = FileField(verbose_name=_("Image"),
        upload_to=upload_to("MAIN.Projet", "Projet"),
        format="Image", max_length=255)
    description = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name = 'Captions'


