from rest_framework import routers
from django.urls import path, re_path, include
from .api import DashboardViewSet, DashboardSalesGraph, DashboardPopularBarChart, DashboardUserCountries
from django.contrib import admin

router = routers.DefaultRouter()
# Product Routes
router.register('api/dashboard/statistics', DashboardViewSet, 'dashboard')
router.register('api/dashboard/salesgraph', DashboardSalesGraph, 'dash_sales_graph')
router.register('api/dashboard/popularproducts', DashboardPopularBarChart, 'dash_popular_graph')
router.register('api/dashboard/usercountries', DashboardUserCountries, 'dash_user_countries')


urlpatterns = router.urls
