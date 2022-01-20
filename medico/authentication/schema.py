from graphene_django import DjangoObjectType
import graphene
from .models import Doctor,Customer, Appointment
from graphene import InputObjectType
#from graphql_auth import mutations


class DoctorInfo(DjangoObjectType):
    class Meta:
        model = Doctor

class CustomerInfo(DjangoObjectType):
    class Meta:
        model = Customer

class ScheduleInfo(DjangoObjectType):
    class Meta:
        model = Appointment

class ModelQuery(graphene.ObjectType):
    all_doctors = graphene.List(DoctorInfo)
    #all_locations = graphene.List(LocationType)
    all_customers = graphene.List(CustomerInfo)
    all_schedules = graphene.List(ScheduleInfo)

    def resolve_all_doctors(self, args):
        return Doctor.objects.all()

    def resolve_all_locations(self, args):
        return Location.objects.all()

    def resolve_all_customers(self, args):
        return Customer.objects.all()

    def resolve_all_schedules(self, args):
        return Appointment.objects.all()

class DoctorCreateInput(graphene.Mutation):

    class Arguements:
        id = graphene.ID()
        first_name = graphene.String(required=False)
        last_name = graphene.String(required=False)
        gender = graphene.String(required=False)
        specialization = graphene.String(required=False)
        npi_number = graphene.String(required=False)
        state_license_number = graphene.String(required=False)
        available_days = graphene.String(required=False)



    first_name = graphene.String(required=False)
    last_name = graphene.String(required=False)
    gender = graphene.String(required=False)
    specialization = graphene.String(required=False)
    phone = graphene.String(required=False)
    info = graphene.String(required=False)
    address = graphene.String(required=False)
    street =  graphene.String(required=False)
    city =    graphene.String(required=False)
    state =   graphene.String(required=False)
    country = graphene.String(required=False)
    zip_code = graphene.String(required=False)
    npi_number = graphene.String(required=False)
    state_license_number = graphene.String(required=False)
    profile_Pic = graphene.String(required=False)
    award_Pic = graphene.String(required=False)
    consultation_fees = graphene.String(required=False)
    available_days = graphene.String(required=False)
    time_slots = graphene.String(required=False)

    @classmethod
    def mutate(cls, root, info, first_name,last_name, gender, specialization,npi_number,state_license_number,available_days):
        doctor = Doctor()
        doctor.first_name = first_name
        doctor.last_name = last_name
        doctor.gender = gender
        doctor.specialization = specialization
        doctor.phone = phone
        doctor.info = info
        doctor.address = address
        doctor.street = street
        doctor.city = city
        doctor.state = state
        doctor.country = country
        doctor.zip_code = zip_code
        doctor.npi_number = npi_number
        doctor.state_license_number = state_license_number
        doctor.available_days = available_days
        doctor.save()

        return DoctorCreateInput(doctor=doctor)

class CustomerInputCreate(graphene.Mutation):

    class Arguements:
        id = graphene.ID()
        



class Mutation(DoctorCreateInput, graphene.ObjectType):
    pass

schema = graphene.Schema(query=ModelQuery, mutation=Mutation)
