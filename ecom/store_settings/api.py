from .models import StoreSettings
from django.http import HttpResponse, Http404
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from .serializers import StoreSettingSerializer
import shutil
import os
import time
import re

# Product Viewset
class StoreSettingViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = StoreSettingSerializer

    def list(self, request, *args, **kwargs):
        existingSettings = StoreSettings.objects.filter(owner = self.request.user).count()
        if existingSettings < 1:
            return HttpResponse({'error': 'settings dont exist already exists'}, status=400)
        relatingSettings = StoreSettings.objects.all().get(owner=self.request.user)
        serializer = StoreSettingSerializer(relatingSettings)
        return Response(serializer.data)
    
    def create(self, request, *args, **kwargs):
        profile_pic = request.data['profile_pic']
        store_name = request.data['store_name']
        print(profile_pic)
        print(store_name)
        currentSettingsCount = StoreSettings.objects.filter(owner = self.request.user).count()
        print(currentSettingsCount)
        if currentSettingsCount > 0:
            return HttpResponse({'error': 'object already exists'}, status=400)
        else:
            # Create object
            StoreSettings.objects.create(profile_pic=profile_pic, store_name=store_name, owner=self.request.user)
            return HttpResponse({'message': 'Settings Object Created'}, status=200)
    
    def update(self, request, *args, **kwargs):
        pk = kwargs['pk']
        profile_pic = ""
        store_name = ""

        print(pk)
        instance = StoreSettings.objects.get(pk=pk)
        print(instance)

        if 'profile_pic' in request.data:
            profile_pic = request.data['profile_pic']
            instance.profile_pic = profile_pic
            print(profile_pic)
        if 'store_name' in request.data:
            store_name = request.data['store_name']
            instance.store_name = store_name
            print(store_name)

        instance.save()

        data = StoreSettingSerializer(instance, partial=True).data

        return Response(data)
    
    def perform_create(self, serializer):  # added
        serializer.save(owner=self.request.user)