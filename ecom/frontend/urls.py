from django.urls import path, re_path, include
from django.views.generic import TemplateView
from . import views
from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.index),
    re_path(r'^.*/$', views.index),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
