from django.contrib import admin
from .models import ExtendUser, CapturePost
from django.apps import apps 
# Register your models here.
admin.site.register(ExtendUser)
admin.site.register(CapturePost)


app = apps.get_app_config('graphql_auth')


