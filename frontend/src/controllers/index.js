
import {ws} from '../../package.json';

console.log("entorno front ", process.env.NODE_ENV)
export const IP_WS  = process.env.NODE_ENV==='development' ? ws.dev : ws.prod;
console.log('ip ',IP_WS);
// chat
export const WS_CHAT = () => new WebSocket(`${IP_WS}/ws/chat/`);
export const WS_CHAT_ROOM = (room,user) => new WebSocket(`${IP_WS}/ws/chat/${room}/${user}/`);
// salas
export const WS_SALAS = () => new WebSocket(`${IP_WS}/ws/salas/`);
export const WS_SALAS_ID = id => new WebSocket(`${IP_WS}/ws/sala/${id}/`);
// usuarios
export const WS_USUARIOS = () => new WebSocket(`${IP_WS}/ws/usuarios/`);
export const WS_USUARIOS_CHAT = name => new WebSocket(`${IP_WS}/ws/usuarios/${name}/`);