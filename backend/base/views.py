import json
from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from django.core import serializers
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from django.db.models import Q

from .models import User, Conversation
# Create your views here.



@api_view(['GET'])
def getConversations(request, pk):
    conversations = Conversation.objects.filter(Q(sender=pk) | Q(receiver=pk))
    json_data = serializers.serialize('json', conversations)
    return JsonResponse(json_data, safe=False)


def getUser(request, pk):
    user = get_object_or_404(User, id=pk)

    if request.method == 'PATCH':
        user.is_online = not user.is_online
        user.save()
    return JsonResponse('status', safe=False)

def deleteUser(request, pk):
    user = get_object_or_404(User, id=pk)

    if request.method == 'DELETE':
        user.delete()
    return JsonResponse('status', safe=False)
    



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