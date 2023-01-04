
from django.shortcuts import render
from rest_framework import generics , mixins ,permissions ,authentication
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework import permissions
from rest_framework.parsers import MultiPartParser, FormParser
from .models import ImageAnnonce,Annonce 
from .serializers import  AnnonceCreationSerializer,ImagesSerializer ,ResultatAnnonceSerializer ,DetailAnnonceSerializer
from rest_framework.decorators import parser_classes
from rest_framework.parsers import JSONParser
from .custom_renderers import PNGRenderer
from django.db.models import Q
from datetime import date
###########################################
##########################################
class ImagesLoadAPIView(generics.ListCreateAPIView):
    queryset = ImageAnnonce.objects.all()
    serializer_class = ImagesSerializer
    parser_classes = (MultiPartParser, FormParser)
    #permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    def perform_create(self, serializer):
        id_annonce=serializer.validated_data.get('id_annonce')
        print(f'id annonce : {id_annonce}')
        url_image=serializer.validated_data.get('image_url')
        annonce=Annonce.objects.filter(pk=int(id_annonce))
        print(annonce)
        image=ImageAnnonce(image_url=url_image,id_annonce=annonce[0])
        image.save()

###################################################################
##########To get the number of images of an annonce ##################
################################################################
class ImagesListAPView(generics.ListCreateAPIView):
    def get(self,serializer):
        id_annonce=self.get_queryset()
        queryset = ImageAnnonce.objects.filter(id_annonce__pk=id_annonce)
        data ={"nb_images":len(queryset)}
        return Response(data)
    
    def get_queryset(self):
        annonce_id=self.request.query_params.get('annonce_id')
        return annonce_id
#############################################################

class ImageAPIView(generics.RetrieveAPIView):
    renderer_classes = [PNGRenderer]
    def get(self, request, *args, **kwargs):
        print("id of image : "+str(self.kwargs['id']))
        print("id of image : "+str(self.kwargs['id_annonce']))
        queryset = ImageAnnonce.objects.filter(id_annonce=int(self.kwargs['id_annonce']))
        print(queryset)
        queryset = ImageAnnonce.objects.filter(id_annonce=int(self.kwargs['id_annonce']))[int(self.kwargs['id'])].image_url
        data = queryset
        print("image fetched ")
        return Response(data, content_type='image/png')

##########################################################

class AnnonceCreateAPView(generics.CreateAPIView):
    queryset=Annonce.objects.all()
    serializer_class=AnnonceCreationSerializer
    def perform_create(self,serializer):
        serializer.save(id_utilisateur=self.request.user)

###########################################################

class AnnonceDetailAPIView(generics.RetrieveAPIView):
    serializer_class=DetailAnnonceSerializer
    def get(self, request, *args, **kwargs):
        queryset = Annonce.objects.get(pk=int(self.kwargs['id']))
        data = DetailAnnonceSerializer(queryset).data
        data['nb_images']=len(ImageAnnonce.objects.filter(id_annonce=self.kwargs['id']))
        return Response(data)
###########################################################

class AnnonceDeleteAPIView(generics.DestroyAPIView):
    queryset = Annonce.objects.all()
    serializer_class=DetailAnnonceSerializer
    lookup_field='id'

    def perform_destroy(self, instance):
        return super().perform_destroy(instance)

############################################################

