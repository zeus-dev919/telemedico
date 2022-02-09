from django.db import models

# Create your models here.
class PatientIntakemodel(models.Model):
    first_name = models.CharField(max_length = 200, null=False)
    last_name =  models.CharField(max_length=200,null=False )
    gender = models.CharField(max_length=50, null=False)
    email = models.EmailField(max_length=50, null=True)
    reason_for_consultation = models.CharField(max_length=50, null=True)
    patient_medical_hostory = models.CharField(max_length=50, null=True)
    list_operation =  models.CharField(max_length=50, null=True)
    current_medications = models.CharField(max_length=50, null=True)
    list_allergies = models.CharField(max_length=200, null=True)
    healthy_unhealthy = models.CharField(max_length=1250, null=False)
    father = models.CharField(max_length=30, null=True)
    mother = models.CharField(max_length=30, null=True)
    brother = models.CharField(max_length=50, null=True)
    sister = models.CharField(max_length=50, null=True)
    uncle =  models.CharField(max_length=50, null=True)
    reason_for_consultation = models.CharField(max_length=100)
    question1 = models.CharField(max_length=100)
    question2 = models.CharField(max_length=100)
    question3 = models.CharField(max_length=100)
    question4 = models.CharField(max_length=100)
    preffered_time_slots = models.CharField(max_length=64, null=True)
    comments = models.CharField(max_length=100)

    def __str__(self):
        return str(self.first_name)
