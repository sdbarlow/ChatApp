import json
from django.shortcuts import render
from django.http import JsonResponse
from django.core import serializers
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from .practice import conversations

from .models import User
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


def postUser(request):
    if request.method == 'POST':
        # Get form data from request.POST
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        email = request.POST.get('email')
        password = request.POST.get('password')
        img = request.POST.get('img')

        # Create new user object
        user = User(first_name=first_name, last_name=last_name, email=email, password=password, img=img)
        
        # Save user to database
        user.save()

        # Return empty JSON response with success message
        return JsonResponse({}, status=200)

    # Return error response for non-POST requests
    return JsonResponse({'error': 'Invalid request method.'}, status=400)

@api_view(['GET'])
def getUsers(request):
    users = User.objects.all()
    json_data = serializers.serialize('json', users)
    return JsonResponse(json_data, safe=False)


# @api_view(['GET'])
# def getMessage(request, pk):
#     message = None
#     for i in messages:
#         if i['_id'] == pk:
#             message = i
#             break

#     return Response(message)