from django.db import models


class Category(models.Model):
    MOVIES = 'Movie'
    CONCERTS = 'Concerts'
    THEATRE = 'Theatre'

    CATEGORY_CHOICES = (
        (MOVIES, 'Movies'),
        (CONCERTS, 'Concerts'),
        (THEATRE, 'Theatre')
    )

    name = models.CharField(max_length=255, choices=CATEGORY_CHOICES)

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
    location = models.ManyToManyField(Location)
    duration = models.IntegerField(default=0)
    poster = models.CharField(max_length=255, null=True, blank=True, verbose_name='Poster URL')
    quantity = models.IntegerField(default=0)
    category = models.ForeignKey(Category, on_delete=models.PROTECT, related_name="events")
    genre = models.CharField(max_length=255)

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

