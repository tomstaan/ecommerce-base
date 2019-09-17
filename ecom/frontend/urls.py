from django.urls import path, re_path, include
from django.views.generic import TemplateView
from . import views
from django.conf.urls import url

urlpatterns = [
    path('', views.index),
]
'''
urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view()),
    path('/', login_required(TemplateView.as_view(template_name="app.html"),
                             login_url='login')),
    url(r'^(?:.*)/?$',    login_required(TemplateView.as_view(template_name="app.html"),
                                         login_url='login')),
]

'''
