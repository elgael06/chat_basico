from django.db import models

# Create your models here.
class Sala(models.Model):
    nombre  = models.TextField(null=False)
    creador = models.TextField(default='anonymus')
    date    = models.DateTimeField(auto_now=True)

class Mensajes(models.Model):
    text    = models.TextField(null=False)
    idSala  = models.IntegerField(default=0)
    usuario = models.TextField(default='anonymus')
    date    = models.DateTimeField(auto_now=True)

