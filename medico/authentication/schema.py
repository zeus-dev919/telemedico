from graphene_django import DjangoObjectType
import graphene
from .models import Doctor,Customer, Appointment


class DoctorInfo(DjangoObjectType):
    class Meta:
        model = Doctor

class CustomerInfo(DjangoObjectType):
    class Meta:
        model = Customer

class ScheduleInfo(DjangoObjectType):
    class Meta:
        model = Appointment

class Query(graphene.ObjectType):
    all_doctors = graphene.List(DoctorInfo)
    #all_locations = graphene.List(LocationType)
    all_customers = graphene.List(CustomerInfo)
    all_schedules = graphene.List(ScheduleInfo)

    def resolve_all_doctors(self, args, context, info):
        return Doctor.objects.all()

    def resolve_all_locations(self, args, context, info):
        return Location.objects.all()

    def resolve_all_customers(self, args, context, info):
        return Customer.objects.all()

    def resolve_all_schedules(self, args, context, info):
        return Appointment.objects.all()


class ModelMutation(graphene.ObjectType):
    first_name  = mutations.Register.Field()
    verify_account = mutations.VerifyAccount.Field()
    token_auth = mutations.ObtainJSONWebToken.Field()
    update_account = mutations.UpdateAccount.Field()
    resend_activation_email = mutations.ResendActivationEmail.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
