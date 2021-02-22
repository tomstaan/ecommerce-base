from django.urls import path, include
from .api import RegisterAPI, LoginAPI, UserAPI, ChangeUsernameAPI, ChangePasswordAPI
from knox import views as knox_views

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/user', UserAPI.as_view()),
    path('api/auth/change/username/<int:pk>', ChangeUsernameAPI.as_view()),
    path('api/auth/change/password/<int:pk>', ChangePasswordAPI.as_view()),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
]