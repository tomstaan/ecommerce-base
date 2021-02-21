from rest_framework import serializers
from .models import StoreSettings

class StoreSettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = StoreSettings
        fields = '__all__'