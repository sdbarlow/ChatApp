from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('conversations/', views.getConversations, name="conversations"),
    path('users/', views.getUsers, name="users"),
    # path('messages/<str:pk>', views.getMessage, name="message"),
]