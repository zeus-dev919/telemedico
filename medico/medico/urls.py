"""medico URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf.urls import url
from django.urls import path,include
from django.conf.urls.static import static
from django.conf import settings

from django.views.decorators.csrf import csrf_exempt
from graphene_django.views import GraphQLView
from payments import urls
from intake_form.views import intake_form
from userauth.views import get_post_data


urlpatterns = [
    path('admin/', admin.site.urls),
    path('graphql/',csrf_exempt(GraphQLView.as_view(graphiql=True))),
    #path('graphql/', get_post_data),
    path('payments/', include('payments.urls')),
    path('intake_form/',csrf_exempt(intake_form)),

    ]

if settings.DEBUG:
        urlpatterns += static(settings.MEDIA_URL,
                              document_root=settings.MEDIA_ROOT)
