import stripe
import requests
import urllib.request
import pycountry
import json
import time
from collections import OrderedDict
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


def get_sales_graph_data():
    # Get Transaction amount
    try:
        cusData = dict()

        sales = stripe.PaymentIntent.list()
        cusData['sales'] = []
        cusData['dates'] = []

        # Get last months timestamp
        currentTimestamp = datetime.date.today()
        for i in range(-1, 31):
            # Get the dates
            start = currentTimestamp - datetime.timedelta(i+1)
            end = currentTimestamp - datetime.timedelta(i)

            # Get timestamps
            startTime = start.strftime("%s")
            endTime = end.strftime("%s")
            
            # Get correct time format for displaying
            startDate = start.strftime("%d %b")
            
            counter = 0
            for s in sales['data']:
                # Check if the sale was made in between today and tomorrow
                if int(startTime) < int(s['created']) < int(endTime):
                    counter += 1
            # Add the results to arrays
            cusData['sales'].append(counter)
            cusData['dates'].append(str(startDate))

        # Reverse lists
        cusData['sales'] = cusData['sales'][::-1]
        cusData['dates'] = cusData['dates'][::-1]

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


def get_popular_products():
    # Get Transaction amount
    try:
        cusData = dict()

        sales = stripe.PaymentIntent.list()

        # Get last months timestamp
        currentTimestamp = datetime.date.today()

        # Get the dates
        start = currentTimestamp - datetime.timedelta(31)
        end = currentTimestamp - datetime.timedelta(-1)

        # Get timestamps
        startTime = start.strftime("%s")
        endTime = end.strftime("%s")
            
        for s in sales['data']:
            # Check if the sale was made in between today and last month
            if int(startTime) < int(s['created']) < int(endTime) and s['status'] == "succeeded":
                if s['description'] not in cusData and len(cusData) < 9:
                    cusData[s['description']] = 1
                else:
                    if s['description'] in cusData:
                        cusData[s['description']] = cusData[s['description']] + 1

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


def get_users_per_country():
    # Get Transaction amount
    try:
        cusData = dict()

        sales = stripe.Customer.list()

        country_list = []

        for s in sales['data']:
            if 'tax_ids' in s and len(s["tax_ids"]["data"]) > 0:
                country_list.append(s["tax_ids"]["data"][0]['country'])
            elif 'sources' in s and "data" in s["sources"]:
                if 'country' in s['sources']['data'][0]:
                    country_list.append(s['sources']['data'][0]['country'])
                elif "country" in s['sources']['data'][0]['card']:
                    country_list.append(s['sources']['data'][0]['card']["country"])

        country_name = []            
        for c in country_list:
            country_name.append(pycountry.countries.get(alpha_2=c).name)
        
        country_return = dict()
        for c in country_name:
            if c not in country_return:
                country_return[c] = 1
            else:
                country_return[c] = country_return[c] + 1
        
        country_return = OrderedDict(sorted(country_return.items(), key=lambda kv: kv[1], reverse=True))
        
        country_list = country_return
        country_return = list()
        for c in country_list:
            country_return.append({
                "country": c,
                "user_number": country_list[c]
            })

        return country_return

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