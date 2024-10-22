# Generated by Django 2.2.3 on 2019-09-13 22:29

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0017_auto_20190822_1509'),
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
            field=models.DateTimeField(blank=True, default=datetime.datetime(2019, 9, 13, 23, 29, 51, 470649)),
        ),
        migrations.AlterField(
            model_name='subproduct',
            name='date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2019, 9, 13, 23, 29, 51, 470649)),
        ),
        migrations.AlterField(
            model_name='subproduct',
            name='parent_product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.Product'),
        ),
    ]
