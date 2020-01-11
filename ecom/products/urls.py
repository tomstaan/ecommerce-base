from rest_framework import routers 
from .api import ProductViewSet, SubProductViewSet, ProductCatViewSet

router = routers.DefaultRouter()
router.register('api/products', ProductViewSet, 'products')
router.register('api/subproducts', SubProductViewSet, 'subproducts')
router.register('api/productcat', ProductCatViewSet, 'product_cat')

urlpatterns = router.urls

