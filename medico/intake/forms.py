from django import forms
from .models import *

class PatientIntakeForm(forms.ModelForm):

    class Meta:
        model = PatientIntakemodel
        fields = '__all__'
