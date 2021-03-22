import stripe
import requests
import urllib.request
import json
stripe.api_key = "sk_test_qVyhxgBH7ndQwSUy6lW9SGVI00wKodpGe5"

#customer = stripe.Customer.retrieve("cus_IE6nJd199pkScq")

# Create Payment
stripe.PaymentIntent.create(
    amount=139999,
    currency="eur",
    payment_method_types=["card"],
    description='Dell XPS 13 512GB - Grey',
    confirm=True,
    customer="cus_IG4EgmVOQK0DTG",
    metadata={
        'order_id': 'k34n5kj4',
        'product_ref': 6,
        'stripe_product_ref': 'prod_JA4vwdCG4PSI2c'
    }
)
