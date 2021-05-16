import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoGateway } from './todo.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, TodoGateway],
})
export class AppModule {}
