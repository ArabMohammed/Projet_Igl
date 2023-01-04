from djoser.serializers import UserCreateSerializer
from django.contrib.auth.password_validation import validate_password
from django.core import exceptions
from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.db import models
from .models import UserAccount
from api.localisation.models import Wilaya,Commune
from rest_framework import serializers

User = get_user_model()

###########################

class UserCreateSerializer(UserCreateSerializer):
  class Meta:
    model = User
    fields = ('id','prenom', 'nom', 'email', 'password')

#########################

class UploadProfileImageSerializer(serializers.ModelSerializer):
  class Meta:
    model=UserAccount
    fields=['profile_image']
  def update(self,instance,validated_data):
    instance.profile_image=validated_data.get('profile_image',instance.profile_image)
    instance.save()
    return instance

######################################################"

class UpdateProfileSerializer(serializers.ModelSerializer):
  class Meta:
    model=UserAccount
    fields=['nom','prenom','email']
  def update(self,instance,validated_data):
    instance.nom=validated_data.get('nom',instance.nom)
    instance.prenom=validated_data.get('prenom',instance.prenom)
    instance.email=validated_data.get('email',instance.email)
    instance.save()
    return instance

########################################################
'''
class UpdateProfileSerializer(serializers.ModelSerializer):
  adresse=serializers.CharField(max_length=200)
  wilaya=serializers.IntegerField()
  commune=serializers.IntegerField()
  numero_telephone=serializers.CharField(max_length=15)
  class Meta:
    model=UserAccount
    fields=['nom','prenom','email','numero_telephone','adresse','wilaya','commune']
  def update(self,instance,validated_data):
    instance.nom=validated_data.get('nom',instance.nom)
    instance.prenom=validated_data.get('prenom',instance.prenom)
    instance.email=validated_data.get('email',instance.email)
    instance.save()
    return instance
'''
##########################################################
'''
class UserCreateSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id','first_name', 'last_name', 'email', 'password')
  def validate(self, data):
    user = User(**data)
    password = data.get('password')

    try:
      validate_password(password, user)
    except exceptions.ValidationError as e:
      serializer_errors = serializers.as_serializer_error(e)
      raise exceptions.ValidationError(
        {'password': serializer_errors['non_field_errors']}
      )

    return data


  def create(self, validated_data):
    user = User.objects.create_user(
      first_name=validated_data['first_name'],
      last_name=validated_data['last_name'],
      email=validated_data['email'],
      password=validated_data['password'],
    )

    return user
   '''
##############UseLess##########################

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('first_name', 'last_name', 'email',)


'''
from django.contrib.auth import get_user_model
User=get_user_model()
class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model =User
        fields = ('id','email','first_name','last_name','password')
'''     
