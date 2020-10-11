import json
from asgiref.sync import async_to_sync,sync_to_async
from channels.generic.websocket import WebsocketConsumer,AsyncJsonWebsocketConsumer,AsyncWebsocketConsumer

from .views import create_sala,obtener_salas,crear_mensaje,obtener_mensajes_sala,id_sala


class ChatConsumer(AsyncWebsocketConsumer):
    lista = []
    mensajes = []
    message = ''
    user    = ''
    
    async def connect(self):
        print('conecto...')
        print('sala => ', self.scope['url_route']['kwargs']['room_name'])
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'chat_%s' % self.room_name
        name = self.scope['url_route']['kwargs']['name']
        self.lista.append(name)
        print(self.lista)
        
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        
        await self.accept()
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': self.message,
                "usuario":self.user,
            }
        )

    async def disconnect(self, close_code):
        print('disconect...')
        name = self.scope['url_route']['kwargs']['name']
        new_list = []
        print("desconectar: ",name)
        for u in self.lista:
            if(name == u ):
                pass
            else:
                new_list.append(u)
        self.lista.clear()
        for d in new_list:
            self.lista.append(d)
        
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        self.message = text_data_json['message']
        self.user = text_data_json['user']
        print(self.message)
        self.mensajes.append({
                'message': self.message,
                "usuario":self.user,
            })
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': self.message,
                "usuario":self.user,
            }
        )
    # Receive message from room group
    async def chat_message(self, event):
        message = event['message']
        user = event['usuario']
        print(user)

        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            'message': message,
            "usuario":user,
            "online":self.lista,
            "mensajes":self.mensajes
        }))

class SalasConsumer(AsyncWebsocketConsumer):

    async def connect(self):
        print('conecto a salas...')
        self.room_group_name = 'lista_salas'
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()
        await self.enviar()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        name_sala      = text_data_json['sala']
        usuario        = text_data_json['usuario']

        await sync_to_async(create_sala)(sala=name_sala,usuario=usuario)
        await self.enviar()

    async def enviar(self):
        await self.channel_layer.group_send(
            self.room_group_name,
            { 'type': 'message_sala', }
        )

    async def message_sala(self,event):
        print('mensajes')
        sala = await sync_to_async(obtener_salas)()
        await self.send(text_data=json.dumps({
             "salas" : sala,
        }))

class SalaIdConsumer(AsyncWebsocketConsumer):

    async def connect(self):
        print('conecto a salas...')
        print('sala => ', self.scope['url_route']['kwargs']['sala'])
        self.room_name = self.scope['url_route']['kwargs']['sala']
        self.room_group_name = 'sala_id_%s' % self.room_name
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        await self.accept()
        await self.enviar(self.room_name)

    async def disconnect(self, close_code):
        print('desconectado => ', self.room_group_name)
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        print('recivido ',text_data)
        text_data_json = json.loads(text_data)
        sala           = text_data_json['sala']
        usuario        = text_data_json['usuario']
        mensaje        = text_data_json['mensaje']
        await sync_to_async(crear_mensaje)(mensaje,usuario,sala)
        await self.enviar(sala)

    async def enviar(self,id):
        print('enviar ',id)
        await self.channel_layer.group_send(
            self.room_group_name,
            { 'type': 'mensajes',"id":id }
        )

    async def mensajes(self,event):
        id   = event['id']
        data = await sync_to_async(id_sala)(id)
        print('mensajes ',id)
        sala = await sync_to_async(obtener_mensajes_sala)(id)
        await self.send(text_data=json.dumps({
             "mensajes" : sala,
             "sala":data
        }))