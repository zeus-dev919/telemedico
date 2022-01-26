from graphene_django import DjangoObjectType
import graphene
from graphene import InputObjectType
from graphene_django.forms.mutation import DjangoFormMutation
from .forms import PatientIntakeForm

class IntakeMutation(DjangoFormMutation):
    class Meta:
        form_class =  PatientIntakeForm

schema = graphene.Schema(mutation=IntakeMutation)
