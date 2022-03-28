from rest_framework import serializers
from .models import *


class PatientHealthInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientIntakeModel
        fields = '__all__'
