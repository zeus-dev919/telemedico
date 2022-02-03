from django import forms
from .models import *

class CustomerForm(forms.ModelForm):

    class Meta:
        model = Customer
        fields = '__all__'


class DoctorForm(forms.ModelForm):

    class Meta:
        model = Doctor
        fields = '__all__'
