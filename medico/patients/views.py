from django.shortcuts import render
from django import forms
from medico.settings import EMAIL_HOST_USER
from .forms import PatientIntakeForm
from .models import *
from django.http  import HttpResponse
import json
from django.core.mail import send_mail
from django.conf import settings
# Create your views here.

def intake_form(request):
    intake = PatientIntakeForm(request.POST)
    if intake.is_valid():
        data=intake.save()
        subject = "MediPocket Consultation"
        message = f'A new intake form has been added.Kindly check payment gateway to confirm timings to doctor.'.data
        email_from = settings.EMAIL_HOST_USER
        recipient_list = ["priyanka@mymedipocket.com",]
        try:
            send_mail(subject, message, from_email, recipient_list,fail_silently=False )
        except BadHeaderError:
            return HttpResponse('Invalid header found.')
        return HttpResponse('success')
    return HttpResponse('200')
