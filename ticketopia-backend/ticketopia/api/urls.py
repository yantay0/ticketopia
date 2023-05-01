from django.urls import path
from api import views
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('login/', obtain_jwt_token),
    path('categories/', views.CategoryListApiView.as_view()),
    path('events/', views.event_list),
    path('categories/<int:category_id>/events/', views.event_list_by_category),
    path('events/<int:event_id>/', views.event_detail)
]
