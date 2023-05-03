from django.urls import path
from api import views

urlpatterns = [
    path('categories/', views.CategoryListApiView.as_view()),
    path('events/', views.event_list),
    path('categories/<int:category_id>/events/', views.event_list_by_category),
    path('events/<int:event_id>/', views.event_detail),
    path('accounts/<int:account_id>/', views.AccountDetailAPIView.as_view()),
    path('accounts/', views.AccountListAPIView.as_view()),
    path('tickets/', views.TicketListAPIView.as_view()),
    path('tickets/<int:ticket_id>/', views.TicketDetailAPIView.as_view())
]
