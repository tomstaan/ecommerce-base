import stripe
import requests
import urllib.request
stripe.api_key = "sk_test_xZ0UXIzfMO0KU2VTWeax2CWd00pZanpMEx"

resp = stripe.Charge.retrieve(
    'ch_1EboxvLXJtYiE5Vc4YPS7po4',
    expand=['customer', 'invoice.subscription']
)
print(resp.status_code)

'''
try:
    
    pass
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
    pass
except stripe.error.InvalidRequestError as e:
    # Invalid parameters were supplied to Stripe's API
    pass
except stripe.error.AuthenticationError as e:
    # Authentication with Stripe's API failed
    # (maybe you changed API keys recently)
    pass
except stripe.error.APIConnectionError as e:
    # Network communication with Stripe failed
    pass
except stripe.error.StripeError as e:
    # Display a very generic error to the user, and maybe send
    # yourself an email
    pass
except Exception as e:
    # Something else happened, completely unrelated to Stripe
    pass

'''
