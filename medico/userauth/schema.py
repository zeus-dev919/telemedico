import graphene
from graphql_auth import mutations
from graphql_auth.schema import UserQuery, MeQuery
import authentication.schema
from authentication.schema import DoctorCreateInput,ModelQuery, CustomerInputCreate, Mutation as MutationAuthentication
from intake_form.schema import Mutation as MutationIntake


class AuthMutation(graphene.ObjectType):
    register = mutations.Register.Field()
    verify_account = mutations.VerifyAccount.Field()
    token_auth = mutations.ObtainJSONWebToken.Field()
    update_account = mutations.UpdateAccount.Field()
    resend_activation_email = mutations.ResendActivationEmail.Field()


class Query(UserQuery, MeQuery,ModelQuery, graphene.ObjectType):
    pass

class Mutation(AuthMutation, DoctorCreateInput, CustomerInputCreate, MutationAuthentication, MutationIntake, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query , mutation=Mutation)
