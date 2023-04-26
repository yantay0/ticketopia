from rest_framework import serializers

from api.models import Event, Location, Category


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

    def create(self, validated_data):
        location = Location.objects.create(**validated_data)
        return location

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.city = validated_data.get('city', instance.city)
        instance.address = validated_data.get('address', instance.address)
        instance.save()
        return instance


class EventSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    location = LocationSerializer()

    class Meta:
        model = Event
        fields = '__all__'
        read_only_fields = ['id', 'category']
