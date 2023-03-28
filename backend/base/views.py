from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .practice import conversations
from .practice2 import users
# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/messages/',
        '/api/messages/<id>/',
        '/api/messages/create/'
    ]
    return Response(routes)
@api_view(['GET'])
def getConversations(request):
    return Response(conversations)

@api_view(['GET'])
def getUsers(request):
    return Response(users)

# @api_view(['GET'])
# def getMessage(request, pk):
#     message = None
#     for i in messages:
#         if i['_id'] == pk:
#             message = i
#             break

#     return Response(message)