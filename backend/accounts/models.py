from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    BaseUserManager
)
<<<<<<< HEAD
=======

>>>>>>> 5381141f3763ac1fae77b67a6d3990af0f863eef
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

<<<<<<< HEAD
def get_profile_image_filepath(self, filename):
      print("\n\n saving the new image \n\n")
      return 'profile_images/' + str(self.pk) + '/profile_image.png'  
class UserAccount(AbstractBaseUser,PermissionsMixin):
    username = None
    email = models.EmailField(max_length=255,unique=True)
    prenom = models.CharField(max_length=40)
    nom = models.CharField(max_length=40)
    date_joined= models.DateTimeField(verbose_name='date joined', auto_now_add=True)
    is_active=models.BooleanField(default=True)
    is_staff=models.BooleanField(default=False)
    last_login=models.DateTimeField(verbose_name='last login', auto_now=True)
    hide_email=models.BooleanField(default=True)
    is_superuser= models.BooleanField(default=False)
    is_admin= models.BooleanField(default=False)
    profile_image= models.ImageField(max_length=255, upload_to=get_profile_image_filepath, null=True, blank=True,)
=======
class UserAccount(AbstractBaseUser,PermissionsMixin):
    email = models.EmailField(max_length=255,unique=True)
    prenom = models.CharField(max_length=40)
    nom = models.CharField(max_length=40)
    is_active=models.BooleanField(default=True)
    is_staff=models.BooleanField(default=False)
    #is_admin = models.BooleanField(default=False)

>>>>>>> 5381141f3763ac1fae77b67a6d3990af0f863eef
    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS= ['prenom','nom']
    
<<<<<<< HEAD
    def get_prenom(self):
        return self.prenom
    def get_nom(self):
        return self.nom
    def __str__(self):
        return self.email

    # For checking permissions. to keep it simple all admin have ALL permissons
    def has_perm(self, perm, obj=None):
        return self.is_admin

    # Does this user have permission to view this app? (ALWAYS YES FOR SIMPLICITY)
    def has_module_perms(self, app_label):
        return True

=======
    def get_name(self):
        return self.prenom
    def __str__(self):
        return self.email

>>>>>>> 5381141f3763ac1fae77b67a6d3990af0f863eef
# Create your models here.
