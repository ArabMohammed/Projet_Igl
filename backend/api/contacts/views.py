from django.shortcuts import render
from django.shortcuts import render
from rest_framework import generics , mixins ,permissions ,authentication
from .serializers import ContactSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Contact

###########################################

class ContactListAPView(generics.ListCreateAPIView):
    def get(self,serializer):
        queryset = Contact.objects.filter(utilisateur_id=self.request.user.id)
        data =ContactSerializer(queryset,many=True).data
        return Response(data)

##########################################""

class ContactCreateAPView(generics.CreateAPIView):
    queryset=Contact.objects.all()
    serializer_class=ContactSerializer

    def perform_create(self,serializer):
        serializer.save(utilisateur_id=self.request.user)

##############################################
'''
class LocalisationUpdateAPIView(generics.UpdateAPIView):
    queryset = Localisation.objects.all()
    serializer_class = LocalisationSerializer
    lookup_field='pk'

    def perform_update(self,serializer):
        serializer.save(utilisateur_id=self.request.user.id)
'''
        
#################################################



















'''
from django.shortcuts import render
from .serializers import TestAnnonceSerializer ,MiniAnnonceSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

class AnnonceListCreateAPView(generics.ListCreateAPIView):
    queryset=Annonce.objects.all()
    serializer_class=TestAnnonceSerializer
    authentication_classes=[authentication.SessionAuthentication]
    permission_classes=[permissions.IsAuthenticated]
    permission_classes=[permissions.DjangoModelPermissions]


    def perform_create(self,serializer):
        #serializer.save(user=self.request.user)
        email=serializer.validated_data.pop('email')
        print(email)
        titre=serializer.validated_data.get('titre')
        description = serializer.validated_data.get('description')
        if description is None :
            description=titre
        serializer.save(description=description)
##########################################""
class AnnonceCreateAPView(generics.CreateAPIView):
    queryset=Annonce.objects.all()
    serializer_class=TestAnnonceSerializer

    def perform_create(self,serializer):
        #serializer.save(user=self.request.user)
        print(serializer.validated_data)
        titre=serializer.validated_data.get('titre')
        description = serializer.validated_data.get('description')
        if description is None :
            description=titre
        serializer.save(description=description)
############################################
class AnnonceDetailAPIView(generics.RetrieveAPIView):
    queryset = Annonce.objects.all()
    serializer_class = MiniAnnonceSerializer

##############################################
class AnnonceUpdateAPIView(generics.UpdateAPIView):
    queryset = Annonce.objects.all()
    serializer_class = TestAnnonceSerializer
    lookup_field='pk'

    def perform_update(self,serializer):
        instance = serializer.save()
        if not instance.description :
            instance.description=instance.titre
        
#################################################


class AnnonceDestroyAPIView(generics.DestroyAPIView):
    queryset = Annonce.objects.all()
    serializer_class=TestAnnonceSerializer
    lookup_field='pk'

    def perform_destroy(self, instance):
        return super().perform_destroy(instance)
'''