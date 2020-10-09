from .models import Product, Subproduct, Product_categories, ProductImage
from django.http import HttpResponse, Http404
from rest_framework import viewsets, permissions
from .serializers import ProductSerializer, SubProductSerializer, ProductCatSerializer, ProductImageSerializer
import shutil
import os

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
    allProducts = Product.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProductImageSerializer

    def create(self, request, *args, **kwargs):
        #product_ref = request.data['product_ref']
        image_id = request.data['image_id']
        image_name = request.data['image_name']
        # Get Product with image_id that matches the images uploaded by the user
        relatingProductId = self.allProducts.get(image_id=image_id)
        ProductImage.objects.create(product_ref=relatingProductId, image_id=image_id, image_name=image_name)
        return HttpResponse({'message': 'Product Image Created!'}, status=200)
    