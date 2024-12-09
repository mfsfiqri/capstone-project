from django.urls import path, include

from capstoneProject.blog import views

urlpatterns = [
    path('', views.index, name='index'),
]