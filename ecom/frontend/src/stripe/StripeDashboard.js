//import stripe from './StripeKey'
import { func } from 'prop-types'
const Stripe = require('stripe');
const stripe = Stripe('sk_test_qVyhxgBH7ndQwSUy6lW9SGVI00wKodpGe5');
import getMonthlySales from './../actions/dashboard'


export default function getDashboardData(){
    //return stripe.charges.retrieve('ch_1HfY0kGWT31bKfUA2ipUcIGe', {
     //   api_key: 'sk_test_qVyhxgBH7ndQwSUy6lW9SGVI00wKodpGe5'
     // });
    console.log("Hello")
};
