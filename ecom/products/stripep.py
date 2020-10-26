import stripe
import requests
import urllib.request
import json
stripe.api_key = "sk_test_qVyhxgBH7ndQwSUy6lW9SGVI00wKodpGe5"

#customer = stripe.Customer.retrieve("cus_IE6nJd199pkScq")

# Create Payment
stripe.PaymentIntent.create(
    amount=135999,
    currency="eur",
    payment_method_types=["card"],
    description='Dell XPS 13 - 512GB, Black',
    confirm=True,
    customer="cus_IG4EgmVOQK0DTG",
    metadata={
        'order_id': '432jk22g',
        'product_ref': 193,
        'stripe_product_ref': 'prod_IH2aY7wmlHc23T'
    }
)
