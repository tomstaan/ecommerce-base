from rest_framework import routers
from django.urls import path, re_path, include
from .api import StoreSettingViewSet
from django.contrib import admin

router = routers.DefaultRouter()
# Product Routes
router.register('api/store/settings', StoreSettingViewSet, 'storesettings')
urlpatterns = router.urls