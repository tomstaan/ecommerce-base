import os
from django.db import models
from django.utils.timezone import now
from django.dispatch import receiver
from django.utils.translation import ugettext_lazy as _

# Dashboard Model
class Dashboard(models.Model):
    monthly_sales = models.IntegerField(blank=True, null=True)
    revenue = models.DecimalField(max_digits=12, decimal_places=2, blank=True, null=True)
    profit = models.DecimalField(max_digits=12, decimal_places=2, blank=True, null=True)
    monthly_visitors = models.IntegerField(blank=True, null=True)
    new_customers = models.IntegerField(blank=True, null=True)
    all_customers = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return "User Dashboard"