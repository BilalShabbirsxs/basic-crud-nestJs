import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ClassesModule} from './classes/classes.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ClassesModule, MongooseModule.forRoot('mongodb://localhost/classes')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
