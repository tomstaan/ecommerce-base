from rest_framework import serializers
from .models import Product, Product_categories, ProductImage

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class ProductCatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product_categories
        fields = '__all__'

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = '__all__'
        
