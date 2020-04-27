# Generated by Django 2.2.6 on 2020-04-11 12:10

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0022_auto_20191007_1107'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='category_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='products.Product_categories'),
        ),
        migrations.AlterField(
            model_name='product',
            name='date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 4, 11, 12, 10, 40, 461788)),
        ),
        migrations.AlterField(
            model_name='subproduct',
            name='date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 4, 11, 12, 10, 40, 462401)),
        ),
        migrations.AlterField(
            model_name='subproduct',
            name='parent_product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.Product'),
        ),
    ]