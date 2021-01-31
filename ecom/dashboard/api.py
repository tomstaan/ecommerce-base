from django.http import HttpResponse, Http404
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, permissions, views
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from .serializers import DashboardSerializer, WebsiteVisitorSerializer
from rest_framework.renderers import JSONRenderer
from .models import Dashboard
import shutil
from django.db.models import F, Min
import os
from .stripefile import get_transactioncount_revenue_profit, get_number_of_customers
import re
from django.utils import timezone
import datetime

# Product Viewset
class DashboardViewSet(viewsets.ViewSet):
    permission_classes = [
        permissions.AllowAny
    ]

    # Get data from stripe
    
    def list(self, request):
        # get transaction info
        dashTrRePr = get_transactioncount_revenue_profit()
        monthly_sales = dashTrRePr['monthly_sales']
        revenue = dashTrRePr['revenue']
        profit = dashTrRePr['profit']
        # Get website visitor info
        lastMonthTimestamp = datetime.date.today() - datetime.timedelta(30)
        visitors = Dashboard.objects.filter(date__range=[lastMonthTimestamp,timezone.now()])
        monthly_visitors = len(visitors)
        # Get customer info
        customers = get_number_of_customers()
        new_customers = customers['new']
        all_customers = customers['all']
        
        data = {
            "monthly_sales": monthly_sales, 
            "revenue": revenue,
            "profit": profit,
            "monthly_visitors": monthly_visitors,
            "new_customers": new_customers,
            "all_customers": all_customers
        }

        serializedData = DashboardSerializer(data).data
        return Response(serializedData)

        