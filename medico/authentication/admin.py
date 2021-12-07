from django.contrib import admin
from django.contrib import admin
from .models import Appointment
from .models import Doctor
from .models import Customer







admin.site.register(Doctor)
admin.site.register(Customer)
admin.site.register(Appointment)
# admin.site.register(User, UserAdmin)
# Register your models here.
