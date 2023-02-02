from rest_framework import serializers
from rest_framework.reverse import reverse
from api.serializers import UserPublicSerializer
from . import validators
from .models import Annonce ,ImageAnnonce
###################################################
class DetailAnnonceSerializer(serializers.ModelSerializer):
    class Meta:
        model= Annonce
        fields =[
            
            'pk',
            'titre',
            'description',
            'prix',
            'surface',

            'categorie_immobilier',
            'type_immobilier',
            'unite_prix',

            'contact',
            'date_publication',

            'wilaya',
            'commune',
            'adresse_bien_immobilier',

            'vendu',
            'public',
            'parking',
            'terrasse',
            'garage',
            'meuble',
            'eau',
            'gaz',
            'electricite',
        ]
##################################################
class ResultatAnnonceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Annonce
        fields=[
            'pk',
            'titre',
            'wilaya',
            'commune',
            'adresse_bien_immobilier',
            'date_publication',
        ]
##################################################
class AnnonceRechercheSerializer(serializers.ModelSerializer):
    date_debut=serializers.DateTimeField()
    date_fin=serializers.DateTimeField()
    search_query=serializers.CharField(max_length=100)
    class Meta:
        model=Annonce
        fields=[
            'wilaya',
            'commune',
            'categorie_immobilier',
            'type_immobilier',
            'date_debut',
            'date_fin',
            'search_query'
        ]
###########Annonce###############################
class ImagesSerializer(serializers.ModelSerializer):
    image_url = serializers.ImageField(required=False)
    id_annonce=serializers.CharField(max_length=40)
    class Meta:
        model=ImageAnnonce
        fields=[
            'pk',
            'image_url',
            'id_annonce',
        ]
class AnnonceCreationSerializer(serializers.ModelSerializer):
    class Meta:
        model= Annonce
        fields =[
            'pk',
            'titre',
            'description',
            'prix',
            'surface',

            'categorie_immobilier',
            'type_immobilier',
            'unite_prix',

            'contact',
            #'localisation',
            'wilaya',
            'commune',
            'adresse_bien_immobilier',
            'vendu',
            'public',
            'parking',
            'terrasse',
            'garage',
            'meuble',
            'eau',
            'gaz',
            'electricite',
        ]
'''
class TestAnnonceSerializer(serializers.ModelSerializer):
    owner=UserPublicSerializer(source='user',read_only=True)
 
    url = serializers.HyperlinkedIdentityField(
        view_name='annonce-detail',
        lookup_field='pk',
    )
    user=UserPublicSerializer(read_only=True)
    email=serializers.EmailField()
    titre=serializers.CharField(validators=[validators.unique_annonce_titre_user])
 
    class Meta:
        model= Annonce
        fields =[
            'owner',
            'email',
            'pk',
            'titre',
            'description',
            'prix',
            'surface',
            'date_publication'
        ]
    
    def validate_titre(self,value):
        ## we can put titre_exact for case sensitive
        ## or titre_iexact for case insensitive
        request=self.context.get('request')
        ###to insure that the user will not have two announces with the same titre
        ### remove user=user to avoid this verification
        user=request.user
        qs=Annonce.objects.filter(user=user,titre_iexact=value)
        if qs.exists():
            raise serializers.ValidationError(f"{value} est déja me titre d'un annonce")
        return value
  
    def create(self,validated_data):
        #email=validated_data.pop('email')
        obj=super().create(validated_data)
        return obj
        #return Annonce.objects.create(**validated_data)
    
  
    def get_url(self,obj):
        request=self.context.get('request')
        print(f'request{request}')
        if request is None :
            return None
        return reverse("annonce-detail",kwargs={"pk":obj.pk},request=request)
'''