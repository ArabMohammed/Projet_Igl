from django.shortcuts import render
from django.http import JsonResponse
from django.forms.models import model_to_dict
import json
from api.annonces.models import Annonce
from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.localisation.models import *

######################
def api_home4(request):
   with open("static/Algerian_WDC.json", "r") as read_file:
      data = json.load(read_file)
      for i in range(0,len(data)):
        wilaya=Wilaya(nom=data[i]["wilaya_name_ascii"],nom_arab=data[i]["wilaya_name_arabe"])
        wilaya.save()
        daira_list=data[i]["Dairas"]
        for j in range(0,len(daira_list)):
            commune_list=daira_list[j]["communes"]
            for k in range(0,len(commune_list)):
                commune=Commune(wilaya_id=i+1,nom=commune_list[k]["commune_name_ascii"],nom_arab=commune_list[k]["commune_name"])
                commune.save()
        nom=data[i]["wilaya_name_ascii"]
        print(f"wilya : {nom} saved")
        print("\n")
   data={"response":"success"}
   return JsonResponse(data)

####################################
'''
@api_view(['GET','POST'])
def api_home3(request,*args,**kwargs):
   serializer= MiniAnnonceSerializer(data=request.data)
   if serializer.is_valid() :
       print(serializer.data)
       return Response(serializer.data)
'''
########################################""
@api_view(['GET','POST'])
def api_home2(request,*args,**kwargs):
   model_data=Annonce.objects.all().order_by("?").first()
   model_data=Annonce.objects.filter(id=2)[0]
   data={}
   if model_data :
      data = model_to_dict(model_data,fields=['id','titre','prix'])
   return Response(data)




######################################
def api_home1(request,*args,**kwargs):
   model_data=Annonce.objects.all().order_by("?").first()
   data={}
   if model_data :
      data = model_to_dict(model_data,fields=['pk','titre','prix'])
      #data = model_to_dict(model_data) to get all fields
      '''
      data['id']=model_data.pk
      data['titre']=model_data.titre
      data['description']=model_data.description
      data['prix']=model_data.prix
      data['date_publication']=model_data.date_publication
      data['id_immobilier']=model_data.id_immobilier
      '''
   return JsonResponse(data)
   ## because the default content-type for httpresponse is "text/html"
   #and add json_data = json.dumps(data)
   ##or return HttpResponse(json_data,headers={"content-type":"application/json"})

#############################################
##############################################
def api_home(request,*args,**kwargs):
    ###to see params in message 
    print("content of get")
    print(request.GET)
    print(request.GET["abc"])
    print("\n")
    body=request.body
    print(body)
    data={}
    try:
        data=json.loads(body)
    except:
        pass
    print(data)
    print(data.keys())
    print(data["query"])
    data['headers']=dict(request.headers)
    data["params"]=dict(request.GET)
    data['content_type']=request.content_type
    print("\n")
    print(data)

    return JsonResponse(data)


# Create your views here.
