# Generated by Django 4.2 on 2023-04-26 19:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_remove_event_location_event_location'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='genre',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
