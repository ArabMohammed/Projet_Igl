from django.urls import path,include

from . import views
#/api/
urlpatterns=[
    path('',views.api_home4),
    path('localisation/',include('api.localisation.urls')),
    path('contacts/',include('api.contacts.urls')),
    path('annonces/',include('api.annonces.urls')),
]
