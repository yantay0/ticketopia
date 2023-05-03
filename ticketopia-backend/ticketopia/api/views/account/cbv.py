from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from api.models import Account
from api.serializers import AccountSerializer


class AccountListAPIView(generics.ListCreateAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

    def perform_create(self, serializer):
        user = serializer.save()
        Account.objects.create(user=user)


class AccountDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
    lookup_url_kwarg = 'account_id'
    permission_classes = (IsAuthenticated,)

    # def get_queryset(self):
    #     return Account.objects.filter(user=self.request.user)

    def perform_update(self, serializer):
        serializer.save(partial=True)
