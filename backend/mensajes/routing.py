from django.urls import re_path
from .consumers import ChatConsumer,SalasConsumer,SalaIdConsumer

websocket_urlpatterns = [
    re_path(r'ws/chat/(?P<room_name>\w+)/(?P<name>\w+)/$', ChatConsumer),
    re_path(r'ws/salas/$',SalasConsumer),
    re_path(r'ws/sala/(?P<sala>\w+)/$',SalaIdConsumer),
]