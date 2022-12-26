from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    BaseUserManager
)

class UserAccountManager(BaseUserManager):
    def create_user(self,email,prenom,nom,password=None,**extra_fields):
        if not email:
            raise ValueError('Users must have an adress email')
        if not prenom:
            raise ValueError("User must add a first name")
        if not nom:
            raise ValueError("User must add a last name")
        email = self.normalize_email(email)
        user=self.model(email=email,prenom=prenom,nom=nom,**extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        print("\n\n welcome in user creation \n\n")
        return user 
    def create_superuser(self,email,prenom,nom,password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have an adress email')
        if not prenom:
            raise ValueError("User must add a first name")
        if not nom:
            raise ValueError("User must add a last name")
        user=self.create_user(email,prenom,nom,password=password,**extra_fields)
        user.is_active = True
        user.is_staff = True
        user.is_admin = True
        user.save(using=self._db)
        return user

class UserAccount(AbstractBaseUser,PermissionsMixin):
    email = models.EmailField(max_length=255,unique=True)
    prenom = models.CharField(max_length=40)
    nom = models.CharField(max_length=40)
    is_active=models.BooleanField(default=True)
    is_staff=models.BooleanField(default=False)
    #is_admin = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS= ['prenom','nom']
    
    def get_name(self):
        return self.prenom
    def __str__(self):
        return self.email

# Create your models here.
