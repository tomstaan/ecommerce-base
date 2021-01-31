from rest_framework import routers
from django.urls import path, re_path, include
from .api import DashboardViewSet
from django.contrib import admin

router = routers.DefaultRouter()
# Product Routes
router.register('api/dashboard/statistics', DashboardViewSet, 'dashboard')

urlpatterns = router.urls
