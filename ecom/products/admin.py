from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(Product)
admin.site.register(Product_categories)
admin.site.register(ProductImage)