from .models import Product, Product_categories, ProductImage
from django.http import HttpResponse, Http404
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from .serializers import ProductSerializer, ProductCatSerializer, ProductImageSerializer
import shutil
import os
from .stripefile import create_product, get_payment_intents
import time
import re

# Product Viewset
class ProductViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = ProductSerializer

    queryset = Product.objects.all()
    product_cats = Product_categories.objects.all()

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

        # Create stripe Product
        stripe_product_id = create_product(product_name, unit_price, product_description)

        # Get ref product_category 
        category_ref = self.product_cats.get(id=category_id)
        Product.objects.create(
            product_name = product_name,
            category_id = category_ref,
            stripe_ref_id = stripe_product_id,
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
    
    def perform_create(self, serializer):  # added
        serializer.save(owner=self.request.user)

class ProductCatViewSet(viewsets.ModelViewSet):
    queryset = Product_categories.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProductCatSerializer

# Create Product Image
class ProductImageViewSet(viewsets.ModelViewSet):
    queryset = ProductImage.objects.all()
    productQuery = Product.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProductImageSerializer

    def create(self, request, *args, **kwargs):
        req_image_id = request.data['image_id']
        image_name = request.data['image_name']
        # Wait until product object gets created
        while self.productQuery.filter(image_id=req_image_id).count() == 0:
            time.sleep(1)
        print(self.productQuery.filter(image_id=req_image_id).count())
        # Get Product with image_id that matches the images uploaded by the user
        relatingProductId = self.productQuery.filter(image_id=req_image_id)[0]
        ProductImage.objects.create(product_ref=relatingProductId, image_id=req_image_id, image_name=image_name)
        if relatingProductId.cover_image == None:
            relatingProductId.cover_image = self.queryset.filter(image_id=req_image_id)[0].image_name
            relatingProductId.save()
        return HttpResponse({'message': 'Product Image Created'}, status=200)
    
    def destroy(self, request, *args, **kwargs):
        product_id = kwargs['pk']
        print("Product id = "+product_id)
        print(request.data)
        req_image_name = request.data['pictures']['image_name']
        print("Product name = "+req_image_name)
        req_image_id = request.data['pictures']['image_id']
        image = ProductImage.objects.all().get(pk=product_id)
        print(image)
        image.delete()
        # Get correct regex
        re.sub(r'^.*?/media', './../media', req_image_name)
        # Delete file
        if os.path.isfile(req_image_name):
            os.remove(req_image_name)
            # Check if directory is empty
            if len(os.listdir("./../media/product_images/"+req_image_id+"/")) == 0:
                # If its empty delete directory
                try:
                    shutil.rmtree("./../media/product_images/"+req_image_id+"/")
                except OSError as e:
                    print("Error Deleting Directory: %s : %s" % ("./../media/product_images/"+req_image_id+"/", e.strerror))
        else:   
            print("Error: %s file not found" % req_image_name)
        return HttpResponse({'message': 'Product Image Deleted'}, status=200)


# Get images that relate to a product id
class ProductImagesViewSet(viewsets.ModelViewSet):
    queryset = ProductImage.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    def list(self, request, *args, **kwargs):
        product_id = self.kwargs['id']
        relatingProduct = Product.objects.all().get(id=product_id)
        product_images = self.queryset.filter(image_id=relatingProduct.image_id)
        serializer = ProductImageSerializer(product_images, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None, *args, **kwargs):
        product_id = self.kwargs['id']
        relatingProduct = Product.objects.all().get(id=product_id)
        product_images = self.queryset.filter(image_id=relatingProduct.image_id)
        user = get_object_or_404(product_images, pk=pk)
        serializer = ProductImageSerializer(product_images)
        return Response(serializer.data)

# Sales
# Get images that relate to a product id
class SalesViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    stripe_payment_intents = get_payment_intents()

    def list(self, request, *args, **kwargs):
        return Response(self.stripe_payment_intents)

    def retrieve(self, request, pk=None, *args, **kwargs):
        return Response(self.stripe_payment_intents)
    
    def perform_create(self, serializer):  # added
        serializer.save(owner=self.request.user)
