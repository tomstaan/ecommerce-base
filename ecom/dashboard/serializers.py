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

class DashboardSalesGraphSerializer(serializers.Serializer):
    sales = serializers.ListField(child=serializers.IntegerField())
    dates = serializers.ListField(child=serializers.CharField())

class DashboardPopularBarChartSerializer(serializers.Serializer):
    amount_sold = serializers.ListField(child=serializers.IntegerField())
    product = serializers.ListField(child=serializers.CharField())

class DashboardUserCountrySerializer(serializers.Serializer):
    country = serializers.CharField()
    user_number = serializers.IntegerField() 