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
    product_cats = Product_categories.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProductSerializer

    def create(self, request, *args, **kwargs):
        product_name = request.data['product_name']
        category_id = request.data['category_id']
        unit_price = request.data['unit_price']
        image_id = request.data['image_id']
        quantity_per_unit = request.data['quantity_per_unit']
        size = request.data['size']
        color = request.data['color']
        unit_weight = request.data['unit_weight']
        units_in_stock = request.data['units_in_stock']
        units_on_order = request.data['units_on_order']
        product_description = request.data['product_description']
        # Get ref product_category 
        category_ref = self.product_cats.get(id=category_id)
        Product.objects.create(
            product_name = product_name,
            category_id = category_ref,
            unit_price = unit_price,
            image_id = image_id,
            quantity_per_unit = quantity_per_unit,
            size = size,
            color = color,
            unit_weight = unit_price,
            units_in_stock = units_in_stock,
            units_on_order = units_on_order,
            product_description = product_description
        )
        return HttpResponse({'message': 'Product Created'}, status=200)

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
