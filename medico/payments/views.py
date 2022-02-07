from django.shortcuts import render
import stripe
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http  import HttpResponse

# Create your views here.
stripe.api_key = 'sk_test_NabZ97T2L9XSSUZapustQMXj'


# @api_view(['POST'])

def test_payment(request):

    test_payment_intent = stripe.PaymentIntent.create(
    amount=1000, currency='pln',
    payment_method_types=['card'],
    receipt_email='samryker@gmail.com')

    # return Response(status=status.HTTP_200_OK, data=test_payment_intent)
    return HttpResponse(test_payment_intent)
