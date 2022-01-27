from graphene_django import DjangoObjectType
import graphene
from graphene import InputObjectType
from graphene_django.forms.mutation import DjangoModelFormMutation
from .forms import PatientIntakeForm
from .models import PatientIntakemodel

class  IntakeType(DjangoObjectType):
    class Meta:
        model = PatientIntakemodel

class IntakeMutation(DjangoModelFormMutation):
    intake = graphene.Field(IntakeType)

    class Meta:
        form_class =  PatientIntakeForm

class Mutation(graphene.ObjectType):
    create_intake = IntakeMutation.Field()

schema = graphene.Schema(mutation=Mutation)
