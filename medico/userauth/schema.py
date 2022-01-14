import graphene
from graphql_auth import mutations
from graphql_auth.schema import UserQuery, MeQuery
import authentication.schema



class AuthMutation(graphene.ObjectType):
    register = mutations.Register.Field()
    verify_account = mutations.VerifyAccount.Field()
    token_auth = mutations.ObtainJSONWebToken.Field()
    update_account = mutations.UpdateAccount.Field()
    resend_activation_email = mutations.ResendActivationEmail.Field()


class Query(UserQuery, MeQuery, graphene.ObjectType):
    pass

class Query(authentication.schema.Query, graphene.ObjectType):
    pass

class Mutation(authentication.schema.Mutation, graphene.ObjectType):
    pass

class Mutation(AuthMutation, graphene.ObjectType):
    pass





schema = graphene.Schema(query=Query , mutation=Mutation)
