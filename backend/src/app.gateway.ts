import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Prisma } from '@prisma/client';
import { TaskService } from './Task/task.service';

@WebSocketGateway({
  cosr: {
    origin: "*"
  }
})
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect{
  
  constructor(private appService: TaskService){}

  @WebSocketServer() server: Server;

  @SubscribeMessage('update')
  async handleMessage(@MessageBody() data: any, @ConnectedSocket() client: Socket): Promise<void> { 
    this.server.emit('message', data); 
  }

  afterInit(server: any) {
      console.log(server)
  }

  handleConnection(client: Socket) {
    console.log(`Connected: ${client.id}`)
  }

  handleDisconnect(client: Socket) {
    console.log(`Disconnected: ${client.id}`)
  }

}
