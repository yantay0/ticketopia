from django.urls import path
from event import views

urlpatterns = [
    path('categories', views.category_list),
    path('events', views.event_list),
]
