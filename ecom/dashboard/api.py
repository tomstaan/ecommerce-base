from django.http import HttpResponse, Http404
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, permissions, views
from rest_framework.views import APIView
from rest_framework.response import Response
from collections import OrderedDict
from rest_framework.renderers import JSONRenderer
from .serializers import DashboardSerializer, WebsiteVisitorSerializer, DashboardSalesGraphSerializer, DashboardPopularBarChartSerializer, DashboardUserCountrySerializer
from rest_framework.renderers import JSONRenderer
from .models import Dashboard
import shutil
from django.db.models import F, Min
import os
from .stripefile import get_transactioncount_revenue_profit, get_number_of_customers, get_sales_graph_data, get_popular_products, get_users_per_country
import re
from django.utils import timezone
import datetime

# Product Viewset
class DashboardViewSet(viewsets.ViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
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

    def perform_create(self, serializer):  # added
        serializer.save(owner=self.request.user)

# Product Viewset
class DashboardSalesGraph(viewsets.ViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    # Get data from stripe
    def list(self, request):
        # get transaction info
        salesData = get_sales_graph_data()
        sales = salesData['sales']
        dates = salesData['dates']
        
        data = {
            "sales": sales, 
            "dates": dates
        }

        serializedData = DashboardSalesGraphSerializer(data).data
        return Response(serializedData)
    
    def perform_create(self, serializer):  # added
        serializer.save(owner=self.request.user)
    
# Product Viewset
class DashboardPopularBarChart(viewsets.ViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    # Get data from stripe
    def list(self, request):
        # get transaction info
        salesData = get_popular_products()
        salesData = OrderedDict(sorted(salesData.items(), key=lambda kv: kv[1], reverse=True))
        amount_sold = []
        product = []
        for sale in salesData:
            amount_sold.append(salesData[sale])
            product.append(sale)

        data = {
            "amount_sold": amount_sold, 
            "product": product
        }

        serializedData = DashboardPopularBarChartSerializer(data).data
        return Response(serializedData)
    
    def perform_create(self, serializer):  # added
        serializer.save(owner=self.request.user)


# Product Viewset
class DashboardUserCountries(viewsets.ViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    # Get data from stripe
    def list(self, request):
        # get transaction info
        data = get_users_per_country()

        serializedData = DashboardUserCountrySerializer(data, many=True).data
        return Response(serializedData)
    
    def perform_create(self, serializer):  # added
        serializer.save(owner=self.request.user)