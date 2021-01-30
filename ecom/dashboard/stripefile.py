import stripe
import requests
import urllib.request
import json
import time
import datetime
stripe.api_key = "sk_test_qVyhxgBH7ndQwSUy6lW9SGVI00wKodpGe5"

def get_transactioncount_revenue_profit():
    try:
        currentTimestamp = datetime.date.today()
        lastMonthTimestamp = currentTimestamp - datetime.timedelta(30)

        # Get all the transactions, sales, revenue between now and last month
        result = stripe.BalanceTransaction.list(created={'gt': lastMonthTimestamp.strftime("%s")})
        
        resultDict = {}
        resultDict['monthly_sales'] = 0
        resultDict['revenue'] = 0
        resultDict['profit'] = 0

        for r in result['data']:
            if r['type'] == "charge":
                resultDict['monthly_sales'] = resultDict['monthly_sales'] + 1
                resultDict['revenue'] = resultDict['revenue'] + r['amount']
            resultDict['profit'] = resultDict['profit'] + r['net']

        return resultDict


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


def get_revenue():
    # Get Transaction amount
    try:
        currentTimestamp = datetime.date.today()
        lastMonthTimestamp = currentTimestamp - datetime.timedelta(30)

        # Get all the transactions between now and last month
        result = stripe.BalanceTransaction.list(created={'gt': lastMonthTimestamp.strftime("%s")})
        counter = 0
        for r in result['data']:
            if r['type'] == "charge":
                counter+=1
        print(counter)
        return counter


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


def get_number_of_customers():
    # Get Transaction amount
    try:
        cusData = {}

        customers = stripe.Customer.list()
        cusData['all'] = 0
        cusData['new'] = 0
        cusData['all'] = len(customers)

        # Get last months timestamp
        currentTimestamp = datetime.date.today()
        lastMonthTimestamp = currentTimestamp - datetime.timedelta(30)
        ls = lastMonthTimestamp.strftime("%s")
        counter = 0
        for c in customers['data']:
            # Check if the customer object was created this month
            if int(c['created']) > int(ls):
                counter += 1
                    
        cusData['new'] = counter
        return cusData

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
