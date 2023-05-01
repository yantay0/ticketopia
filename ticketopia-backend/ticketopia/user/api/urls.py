from django.urls import path
from user.api import views

app_name = "user"

urlpatterns = [
    path('register/', views.registration_view)
]
