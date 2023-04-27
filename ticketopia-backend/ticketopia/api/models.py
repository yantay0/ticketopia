from django.contrib.auth.models import AbstractUser
from django.db import models
from django.contrib.auth import get_user_model
from django.utils.translation import ugettext_lazy as _

User = get_user_model()


# class CustomUser(AbstractUser):
#     username = None
#     email = models.EmailField(_('email address'), unique=True)
#
#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = []
#
#     def __str__(self):
#         return self.email


class Category(models.Model):
    MOVIES = 'Movie'
    CONCERTS = 'Concerts'
    THEATRE = 'Theatre'

    CATEGORY_CHOICES = (
        (MOVIES, 'Movies'),
        (CONCERTS, 'Concerts'),
        (THEATRE, 'Theatre')
    )

    name = models.CharField(max_length=255, choices=CATEGORY_CHOICES, unique=True)
    user = models.ForeignKey(User,
                             on_delete=models.CASCADE,
                             null=True,
                             blank=True)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def __str__(self):
        return f'{self.id} : {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }


class Location(models.Model):
    name = models.CharField(max_length=255)
    city = models.CharField(max_length=255, default=None)
    address = models.CharField(max_length=255)

    class Meta:
        verbose_name = 'Location'
        verbose_name_plural = 'Locations'

    def __str__(self):
        return f'{self.id} : {self.name} : {self.address}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'address': self.name
        }


class Event(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    premiere_date = models.DateField()
    age_rating = models.CharField(max_length=3)
    location = models.ForeignKey(Location, on_delete=models.CASCADE, null=True)
    duration = models.IntegerField(default=0)
    poster = models.CharField(max_length=255, null=True, default="soon.png", verbose_name='Poster URL')
    quantity = models.IntegerField(default=0)
    category = models.ForeignKey(Category, on_delete=models.PROTECT, related_name="events")
    genre = models.CharField(max_length=255, null=True)

    class Meta:
        verbose_name = 'Event'
        verbose_name_plural = 'Events'

    def __str__(self):
        return f'{self.id} : {self.name} : {self.category}: {self.genre}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'premiere_date': self.premiere_date,
            'age_rating': self.age_rating,
            # 'location': self.location,
            'poster': self.poster,
            'quantity': self.quantity,
            'category': self.category.to_json(),
            'genre': self.genre
        }


class Ticket(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name="tickets")
    row = models.CharField(max_length=10)
    seat = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    ticket_type = models.CharField(max_length=255)

    class Meta:
        verbose_name = 'Ticket'
        verbose_name_plural = 'Tickets'

    def str(self):
        return f'{self.id} : {self.event} :  {self.row} : {self.seat} :{self.price} : {self.ticket_type}'

    def to_json(self):
        return {
            'id': self.id,
            'event': self.event,
            'row': self.row,
            'seat': self.seat,
            'price': self.price,
            'ticket_type': self.ticket_type
        }
