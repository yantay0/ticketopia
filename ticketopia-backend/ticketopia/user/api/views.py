from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from user.api.serializers import SignUpSerializer


@api_view(['POST', ])
def signup_view(request):
    if request.method == 'POST':
        serializer = SignUpSerializer(data=request.data)
        data = {}
        if serializer.is_valid():
            user = serializer.save()
            data['response'] = 'successfully registered new user.'
            data['email'] = user.email
            data['username'] = user.username
        else:
            data = serializer.errors
        return Response(data)
