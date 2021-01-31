from rest_framework import routers
from django.urls import path, re_path, include
from .api import DashboardViewSet, DashboardSalesGraph
from django.contrib import admin

router = routers.DefaultRouter()
# Product Routes
router.register('api/dashboard/statistics', DashboardViewSet, 'dashboard')
router.register('api/dashboard/salesgraph', DashboardSalesGraph, 'dashboard_sales_graph')

urlpatterns = router.urls
