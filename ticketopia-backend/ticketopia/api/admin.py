from django.contrib import admin
from api.models import Location, Event, Category, Ticket, Account


# from ticket.models import Ticket


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'user')


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'premiere_date',
                    'age_rating', 'duration', 'poster',
                    'category')


@admin.register(Location)
class LocationAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'city', 'address', 'has_seating_area', 'has_dance_floor',
                    'has_vip_zone', 'dance_floor_capacity',
                    'seating_area_capacity', 'seating_area_rows')


@admin.register(Ticket)
class TicketAdmin(admin.ModelAdmin):
    list_display = ('id', 'event_location', 'row', 'seat', 'price', 'ticket_type')


@admin.register(Account)
class AccountAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'last_name', 'first_name', 'phone_number')
