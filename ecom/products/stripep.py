import stripe
import requests
import urllib.request
import json
stripe.api_key = "sk_test_qVyhxgBH7ndQwSUy6lW9SGVI00wKodpGe5"

#customer = stripe.Customer.retrieve("cus_IE6nJd199pkScq")

# Create Payment
stripe.PaymentIntent.create(
    amount=59900,
    currency="eur",
    payment_method_types=["card"],
    description='Samsung S10 - Black 128GB',
    confirm=True,
    customer="cus_IE6nJd199pkScq",
    metadata={
        'order_id': '032ed83w',
        'product_ref': 171,
        'stripe_product_ref': 'prod_IFx4D1BGDIzhC1'
    }
)
