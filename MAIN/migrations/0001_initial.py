# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-09-21 12:50
from __future__ import unicode_literals

import colorfield.fields
from django.db import migrations, models
import django.db.models.deletion
import mezzanine.core.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('pages', '0003_auto_20150527_1555'),
    ]

    operations = [
        migrations.CreateModel(
            name='Projet',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='pages.Page')),
                ('content', mezzanine.core.fields.RichTextField(verbose_name='Content')),
                ('color', colorfield.fields.ColorField(default='#FFFFFF', max_length=10)),
                ('illustration_square', mezzanine.core.fields.FileField(blank=True, max_length=255, verbose_name='Image')),
                ('illustration_banner', mezzanine.core.fields.FileField(blank=True, max_length=255, verbose_name='Image')),
                ('baseline', models.CharField(blank=True, max_length=255, null=True)),
                ('highlight', models.BooleanField(default=False)),
            ],
            options={
                'ordering': ('_order',),
            },
            bases=('pages.page', models.Model),
        ),
        migrations.CreateModel(
            name='ProjetCaption',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', mezzanine.core.fields.FileField(max_length=255, verbose_name='Image')),
                ('description', models.TextField(blank=True, null=True)),
                ('Projet', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='MAIN.Projet')),
            ],
            options={
                'verbose_name': 'Captions',
            },
        ),
    ]
