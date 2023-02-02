from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views
#/api/annonces/
urlpatterns =[
    #path('list/',views.AnnonceListCreateAPView.as_view()),
    ##creer un nouveau annonce
    ##récuperer un annonce par son id
    #path('<int:pk>/',views.AnnonceDetailAPIView.as_view()),
    #path('list/',views.product_alt_view),
    #path('list/',views.AnnonceMixinAPIView.as_view(),name='annonce-list'),
    #path('<int:pk>/',views.product_alt_view),
    #path('create/',views.product_alt_view),
    #path('<int:pk>/delete/',views.AnnonceDestroyAPIView.as_view()),
    #path('<int:pk>/update/',views.AnnonceUpdateAPIView.as_view(),name='annonce-detail'),
    path('create/',views.AnnonceCreateAPView.as_view()),
    path('list/',views.ImagesListAPView.as_view()),
    path('<id_annonce>/images/<id>',views.ImageAPIView.as_view()),
    path('<id>/',views.AnnonceDetailAPIView.as_view()),
    path('delete/<id>/',views.AnnonceDeleteAPIView.as_view()),
    path('loadimages/',views.ImagesLoadAPIView.as_view()),
    path('research/',views.AnnonceRechercheAPIView.as_view()),
    
    
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)