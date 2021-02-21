import os
from django.db import models
from django.utils.timezone import now
from django.dispatch import receiver
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import User


def get_image_path(instance, filename):
    return '/'.join(['profile_pic', str(instance.store_name), filename]) 

# Create your models here.
class StoreSettings(models.Model):
    store_name = models.CharField(max_length=255, blank=True, null=True)
    profile_pic = models.ImageField(blank=True, null=True, upload_to=get_image_path)
    owner = models.ForeignKey(User, related_name="store_settings", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.store_name
    