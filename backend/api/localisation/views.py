from django.shortcuts import render
from django.shortcuts import render
from rest_framework import generics , mixins ,permissions ,authentication
from .serializers import LocalisationSerializer ,WilayaSerializer,CommuneSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Localisation,Wilaya,Commune

###########################################

class WilayasCommunesListAPIView(generics.ListAPIView):
    def get(self,serializer):
        queryset1=Wilaya.objects.all()
        queryset2=Commune.objects.all()
        data1=WilayaSerializer(queryset1,many=True).data
        data2=CommuneSerializer(queryset2,many=True).data
        data={"wilayas":data1,
        "communes":data2}
        return Response(data)

###################################################

class LocalisationListCreateAPView(generics.ListCreateAPIView):
    def get(self,serializer):
        queryset = Localisation.objects.filter(utilisateur_id=self.request.user.id)
        data =LocalisationSerializer(queryset,many=True).data
        return Response(data)

##########################################""

class LocalisationCreateAPView(generics.CreateAPIView):
    queryset=Localisation.objects.all()
    serializer_class=LocalisationSerializer

    def perform_create(self,serializer):
        serializer.save(utilisateur_id=self.request.user)

##############################################

class LocalisationUpdateAPIView(generics.UpdateAPIView):
    queryset = Localisation.objects.all()
    serializer_class = LocalisationSerializer
    lookup_field='pk'

    def perform_update(self,serializer):
        serializer.save(utilisateur_id=self.request.user.id)
        
#################################################

'''
class AnnonceDestroyAPIView(generics.DestroyAPIView):
    queryset = Annonce.objects.all()
    serializer_class=TestAnnonceSerializer
    lookup_field='pk'

    def perform_destroy(self, instance):
        return super().perform_destroy(instance)



#################################################
@api_view(['POST','GET'])
def product_alt_view(request,pk=None,*args,**kwargs):
    method=request.method
    if method=='GET':
        if pk is not None :
            obj=get_object_or_404(Annonce,pk=pk)
            data=TestAnnonceSerializer(obj,many=False).data
            return Response(data)
        queryset = Annonce.objects.all()
        #serialize our query set
        data =TestAnnonceSerializer(queryset,many=True).data
        return Response(data)
    if method=='POST':
        #create an annonce
        serializer=TestAnnonceSerializer(data=request.data)
        #instance=serializer.save()
        #instance=firm.save()
        if serializer.is_valid(raise_exception=True):
            titre=serializer.validated_data.get('titre')
            description=serializer.validated_data.get('description')
            if description is None :
               description=titre
            serializer.save(description=description)
            return Response(serializer.validated_data)
        return Response({"invalid":"not good data"},status=400)
# Create your views here.
'''