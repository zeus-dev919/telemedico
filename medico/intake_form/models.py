from django.db import models

# Create your models here.
class PatientIntakeModel(models.Model):
    type_form = models.CharField(max_length=50,null=False)
    doc_name  = models.CharField(max_length=50, null=True)
    name =  models.CharField(max_length=50, null=False)
    gender = models.CharField(max_length=50, null=False)
    birth = models.CharField(max_length=50, null =False)
    phone_number = models.CharField(max_length=50, null=False)
    patient_medical_hostory = models.CharField(max_length=50, null=True)
    current_medications = models.CharField(max_length=50, null=True)
    list_allergies = models.CharField(max_length=200, null=True)
    healthy_unhealthy = models.CharField(max_length=1250, null=False)
    father = models.CharField(max_length=30, null=True)
    mother = models.CharField(max_length=30, null=True)
    brother = models.CharField(max_length=50, null=True)
    sister = models.CharField(max_length=50, null=True)
    reason_for_consultation = models.CharField(max_length=100)
    question1 = models.CharField(max_length=100)
    question2 = models.CharField(max_length=100)
    question3 = models.CharField(max_length=100)
    appointment = models.CharField(max_length=64, null=True)
    #comments = models.CharField(max_length=100)

    def __str__(self):
        return str(self.name)
