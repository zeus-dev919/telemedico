from django import forms
from .models import *

class PatientIntakeForm(forms.ModelForm):

    class Meta:
        model = PatientIntakemodel
        fields = ['first_name', 'last_name','reason_for_consultation','gender','patient_medical_hostory','list_allergies','father','mother','brother','sister','current_medications','healthy_unhealthy']
