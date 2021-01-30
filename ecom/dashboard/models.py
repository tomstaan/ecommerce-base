import os
from django.db import models
from django.utils.timezone import now
from django.dispatch import receiver
import datetime
from django.utils import timezone

# Create your models here.
class Dashboard(models.Model):
    date = models.DateTimeField(default=now, editable=False)

    def __str__(self):
        return str(self.date)