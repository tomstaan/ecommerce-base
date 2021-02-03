import stripe
import requests
import urllib.request
import json
stripe.api_key = "sk_test_qVyhxgBH7ndQwSUy6lW9SGVI00wKodpGe5"

def get_payment_intents():
    # Get Payments
    try:
        result = stripe.PaymentIntent.list(limit=100)

        payments = []
        for i in range(0, len(result['data'])):
            if result['data'][i]['status'] == "succeeded":
                payment = {}
                customer = {}
                payment['stripe_id'] = result['data'][i]['id']
                payment['date'] = result['data'][i]['created']
                payment['price'] = result['data'][i]['amount']
                payment['name'] = result['data'][i]['description']
                payment['status'] = result['data'][i]['status']
                payment['product_details'] = result['data'][i]['metadata']
                if len(result['data'][i]['charges']['data']) > 0:
                    if result['data'][i]['charges']['data'][0]['amount_refunded'] > 0:
                        payment['status'] = "Refunded"
                    else:
                        payment['status'] = result['data'][i]['status']
                else:
                    payment['status'] = result['data'][i]['status']
                payment['stripe_customer_id'] = result['data'][i]['customer']
                customer = stripe.Customer.retrieve(result['data'][i]['customer'])
                payment['customer_email'] = customer['email']
                payments.append(payment)

        return payments


    except stripe.error.CardError as e:
        # Since it's a decline, stripe.error.CardError will be caught
        body = e.json_body
        err = body.get('error', {})

        print('Status is: %s' % e.http_status)
        print('Type is: %s' % err.get('type'))
        print('Code is: %s' % err.get('code'))
        # param is '' in this case
        print('Param is: %s' % err.get('param'))
        print('Message is: %s' % err.get('message'))
    except stripe.error.RateLimitError as e:
        # Too many requests made to the API too quickly
        print("Stripe [Error]: Too Many Requests")
    except stripe.error.InvalidRequestError as e:
        # Invalid parameters were supplied to Stripe's API
        print("Stripe [Error]: Invalid Request")
    except stripe.error.AuthenticationError as e:
        # Authentication with Stripe's API failed
        # (maybe you changed API keys recently)
        print("Stripe [Error]: Auth Error")
    except stripe.error.APIConnectionError as e:
        # Network communication with Stripe failed
        print("Stripe [Error]: Network Communication Error")
    except stripe.error.StripeError as e:
        # Display a very generic error to the user, and maybe send
        # yourself an email
        print("Stripe [Error]: Stripe Error")
    except Exception as e:
        # Something else happened, completely unrelated to Stripe
        print("Stripe [Error]: Unrelated Error")


# Create a new product and return stripe product id
def create_product(prod_name, prod_price_float, prod_description):
    # Convert double to stripe amount
    prod_price = str(prod_price_float).replace(".", "")
    prod_price_int = int(prod_price)
    if int(float(prod_price_float)) == prod_price_int:
        prod_price_int = prod_price_int*100
    print(prod_price_int)

    # Create Stripe Product
    try:
        prod_response = stripe.Product.create(
            name=prod_name, description=prod_description)
        price_response = stripe.Price.create(
            unit_amount=prod_price_int,
            currency="eur",
            billing_scheme="per_unit",
            product=prod_response['id'],
        )

        return prod_response['id']

    except stripe.error.CardError as e:
        # Since it's a decline, stripe.error.CardError will be caught
        body = e.json_body
        err = body.get('error', {})

        print('Status is: %s' % e.http_status)
        print('Type is: %s' % err.get('type'))
        print('Code is: %s' % err.get('code'))
        # param is '' in this case
        print('Param is: %s' % err.get('param'))
        print('Message is: %s' % err.get('message'))
    except stripe.error.RateLimitError as e:
        # Too many requests made to the API too quickly
        print("Stripe [Error]: Too Many Requests")
    except stripe.error.InvalidRequestError as e:
        # Invalid parameters were supplied to Stripe's API
        print("Stripe [Error]: Invalid Request")
    except stripe.error.AuthenticationError as e:
        # Authentication with Stripe's API failed
        # (maybe you changed API keys recently)
        print("Stripe [Error]: Auth Error")
    except stripe.error.APIConnectionError as e:
        # Network communication with Stripe failed
        print("Stripe [Error]: Network Communication Error")
    except stripe.error.StripeError as e:
        # Display a very generic error to the user, and maybe send
        # yourself an email
        print("Stripe [Error]: Stripe Error")
    except Exception as e:
        # Something else happened, completely unrelated to Stripe
        print("Stripe [Error]: Unrelated Error")



#customer = stripe.Customer.retrieve("cus_IE6nJd199pkScq")
'''
# Create Payment
stripe.PaymentIntent.create(
    amount=59900,
    currency="eur",
    payment_method_types=["card"],
    description='Samsung S10 - Black 128GB',
    confirm=True,
    customer="cus_IE6nJd199pkScq",
    metadata={
        'order_id': '9km2l3ks',
        'product_ref': 171,
        'stripe_product_ref': 'prod_IFx4D1BGDIzhC1'
    }
)
'''