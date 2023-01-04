from django.urls import path
from . import views
urlpatterns =[
    #path('list/',views.AnnonceListCreateAPView.as_view()),
    ##creer un nouveau annonce
    #path('create/',views.AnnonceCreateAPView.as_view()),
    ##récuperer un annonce par son id
    #path('<int:pk>/',views.AnnonceDetailAPIView.as_view()),
    #path('list/',views.product_alt_view),
    #path('list/',views.AnnonceMixinAPIView.as_view(),name='annonce-list'),
    path('list/',views.LocalisationListCreateAPView.as_view()),
    path('create/',views.LocalisationCreateAPView.as_view()),
    #path('<int:pk>/delete/',views.AnnonceDestroyAPIView.as_view()),
    path('<int:pk>/update/',views.LocalisationUpdateAPIView.as_view()),
    path('dict_wilayas_communes/',views.WilayasCommunesListAPIView.as_view()),


]