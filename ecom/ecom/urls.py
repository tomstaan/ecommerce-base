from django.contrib import admin
from django.urls import path, include
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', include('dashboard.urls')),
    path('', include('products.urls')),
    path('', include('store_settings.urls')),
    path('', include('frontend.urls')),
    path('', include('accounts.urls')),
] 

urlpatterns += staticfiles_urlpatterns()
