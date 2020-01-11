from rest_framework import serializers
from .models import Product, Subproduct, Product_categories

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class SubProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subproduct
        fields = '__all__'


class ProductCatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product_categories
        fields = '__all__'
