from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token

from user.api import views

app_name = "user"

urlpatterns = [
    path('signup/', views.signup_view),
    path('login/', obtain_jwt_token),
]
