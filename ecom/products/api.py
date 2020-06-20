from .models import Product, Subproduct, Product_categories, ProductImage
from rest_framework import viewsets, permissions
from .serializers import ProductSerializer, SubProductSerializer, ProductCatSerializer, ProductImageSerializer

# Product Viewset

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProductSerializer

class SubProductViewSet(viewsets.ModelViewSet):
    queryset = Subproduct.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SubProductSerializer

class ProductCatViewSet(viewsets.ModelViewSet):
    queryset = Product_categories.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProductCatSerializer

class ProductImageViewSet(viewsets.ModelViewSet):
    queryset = ProductImage.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProductImageSerializer
