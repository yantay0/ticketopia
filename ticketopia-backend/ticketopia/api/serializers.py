from django.contrib.auth import get_user_model
from rest_framework import serializers

from api.models import Event, Location, Category, Ticket, Account, EventLocation


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('email', 'password')


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        category = Category.objects.create(**validated_data)
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance


class LocationSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=255)
    city = serializers.CharField(max_length=255, default=None)
    address = serializers.CharField(max_length=255)
    has_seating_area = serializers.BooleanField(default=False)
    has_vip_zone = serializers.BooleanField(default=False)
    has_dance_floor = serializers.BooleanField(default=False)
    dance_floor_capacity = serializers.IntegerField(allow_null=True)
    seating_area_capacity = serializers.IntegerField(allow_null=True)
    seating_area_rows = serializers.IntegerField(allow_null=True)

    def create(self, validated_data):
        location = Location.objects.create(**validated_data)
        return location

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.city = validated_data.get('city', instance.city)
        instance.address = validated_data.get('address', instance.address)
        instance.has_seating_area = validated_data.get('has_seating_area', instance.has_seating_area)
        instance.has_vip_zone = validated_data.get('has_vip_zone', instance.has_vip_zone)
        instance.has_dance_floor = validated_data.get('has_dance_floor', instance.has_dance_floor)
        instance.dance_floor_capacity = validated_data.get('dance_floor_capacity', instance.address)
        instance.seating_area_capacity = validated_data.get('seating_area_capacity', instance.address)
        instance.seating_area_rows = validated_data.get('seating_area_rows', instance.address)
        instance.save()
        return instance


class EventSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Event
        fields = '__all__'
        read_only_fields = ['id', 'category']


class TicketSerializer(serializers.ModelSerializer):
    # event = EventSerializer()

    class Meta:
        model = Ticket
        fields = '__all__'
        read_only_fields = ['id', 'event']


class AccountSerializer(serializers.ModelSerializer):
    # user = UserSerializer()

    class Meta:
        model = Account
        fields = '__all__'
        read_only_fields = ['id', 'user', 'tickets']


class EventLocationSerializer(serializers.ModelSerializer):
    # event = EventSerializer()
    # location = LocationSerializer

    class Meta:
        model = EventLocation
        fields = '__all__'
        read_only_fields = ['id', 'event', 'location']
