from django.contrib import admin
from api.models import Location, Event, Category, Ticket, Account, EventLocation, TicketType


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
    list_display = ('id', 'account' , 'row', 'seat')


@admin.register(Account)
class AccountAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'last_name', 'first_name', 'phone_number')


@admin.register(EventLocation)
class EventLocationAdmin(admin.ModelAdmin):
    list_display = ('id', 'event', 'location', 'start_time',
                    'tickets_quantity_dance_floor', 'tickets_quantity_vip_zone', 'tickets_quantity_seating_area')


@admin.register(TicketType)
class TicketTypeAdmin(admin.ModelAdmin):
    list_display = ('id', 'event_location', 'name', 'price')
