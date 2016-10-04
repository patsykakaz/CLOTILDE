# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-09-21 15:07
from __future__ import unicode_literals

from django.db import migrations
import mezzanine.core.fields


class Migration(migrations.Migration):

    dependencies = [
        ('MAIN', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='projet',
            name='color',
        ),
        migrations.AlterField(
            model_name='projet',
            name='illustration_banner',
            field=mezzanine.core.fields.FileField(blank=True, max_length=255, verbose_name='Banner'),
        ),
        migrations.AlterField(
            model_name='projet',
            name='illustration_square',
            field=mezzanine.core.fields.FileField(blank=True, max_length=255, verbose_name='Square'),
        ),
    ]