class AnnonceRechercheAPIView(generics.RetrieveAPIView):
    serializer_class=ResultatAnnonceSerializer     
    def get(self,serializer):
        searchInfo=self.get_queryset()
        print(searchInfo)

        ########Recherche selon type ##########
        queryset=Annonce.objects.all()
        first_annonce_date=queryset[0].date_publication
        print(f'first_annonce_date : {first_annonce_date}')

        if (searchInfo['wilaya']!=''):
            if(searchInfo["commune"])!='':
               if searchInfo["date_debut"]!='':
                  if searchInfo["date_fin"]!='' :
                    print("\n first \n")
                    queryset=Annonce.objects.filter(Q(titre__icontains=searchInfo["search_query"])|Q(categorie_immobilier=searchInfo["categorie"])|
                    Q(type_immobilier=searchInfo["type"])|Q(date_publication__range=(searchInfo['date_debut'],searchInfo['date_fin']))|Q(wilaya=searchInfo['wilaya'])|
                    Q(commune=searchInfo['commune']))
                  else :
                    queryset=Annonce.objects.filter(Q(titre__icontains=searchInfo["search_query"])|Q(categorie_immobilier=searchInfo["categorie"])|
                    Q(type_immobilier=searchInfo["type"])|Q(date_publication__range=(searchInfo['date_debut'],date.today()))|Q(wilaya=searchInfo['wilaya'])|
                    Q(commune=searchInfo['commune']))
               else:
                if searchInfo["date_fin"]!='' :
                    queryset=Annonce.objects.filter(Q(titre__icontains=searchInfo["search_query"])|Q(categorie_immobilier=searchInfo["categorie"])|
                    Q(type_immobilier=searchInfo["type"])|Q(date_publication__range=(first_annonce_date,searchInfo['date_fin']))|Q(wilaya=searchInfo['wilaya'])|
                    Q(commune=searchInfo['commune']))
                else :
                    queryset=Annonce.objects.filter(Q(titre__icontains=searchInfo["search_query"])|Q(categorie_immobilier=searchInfo["categorie"])|
                    Q(type_immobilier=searchInfo["type"])|Q(wilaya=searchInfo['wilaya'])|Q(commune=searchInfo['commune']))
            else :
                if searchInfo["date_debut"]!='':
                  if searchInfo["date_fin"]!='' :
                    print("second")
                    queryset=Annonce.objects.filter(Q(titre__icontains=searchInfo["search_query"])|Q(categorie_immobilier=searchInfo["categorie"])|
                    Q(type_immobilier=searchInfo["type"])|Q(date_publication__range=(searchInfo['date_debut'],searchInfo['date_fin']))|Q(wilaya=searchInfo['wilaya']))
                  else :
                    queryset=Annonce.objects.filter(Q(titre__icontains=searchInfo["search_query"])|Q(categorie_immobilier=searchInfo["categorie"])|
                    Q(type_immobilier=searchInfo["type"])|Q(date_publication__range=(searchInfo['date_debut'],date.today()))|Q(wilaya=searchInfo['wilaya']))
                else:
                  if searchInfo["date_fin"]!='' :
                    queryset=Annonce.objects.filter(Q(titre__icontains=searchInfo["search_query"])|Q(categorie_immobilier=searchInfo["categorie"])|
                    Q(type_immobilier=searchInfo["type"])|Q(date_publication__range=(first_annonce_date,searchInfo['date_fin']))|Q(wilaya=searchInfo['wilaya']))
                  else :
                    queryset=Annonce.objects.filter(Q(titre__icontains=searchInfo["search_query"])|Q(categorie_immobilier=searchInfo["categorie"])|
                    Q(type_immobilier=searchInfo["type"]))
        else :
            if searchInfo["date_debut"]!='':
                  if searchInfo["date_fin"]!='' :
                    print("second")
                    queryset=Annonce.objects.filter(Q(titre__icontains=searchInfo["search_query"])|Q(categorie_immobilier=searchInfo["categorie"])|
                    Q(type_immobilier=searchInfo["type"])|Q(date_publication__range=(searchInfo['date_debut'],searchInfo['date_fin'])))
                  else :
                    queryset=Annonce.objects.filter(Q(titre__icontains=searchInfo["search_query"])|Q(categorie_immobilier=searchInfo["categorie"])|
                    Q(type_immobilier=searchInfo["type"])|Q(date_publication__range=(searchInfo['date_debut'],date.today())))
            else:
                if searchInfo["date_fin"]!='' :
                    queryset=Annonce.objects.filter(Q(titre__icontains=searchInfo["search_query"])|Q(categorie_immobilier=searchInfo["categorie"])|
                    Q(type_immobilier=searchInfo["type"])|Q(date_publication__range=(first_annonce_date,searchInfo['date_fin'])))
                else :
                    queryset=Annonce.objects.filter(Q(titre__icontains=searchInfo["search_query"])|Q(categorie_immobilier=searchInfo["categorie"])|
                    Q(type_immobilier=searchInfo["type"])) 
        final_data=[]
        
        for response in queryset:
            data = ResultatAnnonceSerializer(response).data
            data["nom"]=response.id_utilisateur.nom
            data["prenom"]=response.id_utilisateur.prenom
            final_data.append(data)
        return Response(final_data)
    def get_queryset(self):
        data={}
        data['type']=self.request.query_params.get('type')
        data['categorie']=self.request.query_params.get('categorie')
        data['date_debut']=self.request.query_params.get('date_debut')
        data['date_fin']=self.request.query_params.get('date_fin')
        data['wilaya']=self.request.query_params.get('wilaya')
        data['commune']=self.request.query_params.get('commune')
        data['search_query']=self.request.query_params.get('search_query')
        return data 



##############MIXINS#######################

'''
class AnnonceMixinAPIView(mixins.ListModelMixin,
generics.GenericAPIView,
mixins.RetrieveModelMixin):
    queryset = Annonce.objects.all()
    serializer_class=TestAnnonceSerializer

    def get(self,request,*args,**kwargs):
        print(args,kwargs)
        pk=kwargs.get("pk")
        if pk is not None :
            return self.retrieve(request,*args,**kwargs)
        return self.list(request,*args,**kwargs)



############################################""
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
'''