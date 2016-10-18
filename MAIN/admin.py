#-*- coding: utf-8 -*-

from copy import deepcopy
from django.contrib import admin
from mezzanine.pages.admin import PageAdmin
from .models import *

from mezzanine.blog.admin import BlogPostAdmin
from mezzanine.blog.models import BlogPost


class ProjetCaptionInline(admin.TabularInline):
    model = ProjetCaption
    extra = 5

projet_fieldsets = deepcopy(PageAdmin.fieldsets)
projet_fieldsets[0][1]["fields"].insert(-1, "color")
projet_fieldsets[0][1]["fields"].insert(-1, "illustration_square")
projet_fieldsets[0][1]["fields"].insert(-1, "illustration_banner")
projet_fieldsets[0][1]["fields"].insert(-1, "baseline")
projet_fieldsets[0][1]["fields"].insert(-1, "content")
projet_fieldsets[0][1]["fields"].insert(-1, "highlight")
projet_fieldsets[0][1]["fields"].insert(-1, "designer")
class ProjetAdmin(PageAdmin):
    fieldsets = projet_fieldsets
    inlines = (ProjetCaptionInline,)


admin.site.register(Projet, ProjetAdmin)
