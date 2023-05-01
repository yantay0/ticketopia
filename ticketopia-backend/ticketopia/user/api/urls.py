from django.urls import path
from account.api import views

app_name = "account"

urlpatterns = [
    path('register/', views.registration_view)
]
