import os
from django.db import models
from django.utils.timezone import now
from django.dispatch import receiver
import datetime
from django.utils import timezone
from django.contrib.auth.models import User

# Create your models here.
class Dashboard(models.Model):
    date = models.DateTimeField(default=now, editable=False)
    owner = models.ForeignKey(User, related_name="dashboard", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return str(self.date)