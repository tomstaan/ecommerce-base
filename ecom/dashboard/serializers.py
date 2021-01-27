from rest_framework import serializers

class DashboardSerializer(serializers.Serializer):
    monthly_sales = serializers.IntegerField()
    revenue = serializers.DecimalField(max_digits=12, decimal_places=2)
    profit = serializers.DecimalField(max_digits=12, decimal_places=2)
    monthly_visitors = serializers.IntegerField()
    new_customers = serializers.IntegerField()
    all_customers = serializers.IntegerField()

