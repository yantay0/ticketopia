# Generated by Django 3.2 on 2023-05-03 11:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_auto_20230503_1718'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tickettype',
            name='price',
            field=models.IntegerField(),
        ),
    ]
