import os
from django.db import models
from datetime import datetime


def get_image_path(instance, filename):
    return os.path.join('photos', str(instance.product_id), filename)

# Create your models here.
class Product(models.Model):
    #sku = models.CharField(max_length=15, blank=True)
    #idsku = models.CharField(blank=True, max_length=255)
    #vendor_product_id = models.CharField(max_length=255, blank=True)
    product_name = models.CharField(max_length=255, blank=True, null=True)
    product_description = models.CharField(
        max_length=2000, blank=True, null=True)
    product_image = models.ImageField(upload_to=get_image_path, blank=True, null=True)
    supplier_id = models.CharField(max_length=255, blank=True, null=True)
    category_id = models.ForeignKey(
        'Product_categories', on_delete=models.CASCADE, blank=True, null=True)
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
    date = models.DateTimeField(default=datetime.now(), blank=True)

    def __str__(self):
        return self.product_name



# Create your models here.
class Subproduct(models.Model):
    #sku = models.CharField(max_length=15, blank=True)
    #idsku = models.CharField(blank=True, max_length=255)
    #vendor_product_id = models.CharField(max_length=255, blank=True)
    parent_product = models.ForeignKey(Product, on_delete=models.CASCADE)
    product_name = models.CharField(max_length=255)
    product_description = models.CharField(max_length=2000, blank=True)
    supplier_id = models.CharField(max_length=255, blank=True)
    quantity_per_unit = models.IntegerField()
    unit_price = models.DecimalField(max_digits=8, decimal_places=2)
    msrp = models.DecimalField(max_digits=8, decimal_places=2, blank=True)
    size = models.CharField(blank=True, max_length=20)
    color = models.CharField(blank=True, max_length=20)
    discount = models.DecimalField(max_digits=4, decimal_places=2, blank=True)
    unit_weight = models.DecimalField(max_digits=10, decimal_places=3)
    units_in_stock = models.IntegerField(default=0, blank=True)
    units_on_order = models.IntegerField(default=0, blank=True)
    product_availible = models.BooleanField(default=False)
    discount_availible = models.BooleanField(default=False)
    discount_price = models.DecimalField(max_digits=8, decimal_places=2)
    note = models.CharField(max_length=500, blank=True)
    date = models.DateTimeField(default=datetime.now(), blank=True)

    def __str__(self):
        return self.product_name + ' ('+ self.parent_product + ')'

class Product_categories(models.Model):
    cat_name = models.CharField(max_length=128, null=False)
    description = models.CharField(max_length=500)
    active = models.BooleanField(default=True, null=False)

    def __str__(self):
        return self.cat_name
    
    def __unicode__(self):
        return u'%s %s' % (self.cat_name)
    

