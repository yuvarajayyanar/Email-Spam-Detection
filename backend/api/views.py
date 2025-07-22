from django.shortcuts import render
# from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.
from . models import Inbox
from . serializers import InboxSerializer

from rest_framework import generics

class InboxCreateAPIView(generics.ListCreateAPIView):
    queryset = Inbox.objects.all()
    serializer_class = InboxSerializer

    def perform_create(self, serializer):
        serializer.save()

# class InboxListAPIView(generics.ListAPIView):
#     queryset = Inbox.objects.all()
#     serializer_class = InboxSerializer


class InboxDetailAPIView(generics.RetrieveAPIView):
    queryset = Inbox.objects.all()
    serializer_class = InboxSerializer

class InboxDestroyAPIView(generics.DestroyAPIView):
    queryset = Inbox.objects.all()
    serializer_class = InboxSerializer
    lookup_field = 'pk'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)
# class InboxDestroyAPIView(generics.DestroyAPIView):
#     queryset = Inbox.objects.all()
#     serializer_class = InboxSerializer
#     lookup_field = 


# @api_view(['GET'])
# def api_home(requests, *args, **kargs):
#     instance = Inbox.objects.all().order_by('?').first()
#     data = InboxSerializer(instance).data
#     return Response(data)

