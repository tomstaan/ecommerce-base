import stripe
import requests
import urllib.request
import json
stripe.api_key = "sk_test_qVyhxgBH7ndQwSUy6lW9SGVI00wKodpGe5"

#customer = stripe.Customer.retrieve("cus_IE6nJd199pkScq")

# Create Payment
stripe.PaymentIntent.create(
    amount=70000,
    currency="eur",
    payment_method_types=["card"],
    description='Iphone 11 - Black 128GB',
    confirm=True,
    customer="cus_IE6nJd199pkScq",
    metadata={
        'order_id': '23jk4n3j',
        'product_ref': 173,
        'stripe_product_ref': 'prod_IFx9KXqy5Kt51j'
    }
)
