from django.db import models
from accounts.models import UserAccount
from api.localisation.models import Wilaya,Commune
class Contact(models.Model):
        utilisateur_id = models.ForeignKey(UserAccount,on_delete=models.PROTECT)
        nom=models.CharField(max_length=40)
        email=models.EmailField(blank=True)
        adresse=models.CharField(max_length=200)
        wilaya=models.ForeignKey(Wilaya,on_delete=models.PROTECT,blank=True,null=True)
        commune=models.ForeignKey(Commune,on_delete=models.PROTECT,blank=True,null=True)
        numero_telephone=models.CharField(max_length=15, blank=True)
# Create your models here.
