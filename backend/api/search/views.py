from django.shortcuts import render
from rest_framework import generics
from annonces.models import Annonce
from annonces.serializers import TestAnnonceSerializer
class SearchListView(generics.ListAPIView):
    queryset=Annonce.objects.all()
    serializer_class=TestAnnonceSerializer

    def get_queryset(self,*args,**kwargs):
        qs=super().get_queryset(*args,**kwargs)
        q=self.request.GET.get('q')
        user=None
        if self.request.user.is_authenticated:
            user=self.request.user
        return super().get_queryset()
