from django.contrib import admin
from api.models import Location, Event, Category


# from ticket.models import Ticket


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'location', 'category', 'quantity')


@admin.register(Location)
class LocationAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'city', 'address')

# #
# @admin.register(Ticket)
# class CategoryAdmin(admin.ModelAdmin):
#     list_display = ('id', 'event', 'row', 'seat', 'price', 'ticket_type')
