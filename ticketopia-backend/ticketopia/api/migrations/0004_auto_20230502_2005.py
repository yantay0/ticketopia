# Generated by Django 3.2 on 2023-05-02 14:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_category_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='location',
            name='dance_floor_capacity',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='location',
            name='has_dance_floor',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='location',
            name='has_seating_area',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='location',
            name='seating_area_capacity',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='location',
            name='seating_area_rows',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
