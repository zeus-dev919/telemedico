from django import forms
from .models import *

class PatientIntakeForm(forms.ModelForm):

    class Meta:
        model = PatientIntakeModel
        fields = '__all__'

