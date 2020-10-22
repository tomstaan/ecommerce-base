from rest_framework import routers
from django.urls import path, re_path, include
from .api import ProductViewSet, ProductCatViewSet, ProductImageViewSet, ProductImagesViewSet
from django.contrib import admin

router = routers.DefaultRouter()
router.register('api/products', ProductViewSet, 'products')
router.register('api/productcat', ProductCatViewSet, 'product_cat')
router.register('api/productimage', ProductImageViewSet, 'productimage')
router.register(r'api/products/(?P<id>\d+)/images',
                ProductImagesViewSet, 'productimages')

urlpatterns = [
    path('admin/', admin.site.urls),
]

urlpatterns += router.urls
