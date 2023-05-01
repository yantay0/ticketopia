from django.urls import path
from api import views

urlpatterns = [
    path('categories/', views.CategoryListApiView.as_view()),
    path('events/', views.event_list),
    path('categories/<int:category_id>/events/', views.event_list_by_category),
    path('events/<int:event_id>/', views.event_detail)
]
