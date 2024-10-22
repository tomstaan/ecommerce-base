from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from django.contrib.auth.models import User
from django.http import HttpResponse
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer
from store_settings.models import StoreSettings

# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        store_name = "Ecommerce Manager"
        res = StoreSettings.objects.create(store_name=store_name, owner=user)
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


# Login API
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

# Get User API
class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


# Change Username API
class ChangeUsernameAPI(generics.GenericAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def patch(self, request, *args, **kwargs):
        pk = kwargs['pk']
        newusername = request.data['username']
        print(pk)
        print(newusername)

        if User.objects.filter(pk=pk).exists():
            user = User.objects.get(pk=pk)
            user.username = newusername
            user.save()
            return HttpResponse({'message': 'Username changed sucessfully'}, status=200)
        else:
            return HttpResponse({'error': 'user does not exist'}, status=400)

# Change Username API
class ChangePasswordAPI(generics.GenericAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def patch(self, request, *args, **kwargs):
        pk = kwargs['pk']
        password = request.data['password']
        newpassword = request.data['newpassword']

        if User.objects.filter(pk=pk).exists():
            user = User.objects.get(pk=pk)
            if user.check_password(password):
                user.set_password(newpassword)
                user.save()
                return HttpResponse({'message': 'Password changed sucessfully'}, status=200)
            else:
                return HttpResponse({'error': 'Wrong Password'}, status=400)
        else:
            return HttpResponse({'error': 'user does not exist'}, status=400)