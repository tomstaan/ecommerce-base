import os
from django.db import models
from django.utils.timezone import now
from django.dispatch import receiver
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import User


def get_image_path(instance, filename):
    return '/'.join(['product_images', str(instance.image_id), filename]) 

# Create your models here.
class Product(models.Model):
    product_name = models.CharField(max_length=255, blank=True, null=True)
    stripe_ref_id = models.CharField(max_length=255, blank=True, null=True)
    product_unique_name = models.CharField(max_length=255, blank=True, null=True)
    product_description = models.CharField(
        max_length=2000, blank=True, null=True)
    supplier_id = models.CharField(max_length=255, blank=True, null=True)
    category_id = models.ForeignKey(
        'Product_categories', on_delete=models.CASCADE, blank=True, null=True)
    image_id = models.CharField(max_length=255, blank=True, null=True)
    quantity_per_unit = models.IntegerField()
    unit_price = models.DecimalField(
        max_digits=8, decimal_places=2, blank=True, null=True)
    msrp = models.DecimalField(
        max_digits=8, decimal_places=2, blank=True, null=True)
    size = models.CharField(max_length=20, blank=True, null=True)
    color = models.CharField(max_length=20, blank=True, null=True)
    discount = models.DecimalField(
        max_digits=4, decimal_places=2, blank=True, null=True)
    unit_weight = models.DecimalField(max_digits=10, decimal_places=3, blank=True, null=True)
    units_in_stock = models.IntegerField(blank=True, null=True)
    units_on_order = models.IntegerField(blank=True, null=True)
    product_availible = models.BooleanField(
        default=False, blank=True, null=True)
    discount_availible = models.BooleanField(
        default=False, blank=True, null=True)
    discount_price = models.DecimalField(
        max_digits=8, decimal_places=2, blank=True, null=True)
    note = models.CharField(max_length=500, blank=True)
    date = models.DateTimeField(default=now, editable=False)
    cover_image = models.CharField(max_length=255, blank=True, null=True)
    owner = models.ForeignKey(User, related_name="products", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.product_name

class ProductImage(models.Model):
    product_ref = models.ForeignKey(Product, on_delete=models.CASCADE, blank=True, null=True)
    image_id = models.CharField(max_length=255, blank=True, null=True)
    image_name = models.ImageField(blank=True, null=True, upload_to=get_image_path)

class Product_categories(models.Model):
    cat_name = models.CharField(max_length=128, null=False)
    description = models.CharField(max_length=500)
    active = models.BooleanField(default=True, null=False)

    def __str__(self):
        return self.cat_name
    
    def __unicode__(self):
        return u'%s %s' % (self.cat_name)
    

