from rest_framework import routers
from django.urls import path, re_path, include
from .api import DashboardViewSet

router = routers.DefaultRouter()
# Product Routes
router.register('api/dashboard', DashboardViewSet, 'dashboard')

urlpatterns = router.urls
