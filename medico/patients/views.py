from django.shortcuts import render
from medico.settings import EMAIL_HOST_USER
from .forms import *
from .models import *
from django.http  import HttpResponse
import json
from django.core.mail import send_mail
# Create your views here.

def intake_form(request):
    intake = forms.PatientIntakeForm()
    if request.method == 'POST':
        intake = forms.PatientIntakeForm(request.POST)
        if intake is valid():
            intake.save()
            (send_mail('MediPocket',
            "Hello , You have a new patient for consultation.)Kindly contact the admin to book a schedule a meeting time with the concerned patient")

            return HttpResponse("saved")
        else:
            return  HttpResponse(str(form.errors))


    form=PatientIntakeForm()
    html= f'''<form action="" method="post">

    {form}
    <input type="submit" value="Submit">
</form>'''

    return HttpResponse(html)
