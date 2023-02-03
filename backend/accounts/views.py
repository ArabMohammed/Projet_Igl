from django.shortcuts import render
from rest_framework.views import APIView
<<<<<<< HEAD
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics , mixins ,permissions ,authentication
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework import permissions
from rest_framework.parsers import MultiPartParser, FormParser
from .models import UserAccount
from .serializers import UserCreateSerializer , UploadProfileImageSerializer ,UserSerializer ,UpdateProfileSerializer
from api.annonces.custom_renderers import PNGRenderer
from api.contacts.models import Contact
from api.localisation.models import Wilaya,Commune
=======
from .serializers import UserCreateSerializer, UserSerializer
from rest_framework.response import Response
from rest_framework import permissions, status
>>>>>>> 5381141f3763ac1fae77b67a6d3990af0f863eef

class RegisterView(APIView):
  def post(self, request):
    data = request.data

    serializer = UserCreateSerializer(data=data)

    if not serializer.is_valid():
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    user = serializer.create(serializer.validated_data)
    user = UserSerializer(user)

    return Response(user.data, status=status.HTTP_201_CREATED)

class RetrieveUserView(APIView):
  permission_classes = [permissions.IsAuthenticated]

  def get(self, request):
    user = request.user
    user = UserSerializer(user)

<<<<<<< HEAD
    return Response(user.data, status=status.HTTP_200_OK)
##############################################################

class ImageProfileUpdateAPIView(generics.UpdateAPIView):
  serializer_class=UploadProfileImageSerializer
  queryset=UserAccount.objects.all()
  parser_classes = (MultiPartParser, FormParser)
  def update(self,request,*args,**kwargs):
    print(f'image_url : {request.data.get("image_url")}')
    data_to_change={'profile_image':request.data.get("image_url")}
    serializer=self.serializer_class(request.user,data=data_to_change,partial=True)
    if serializer.is_valid():
      self.perform_update(serializer)
    return Response(serializer.data)

###############################################################

class ProfileUpdateAPIView(generics.UpdateAPIView):
  serializer_class=UpdateProfileSerializer
  def update(self,request,*args,**kwargs):
    data=request.data
    data_to_change={
      'nom':data.get("nom"),
      'prenom':data.get("prenom"),
      'email':data.get('email'),
    }
    serializer=self.serializer_class(request.user,data=data_to_change,partial=True)
    if serializer.is_valid():
      self.perform_update(serializer)
    ########create a new contact ###########
    wilaya=Wilaya.objects.get(pk=data.get('wilaya'))
    commune=Commune.objects.get(pk=data.get('commune'))
    contact=Contact(utilisateur_id=request.user,nom=data.get("nom")+' '+data.get("prenom"),adresse=data.get('adresse'),commune=commune,
                wilaya=wilaya,numero_telephone=data.get("numero_telephone"))
    contact.save()
    return Response(serializer.data)
###############################################################

class GetImageProfileAPIView(generics.CreateAPIView):
    renderer_classes = [PNGRenderer]    
    def get(self , *args, **kwargs):
        queryset = UserAccount.objects.filter(pk=self.kwargs['id'])[0].profile_image
        data = queryset
        print("image fetched ")
        return Response(data, content_type='image/png')
=======
    return Response(user.data, status=status.HTTP_200_OK)
>>>>>>> 5381141f3763ac1fae77b67a6d3990af0f863eef
