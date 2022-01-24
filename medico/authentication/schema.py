from graphene_django import DjangoObjectType
import graphene
from .models import Doctor,Customer, Appointment
from graphene import InputObjectType
#from graphql_auth import mutations


class DoctorInfo(DjangoObjectType):
    class Meta:
        model = Doctor
        fields = "__all__"

class CustomerInfo(DjangoObjectType):
    class Meta:
        model = Customer
        fields = "__all__"

class ScheduleInfo(DjangoObjectType):
    class Meta:
        model = Appointment

class SpecializationInfo(DjangoObjectType):
    class Meta:
        model = Specialization

class ModelQuery(graphene.ObjectType):
    all_doctors = graphene.List(DoctorInfo)
    #all_locations = graphene.List(LocationType)
    all_customers = graphene.List(CustomerInfo)
    all_schedules = graphene.List(ScheduleInfo)
    all_specialization = graphene.List(SpecializationInfo)

    def resolve_all_doctors(self, args):
        return Doctor.objects.all()

    def resolve_all_locations(self, args):
        return Location.objects.all()

    def resolve_all_customers(self, args):
        return Customer.objects.all()

    def resolve_all_schedules(self, args):
        return Appointment.objects.all()

    def resolve_all_specialization(self, args):
        return Specialization.objects.all()



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

    doctor = graphene.Field(DoctorInfo)



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
        first_name = graphene.String(required=False)
        last_name  = graphene.String(required=False)
        gender = graphene.String(required=False)

    customer = graphene.Field(CustomerInfo)

    @classmethod
    def mutate(cls, root, info, first_name,last_name, gender,id):
        customer = Customer.objects.get(pk=id)
        customer.first_name = first_name
        customer.last_name = last_name
        customer.gender = gender
        customer.save()

        return CustomerInputCreate(customer=customer)











class Mutation(graphene.ObjectType):
    update_doctor = DoctorCreateInput.Field()
    update_customer = CustomerInputCreate.Field()

schema = graphene.Schema(query=ModelQuery, mutation=Mutation)
