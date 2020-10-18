from .models import Product, Product_categories, ProductImage
from django.http import HttpResponse, Http404
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from .serializers import ProductSerializer, ProductCatSerializer, ProductImageSerializer
import shutil
import os

# Product Viewset
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProductSerializer

class ProductCatViewSet(viewsets.ModelViewSet):
    queryset = Product_categories.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProductCatSerializer

# Create Product Image
class ProductImageViewSet(viewsets.ModelViewSet):
    queryset = ProductImage.objects.all()
    allProducts = Product.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProductImageSerializer

    def create(self, request, *args, **kwargs):
        req_image_id = request.data['image_id']
        image_name = request.data['image_name']
        # Get Product with image_id that matches the images uploaded by the user
        relatingProductId = self.allProducts.get(image_id=req_image_id)
        ProductImage.objects.create(product_ref=relatingProductId, image_id=req_image_id, image_name=image_name)
        return HttpResponse({'message': 'Product Image Created'}, status=200)

# Get images that relate to a product id
class ProductImagesViewSet(viewsets.ModelViewSet):
    queryset = ProductImage.objects.all()
    allProducts = Product.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    def list(self, request, *args, **kwargs):
        product_id = self.kwargs['id']
        relatingProduct = self.allProducts.get(id=product_id)
        product_images = self.queryset.filter(image_id=relatingProduct.image_id)
        serializer = ProductImageSerializer(product_images, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None, *args, **kwargs):
        product_id = self.kwargs['id']
        relatingProduct = self.allProducts.get(id=product_id)
        product_images = self.queryset.filter(image_id=relatingProduct.image_id)
        user = get_object_or_404(product_images, pk=pk)
        serializer = ProductImageSerializer(product_images)
        return Response(serializer.data)
