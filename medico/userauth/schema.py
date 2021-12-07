import graphene
from graphql_auth.schema import UserQuery, MeQuery



class Query(UserQuery, MeQuery, graphene.ObjectType):
    pass



schema = graphene.Schema(query=Query)
