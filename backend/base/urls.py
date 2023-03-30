from django.urls import path
from . import views

urlpatterns = [
    path('conversations/<str:pk>/', views.getConversations, name="conversations"),
    path('users/', views.getUsers, name="users"),
    path('user/<str:pk>/', views.getUser, name="user"),
    path('adduser/', views.postUser, name="userpost"),
    path('addconvo/', views.postConvo, name="convopost"),
    path('deleteuser/<str:pk>/', views.deleteUser, name="deleteuser")
    # path('messages/<str:pk>', views.getMessage, name="message"),
]