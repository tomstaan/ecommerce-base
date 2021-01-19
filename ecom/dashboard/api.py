from .models import Dashboard
from django.http import HttpResponse, Http404
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from .serializers import DashboardSerializer
import shutil
import os
#from .stripefile import create_product, get_payment_intents
import time
import re

# Product Viewset
class DashboardViewSet(viewsets.ModelViewSet):
    queryset = Dashboard.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = DashboardSerializer
    
    def list(self, request, *args, **kwargs):
        monthly_sales = 4382
        revenue = 6103.50
        profit = 5282.30
        monthly_visitors = 228
        new_customers = 13
        all_customers = 93

        Dashboard.objects.all().delete()

        dash = Dashboard.objects.create(
            monthly_sales = monthly_sales,
            revenue = revenue,
            profit = profit,
            monthly_visitors = monthly_visitors,
            new_customers = new_customers,
            all_customers = all_customers
        )

        serializer = DashboardSerializer(Dashboard.objects.all(), many=True)
        return Response(serializer.data)
