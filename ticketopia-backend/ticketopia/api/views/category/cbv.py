from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from api.models import Category
from api.serializers import CategorySerializer


class CategoryListApiView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    # permission_classes = [AllowAny]
