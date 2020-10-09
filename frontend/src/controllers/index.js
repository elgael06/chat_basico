
import {ws} from '../../package.json';

export const IP_WS  = process.env.NODE_ENV ? ws.dev : ws.prod;
// chat
export const WS_CHAT = () => new WebSocket(`${IP_WS}/ws/chat/`);
export const WS_CHAT_ROOM = room => new WebSocket(`${IP_WS}/ws/chat/${room}/`);
// usuarios
export const WS_USUARIOS = () => new WebSocket(`${IP_WS}/ws/usuarios/`);
export const WS_USUARIOS_CHAT = name => new WebSocket(`${IP_WS}/ws/usuarios/${name}/`);