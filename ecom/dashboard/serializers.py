from rest_framework import serializers
from .models import Dashboard

class DashboardSerializer(serializers.Serializer):
    monthly_sales = serializers.IntegerField()
    revenue = serializers.IntegerField()
    profit = serializers.IntegerField()
    monthly_visitors = serializers.IntegerField()
    new_customers = serializers.IntegerField()
    all_customers = serializers.IntegerField()

class WebsiteVisitorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dashboard
        fields = '__all__'