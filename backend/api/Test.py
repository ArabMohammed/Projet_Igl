from django.db import models
import json

class Wilaya(models.Model):
    nom = models.CharField(max_length=40)
    nom_arab=models.CharField(max_length=40,blank=True)
    def __str__(self):
        return self.name
class Commune(models.Model):
    wilaya = models.ForeignKey(Wilaya, on_delete=models.CASCADE)
    nom = models.CharField(max_length=40)
    nom_arab=models.CharField(max_length=40,blank=True)
    
with open("static/Algerian_WDC.json", "r") as read_file:
      data = json.load(read_file)
      for i in range(0,len(data)):
        wilaya=Wilaya(nom=data[i]["wilaya_name_ascii"],nom_arab=data[i]["wilaya_name_arabe"])
        wilaya.save()
        daira_list=data[i]["Dairas"]
        for j in range(0,len(daira_list)):
            commune_list=daira_list[j]["communes"]
            for k in range(0,len(commune_list)):
                commune=Commune(nom=commune_list[k]["commune_name_ascii"],nom_arab=commune_list[k]["commune_name"])
                commune.save()
        nom=data[i]["wilaya_name_ascii"]
        print(f"wilya : {nom} saved")
