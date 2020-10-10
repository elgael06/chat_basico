import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer,AsyncJsonWebsocketConsumer,AsyncWebsocketConsumer


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
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': self.message,
                "usuario":self.user,
            }
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

