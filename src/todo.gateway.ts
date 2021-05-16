import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";

@WebSocketGateway()
export class TodoGateway {
    @WebSocketServer()
    server: Server;

    @SubscribeMessage('listen')
    handleListen(@MessageBody() todo: string): void {
        this.server.emit('listen', todo);
    }


    @SubscribeMessage('add')
    handleNewTodo(@MessageBody() todo: string): void {
        console.log('addddd')
        this.server.emit('add', todo);
    }

    @SubscribeMessage('edit')
    handleEditTodo(@MessageBody() id: number, todo: string): void {
        console.log('edit')
        this.server.emit('edit', id, todo);
    }

    @SubscribeMessage('delete')
    handleDeleteTodo(@MessageBody() id: number): void {
        console.log('delete')
        this.server.emit('delete', id);
    }
}