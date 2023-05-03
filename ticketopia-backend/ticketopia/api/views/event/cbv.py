from rest_framework import generics

from api.models import Event
from api.serializers import EventSerializer


class EventListApiView(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    # permission_classes = [AllowAny]
