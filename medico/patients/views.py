from django.shortcuts import render
from .forms import *
from .models import *
from django.http  import HttpResponse
import json

# Create your views here.

def intake_form(request):
    if request.method == 'POST':
        data = request.body
        data = json.loads(data)
        form = PatientIntakeForm(data)
        if form.is_valid():
            # process form data

            #finally save the object in db
            form.save()
            return HttpResponse("saved")
        else:
            return  HttpResponse(str(form.errors))


    form=PatientIntakeForm()
    html= f'''<form action="" method="post">

    {form}
    <input type="submit" value="Submit">
</form>'''

    return HttpResponse(html)
