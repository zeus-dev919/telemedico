from django.db import models
from django.contrib.auth.models import AbstractUser, User
from django.contrib.auth.models import UserManager
import datetime
from userauth.models import ExtendUser
from phonenumber_field.modelfields import PhoneNumberField




class Specialization(models.Model):
    specialization_name = models.CharField(max_length=1250, blank=True)
    hospital_name = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return self.specialization_name


class Doctor(models.Model):

    GENDER = (("male", "Male"), ("female", "Female"))
    DAYS = (("monday", "Mon"),("tuesday", "Tues"),("wednesday","Wed" ),("thursday", "Thurs"),("friday", "Fri"),("saturday", "Sat"),("sunday", "Sun"))

    username = models.ForeignKey(ExtendUser, on_delete=models.SET_NULL, null=True)
    first_name = models.CharField(max_length=20, blank=True)
    last_name = models.CharField(max_length=20,blank=True)
    gender = models.CharField(max_length=10, choices=GENDER)
    specialization = models.OneToOneField(Specialization,on_delete=models.CASCADE, primary_key=True)
    phone = PhoneNumberField(null=True)
    info = models.TextField('Information', max_length=1250, blank=True)
    address = models.CharField(max_length=15 , null=True, blank=True)
    street =  models.CharField(max_length=15 , null=True, blank=True)
    city =    models.CharField(max_length=15 , null=True, blank=True)
    state =   models.CharField(max_length=15 , null=True, blank=True)
    country = models.CharField(max_length=15 , null=True, blank=True)
    zip_code = models.CharField(max_length=15 , null=True, blank=True)
    npi_number = models.CharField(max_length=10, null=True, blank=False)
    state_license_number = models.CharField(max_length=12, null=True, blank=False)
    profile_picture = models.CharField(max_length=1250,null=True)
    #profile_Pic = models.ImageField(upload_to=None,verbose_name="Profile Picture", blank=True)
    #award_Pic = models.ImageField(upload_to=None,verbose_name="Award_ Picture", blank=True)
    consultation_fees = models.CharField(max_length=10, verbose_name="Consultation Fees", blank=True)
    available_days = models.CharField(max_length=10, choices=DAYS,default="Mon")
    time_slots = models.CharField(max_length=20,null=False, blank=True)
    consultation_time = models.IntegerField()

    def __str__(self):
        return self.first_name


class Customer(models.Model):

    GENDER = (("male", "Male"), ("female", "Female"))

    user = models.ForeignKey(ExtendUser, on_delete=models.SET_NULL, null=True)
    first_name = models.CharField(max_length=20, blank=True)
    last_name = models.CharField(max_length=20,blank=True)
    gender = models.CharField(max_length=10,  choices=GENDER, blank=True)
    traige_score = models.CharField(max_length=10, blank=True)
    diagnosis_ref = models.CharField(max_length=12, blank=True)
    avatar_pic = models.CharField(max_length=50, null=True)
    #profile_Pic = models.ImageField(upload_to=None,verbose_name="Profile Picture", blank=True)
    phone_number = PhoneNumberField(null=True)


    #objects = CustomerManager()

    def __str__(self):
        return self.first_name


class Appointment(models.Model):
    start_time = models.TimeField('Start time')
    end_time = models.TimeField('End time')
    date = models.DateField('Date')
    customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, null=True)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    specializations = models.ForeignKey(Specialization, on_delete=models.SET_NULL, null=True)
    rn_token = models.CharField(max_length=1250, blank=False, default="a")



    def __str__(self):
        return self.customer

    def save(self, *args, **kwargs):
        self.rn_token = gentoken()
        super(Appointment, self).save(*args, **kwargs)

    #    class Meta:
    #        ordering = ['start_time']

    #def __str__(self):
        #return str(self.start_time)

#    def get_absolute_url(self):
#        return f'/{self.doctor.id}/appoint/{self.id}'

#    def has_not_customer(self):         # change method to opposite(has_customer instead has_not_customer)
#
#            True if this appointment has not customer.
#            False if appointment already has customer.

#            :return: Boolean
#        """        return self.customer is None
    def is_outdated(self):
        """
        True if this appointment is outdated.
        False if appointment is still fresh.

        :return: Boolean
        """
        today = datetime.datetime.today()
        day = datetime.datetime.combine(self.date, self.start_time)
        return day <= today

    def is_working_day_appointment(self):
        """""
           True if this appointment is in working day.
           False if appointment is in weekend.

           :return: Boolean
        """""
        #function helps hide appointments on weekend
        return 0 <= self.date.weekday() <= 4

        has_not_customer.boolean = True
        has_not_customer.short_description = 'Has not customer?'

        is_outdated.boolean = True
        is_outdated.short_description = 'Is Outdated?'

        is_working_day_appointment.boolean = True
        is_working_day_appointment.short_description = 'Is in working day?'
