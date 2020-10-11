
import {ws} from '../../package.json';

export const IP_WS  = process.env.NODE_ENV ? ws.dev : ws.prod;
// chat
export const WS_CHAT = () => new WebSocket(`${IP_WS}/ws/chat/`);
export const WS_CHAT_ROOM = (room,user) => new WebSocket(`${IP_WS}/ws/chat/${room}/${user}/`);
// salas
export const WS_SALAS = () => new WebSocket(`${IP_WS}/ws/salas/`);
// usuarios
export const WS_USUARIOS = () => new WebSocket(`${IP_WS}/ws/usuarios/`);
export const WS_USUARIOS_CHAT = name => new WebSocket(`${IP_WS}/ws/usuarios/${name}/`);