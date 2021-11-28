
export interface ISocketData {
    socket: WebSocket;
    send: (msg: any) => void
}