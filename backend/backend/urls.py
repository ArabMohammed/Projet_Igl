from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView,TokenVerifyView
urlpatterns = [
   path('admin/', admin.site.urls),
   #path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
   #path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
   #path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
   #path('api/users/',include('accounts.urls'))
   path('auth/',include('djoser.urls')),
   path('auth/',include('djoser.urls.jwt')),
   path('auth/',include('djoser.social.urls')),
   #path('api/',include(('core.routers','core'),namespace='core-api')), 
   #path('', include('core.urls')),
   #path('auth/', obtain_auth_token),

]
urlpatterns+=[re_path(r'^.*',TemplateView.as_view(template_name='index.html'))]
