from django.shortcuts import render
from .models import Sala,Mensajes


# Create your views here.

# metodos
""" salas """
def create_sala(sala,usuario):
    """crear nueva sala"""
    Sala(
        nombre  = sala,
        creador = usuario
    ).save()

def obtener_salas():
    """ obtener todas las salas """
    lista = []
    # pylint: disable=maybe-no-member
    salas = Sala.objects.all()
    print(salas.count())
    for item in salas:
        lista.append(objet_sala(item=item))

    return lista

def id_sala(id=0):
    """ obtiene la sala por id """
    # pylint: disable=maybe-no-member
    sala = Sala.objects.filter(pk=id).first()

    return objet_sala(sala)

def objet_sala(item = Sala):
    """ retorna la sala en objeto """
    return {
        "pk"        : item.pk,
        "nombre"    : item.nombre,
        "creador"   : item.creador,
        "fecha"     : item.date.strftime("%H:%M:%S %d/%m/%Y.")
    }

""" mensajes """
def crear_mensaje(mensaje,usuario,sala):
    """ crea una nueva sala """
    Mensajes(
        text    = mensaje,
        usuario = usuario,
        idSala  = sala,
    ).save()

def obtener_mensajes_sala(sala=0):
    """ retorna los mensajes de una sala """
    lista = []
    # pylint: disable=maybe-no-member
    sala  = Mensajes.objects.filter(idSala=sala)

    for item in sala:
        lista.append(objet_mensaje(mensaje=item))
    return lista

def obtener_mensajes_usuario(usuario=''):
    """ retrorna los mensajes de un usuario """
    lista = []
    # pylint: disable=maybe-no-member
    sala  = Mensajes.objects.filter(usuario=usuario)

    for item in sala:
        lista.append(objet_mensaje(mensaje=item))
    return lista

def objet_mensaje(mensaje=Mensajes):
    """ retorna el mensaje en objeto """
    return {
        "pk"        : mensaje.pk,
        "text"      : mensaje.text,
        "idSala"    : mensaje.idSala,
        "usuario"   : mensaje.usuario,
        "date"      : mensaje.date,
    }

