from django.urls import path
from . import views # "." = this directory

urlpatterns= [
    path('',views.store, name="store"),
    path('magazin/',views.magazin, name="magazin"),
    path('checkout',views.checkout, name="checkout"),
    path('desprenoi/',views.desprenoi,name="desprenoi"),
    path('noutati',views.noutati,name="noutati"),
    path('searchresults',views.searchresults,name="searchresults"),
    path('cos',views.cos,name="cos"),
    path('contact',views.contact,name="contact"),
    path('update_item/',views.updateItem,name="update_item"),
    path('/redirect/', views.redirect_view),
    path('multumim',views.multumim,name="multumim"),
]
