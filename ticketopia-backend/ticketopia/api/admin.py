from django.contrib import admin
from api.models import Location, Event, Category
# from ticket.models import Ticket


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'display_locations','category', 'quantity')

    def display_locations(self, obj):
        return ', '.join([location.name for location in
                          obj.location.all()])

    display_locations.short_description = 'Locations'


@admin.register(Location)
class LocationAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'city', 'address')


# #
# @admin.register(Ticket)
# class CategoryAdmin(admin.ModelAdmin):
#     list_display = ('id', 'event', 'row', 'seat', 'price', 'ticket_type')