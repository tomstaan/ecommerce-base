import os
from django.db import models


def get_image_path(instance, filename):
    return os.path.join('photos', str(instance.post_id), filename)

# Create your models here.
class product(models.Model):
    #sku = models.CharField(max_length=15, blank=True)
    #idsku = models.CharField(blank=True, max_length=255)
    #vendor_product_id = models.CharField(max_length=255, blank=True)
    product_name = models.CharField(max_length=255)
    product_description = models.CharField(max_length=2000, blank=True)
    post_image = models.ImageField(upload_to=get_image_path, blank=True, null=True)
    supplier_id = models.CharField(max_length=255, blank=True)
    category_id = models.CharField(max_length=255, blank=True)
    quantity_per_unit = models.IntegerField()
    unit_price = models.DecimalField(max_digits=8, decimal_places=2)
    msrp = models.DecimalField(max_digits=8, decimal_places=2, blank=True)
    size = models.CharField(blank=True, max_length=20)
    color = models.CharField(blank=True, max_length=20)
    discount = models.DecimalField(max_digits=4, decimal_places=2, blank=True)
    unit_weight = models.DecimalField(max_digits=10, decimal_places=3)
    units_in_stock = models.IntegerField()
    units_on_order = models.IntegerField(blank=True)
    product_availible = models.BooleanField(default=False)
    discount_availible = models.BooleanField(default=False)
    discount_price = models.DecimalField(max_digits=8, decimal_places=2)
    note = models.CharField(max_length=500, blank=True)

    class Meta:
        verbose_name_plural = "Products"


# Create your models here.
class subproduct(models.Model):
    #sku = models.CharField(max_length=15, blank=True)
    #idsku = models.CharField(blank=True, max_length=255)
    #vendor_product_id = models.CharField(max_length=255, blank=True)
    parent_product = models.ForeignKey(product, on_delete=models.CASCADE)
    product_name = models.CharField(max_length=255)
    product_description = models.CharField(max_length=2000, blank=True)
    supplier_id = models.CharField(max_length=255, blank=True)
    category_id = models.CharField(max_length=255, blank=True)
    quantity_per_unit = models.IntegerField()
    unit_price = models.DecimalField(max_digits=8, decimal_places=2)
    msrp = models.DecimalField(max_digits=8, decimal_places=2, blank=True)
    size = models.CharField(blank=True, max_length=20)
    color = models.CharField(blank=True, max_length=20)
    discount = models.DecimalField(max_digits=4, decimal_places=2, blank=True)
    unit_weight = models.DecimalField(max_digits=10, decimal_places=3)
    units_in_stock = models.IntegerField()
    units_on_order = models.IntegerField(blank=True)
    product_availible = models.BooleanField(default=False)
    discount_availible = models.BooleanField(default=False)
    discount_price = models.DecimalField(max_digits=8, decimal_places=2)
    note = models.CharField(max_length=500, blank=True)

    class Meta:
        verbose_name_plural = "Subproducts"



