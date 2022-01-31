from graphene_django import DjangoObjectType
import graphene
from graphene import InputObjectType
from graphene_django.forms.mutation import DjangoModelFormMutation
from .forms import PatientIntakeForm
from .models import PatientIntakemodel

class PatientType(DjangoObjectType):
    class Meta:
        model = PatientIntakemodel

class PatientMutation(DjangoModelFormMutation):
    patient = graphene.Field(PatientType)

    class Meta:
        form_class = PatientIntakeForm

class Mutation(graphene.ObjectType):
    create_patient = PatientMutation.Field()

schema = graphene.Schema(mutation=Mutation)
