from rest_framework import routers 
from .api import ProductViewSet, SubProductViewSet, ProductCatViewSet, ProductImageViewSet

router = routers.DefaultRouter()
router.register('api/products', ProductViewSet, 'products')
router.register('api/subproducts', SubProductViewSet, 'subproducts')
router.register('api/productcat', ProductCatViewSet, 'product_cat')
router.register('api/productimage', ProductImageViewSet, 'productimage')

urlpatterns = router.urls

