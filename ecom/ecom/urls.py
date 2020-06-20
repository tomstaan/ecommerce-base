from django.contrib import admin
from django.urls import path, include
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('', include('products.urls')),
    path('', include('frontend.urls')),
]

urlpatterns += staticfiles_urlpatterns()
