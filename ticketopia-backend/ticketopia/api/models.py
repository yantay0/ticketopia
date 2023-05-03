from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Category(models.Model):
    MOVIES = 'Movies'
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


class Location(models.Model):
    name = models.CharField(max_length=255)
    city = models.CharField(max_length=255, default=None)
    address = models.CharField(max_length=255)
    has_seating_area = models.BooleanField(default=False)
    has_dance_floor = models.BooleanField(default=False)
    has_vip_zone = models.BooleanField(default=False)
    dance_floor_capacity = models.IntegerField(null=True, blank=True)
    seating_area_capacity = models.IntegerField(null=True, blank=True)
    seating_area_rows = models.IntegerField(null=True, blank=True)

    class Meta:
        verbose_name = 'Location'
        verbose_name_plural = 'Locations'

    def __str__(self):
        return f'{self.id} : {self.name} : {self.address}'


class Event(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    premiere_date = models.DateField()
    age_rating = models.CharField(max_length=3)
    duration = models.IntegerField(default=0)
    poster = models.CharField(max_length=255, null=True, default="soon.png", verbose_name='Poster URL')
    category = models.ForeignKey(Category, on_delete=models.PROTECT, related_name="events")
    genre = models.CharField(max_length=255, null=True)

    class Meta:
        verbose_name = 'Event'
        verbose_name_plural = 'Events'

    def __str__(self):
        return f'{self.id} : {self.name} : {self.category}: {self.genre}'


class Account(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='account')
    first_name = models.CharField(max_length=255, null=True, blank=True)
    last_name = models.CharField(max_length=255, null=True, blank=True)
    phone_number = models.CharField(max_length=20, null=True, blank=True)
    date_of_birth = models.DateField(null=True, blank=True)

    def __str__(self):
        return f'{self.id} : {self.user} :  {self.first_name} : {self.last_name} : {self.phone_number} : {self.tickets} : {self.date_of_birth}'


class EventLocation(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    location = models.ForeignKey(Location, on_delete=models.CASCADE)
    start_time = models.DateTimeField()
    tickets_quantity_dance_floor = models.IntegerField(default=0)
    tickets_quantity_vip_zone = models.IntegerField(default=0)
    tickets_quantity_seating_area = models.IntegerField(default=0)

    def total_tickets_quantity(self):
        return self.tickets_quantity_dance_floor + self.tickets_quantity_vip_zone + self.tickets_quantity_seating_area


class TicketType(models.Model):
    event_location = models.ForeignKey(EventLocation, on_delete=models.CASCADE)
    NAME = [
        ('dance_floor', 'Dance Floor'),
        ('vip', 'VIP'),
        ('seating', 'Seating Area')
    ]
    name = models.CharField(max_length=255, choices=NAME)
    price = models.IntegerField()

    class Meta:
        unique_together = ['name', 'event_location']


class Ticket(models.Model):
    account = models.ForeignKey(Account, on_delete=models.CASCADE, related_name="tickets", null=True)
    ticket_type = models.ForeignKey(TicketType, on_delete=models.CASCADE)
    row = models.CharField(max_length=10)
    seat = models.IntegerField()

    class Meta:
        verbose_name = 'Ticket'
        verbose_name_plural = 'Tickets'

    def __str__(self):
        return f'{self.id} : {self.row} : {self.seat}'
