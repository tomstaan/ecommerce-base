from rest_framework import routers 
from .api import ProductViewSet, ProductCatViewSet, ProductImageViewSet, ProductImagesViewSet

router = routers.DefaultRouter()
router.register('api/products', ProductViewSet, 'products')
router.register('api/productcat', ProductCatViewSet, 'product_cat')
router.register('api/productimage', ProductImageViewSet, 'productimage')
router.register(r'api/products/(?P<id>\d+)/images', ProductImagesViewSet, 'productimages')

urlpatterns = router.urls

