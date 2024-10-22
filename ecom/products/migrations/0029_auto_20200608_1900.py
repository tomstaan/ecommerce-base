# Generated by Django 3.0.5 on 2020-06-08 19:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0028_auto_20200531_1627'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='product_unique_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='category_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='products.Product_categories'),
        ),
        migrations.AlterField(
            model_name='productimage',
            name='product_ref',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.Product'),
        ),
        migrations.AlterField(
            model_name='subproduct',
            name='parent_product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.Product'),
        ),
    ]
