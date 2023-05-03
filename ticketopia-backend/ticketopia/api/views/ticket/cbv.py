from django.shortcuts import Http404

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from api.models import Ticket
from api.serializers import TicketSerializer


class TicketListAPIView(APIView):
    def get(self, request):
        tickets = Ticket.objects.all()
        serializer = TicketSerializer(tickets, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TicketSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TicketDetailAPIView(APIView):
    def get_object(self, ticket_id):
        try:
            return Ticket.objects.get(pk=ticket_id)
        except Ticket.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, ticket_id):
        instance = self.get_object(ticket_id)
        serializer = TicketSerializer(instance)
        return Response(serializer.data)

    def put(self, request, ticket_id):
        instance = self.get_object(ticket_id)
        serializer = TicketSerializer(instance=instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, ticket_id):
        instance = self.get_object(ticket_id)
        instance.delete()
        return Response({'deleted': True})
