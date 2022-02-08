from django.shortcuts import render
import stripe
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http  import HttpResponse

# Create your views here.
stripe.api_key = 'sk_test_NabZ97T2L9XSSUZapustQMXj'


@api_view(['POST'])
def save_stripe_info(request):
  data = request.data
  email = data['email']
  payment_method_id = data['payment_method_id']
  extra_msg = 'Your Payment has been successful' # add new variable to response message  # checking if customer with provided email already exists
  customer_data = stripe.Customer.list(email=email).data

  # if the array is empty it means the email has not been used yet
  if len(customer_data) == 0:
    # creating customer
    customer = stripe.Customer.create(
    email=email, payment_method=payment_method_id)
  else:
    customer = customer_data[0]
    extra_msg = "Customer already existed."
  return Response(status=status.HTTP_200_OK,
    data={'message': 'Success', 'data': {
      'customer_id': customer.id, 'extra_msg': extra_msg}
   })
