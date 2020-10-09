import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer,AsyncJsonWebsocketConsumer,AsyncWebsocketConsumer



        
class ChatConsumer(AsyncWebsocketConsumer):
    
    async def connect(self):
        print('conecto...')
        print('sala => ', self.scope['url_route']['kwargs']['room_name'])
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'chat_%s' % self.room_name
        
        print(self.channel_layer)
        
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )
    
    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        user = text_data_json['user']
        print(message)

        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message,
                "usuario":user,
            }
        )
    # Receive message from room group
    async def chat_message(self, event):
        message = event['message']
        user = event['usuario']

        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            'message': message,
            "usuario":user,
        }))

