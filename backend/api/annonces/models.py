from django.db import models
from django.utils.translation import gettext_lazy as _
from  datetime import date
import uuid
from accounts.models import UserAccount
from api.localisation.models import Localisation,Wilaya,Commune
from api.contacts.models import Contact
from django.utils  import timezone
import os

#################################
#class AnnonceManager(models.Model):
    
#################################

class Annonce(models.Model):
    
    class Categorie(models.TextChoices):
        VENTE = 'Vente',_('Vente')
        ECHANGE = 'Echange', _('Echange')
        LOCATION = 'Location', _('Location')
        LOCATIONVACANCE = 'Location pour vacance', _('Location pour vacance')
    class Type(models.TextChoices):
        TERRAIN= 'Terrain',_('Terrain')
        TERRAINAGRICOLE='Terrain Agricole',('Terrain Agricole')
        APPARTEMENT='Appartement',_('Appartement')
        MAISON='Maison',('Maison')
        BUNGALOW='Bungalow',('Bungalow')
    class UnitePrix(models.TextChoices):
        DA= 'Da',_('Da')
        MILLION_CENTIME='Million centime',('Million centime')
        MILLIARD_CENTIME='Milliard centime',_('Milliard centime')
        DA_m2='DA par m2',('DA par m2')
        MILLION_CENTIME_m2='Million par m2',('Million par m2')
    titre=models.CharField(max_length=400,blank=False)

    id_utilisateur=models.ForeignKey(UserAccount,on_delete=models.PROTECT)

    description=models.TextField()
    prix=models.CharField(max_length=20)
    surface=models.CharField(max_length=20)
    date_publication=models.DateField(default=timezone.now, blank=False)
   
    categorie_immobilier = models.CharField(max_length=25,choices=Categorie.choices,default=Categorie.VENTE)
    type_immobilier=models.CharField(max_length=25,choices=Type.choices,default=Type.APPARTEMENT)
    unite_prix=models.CharField(max_length=25,choices=UnitePrix.choices,default=UnitePrix.DA)
   
    contact = models.ForeignKey(Contact,on_delete=models.PROTECT)
    wilaya = models.ForeignKey(Wilaya,on_delete=models.PROTECT)
    commune = models.ForeignKey(Commune,on_delete=models.PROTECT)
    adresse_bien_immobilier=models.CharField(max_length=200)
    id_immobilier = models.UUIDField(default=uuid.uuid4, editable=False)
    #localisation=models.ForeignKey(Localisation,on_delete=models.PROTECT)
    
    vendu=models.BooleanField(default=False)
    public = models.BooleanField(default=False)

    parking=models.BooleanField(default=False)
    terrasse=models.BooleanField(default=False)
    garage=models.BooleanField(default=False)
    meuble=models.BooleanField(default=False)
    eau=models.BooleanField(default=False)
    gaz=models.BooleanField(default=False)
    electricite=models.BooleanField(default=False)


    @property
    def sale_price(self):
        return self.prix*0.8
    def get_discount(self):
        return self.prix

def upload_to(self,filename):
    split_tup=os.path.splitext(filename)
    extension=split_tup[1]
    print('annoncesImages/'+str(self.id_annonce.pk)+'/'+str(uuid.uuid1())+str(extension))
    return 'annoncesImages/'+str(self.id_annonce.pk)+'/'+str(uuid.uuid1())+str(extension)
class ImageAnnonce(models.Model):
    image_url = models.ImageField(upload_to=upload_to, blank=True, null=True)
    id_annonce=models.ForeignKey(Annonce,on_delete=models.CASCADE)
    '''
    def update_model(self):
        image_id=self.pk 
        annonce_id=self.id_annonce
        image_url='annoncesImages/'+str(annonce_id)+'/'+str(image_id)
        ImageAnnonce.objects.filter(id=image_id).update(image_url=image_url)
    def save(self,*args,**kwargs):
        super(ImageAnnonce,self).save(*args,**kwargs)
        self.update_model()
    '''