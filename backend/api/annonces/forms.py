from django import forms 
from .models import Annonce

class ProductForm(forms.ModelForm):
    class Meta:
        model= Annonce
        fields =[
            'titre',
            'description',
            'prix',
            'surface',
            'id_immobilier',
            'date_publication',
        ]