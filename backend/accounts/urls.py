from django.urls import path
<<<<<<< HEAD
from .views import RegisterView,RetrieveUserView,ImageProfileUpdateAPIView,GetImageProfileAPIView,ProfileUpdateAPIView
from django.conf import settings
from django.conf.urls.static import static
#accounts/
urlpatterns = [
    path('register',RegisterView.as_view()),
    path('me', RetrieveUserView.as_view()),
    path('me/updateprofile/', ProfileUpdateAPIView.as_view()),
    path('<id>/profileimage',GetImageProfileAPIView.as_view()),
    path('profilimage/update/',ImageProfileUpdateAPIView.as_view()),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
=======
from .views import RegisterView,RetrieveUserView

urlpatterns = [
    path('register',RegisterView.as_view()),
     path('me', RetrieveUserView.as_view()),
]
>>>>>>> 5381141f3763ac1fae77b67a6d3990af0f863eef
