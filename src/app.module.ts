import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://cluster0.fshaxev.mongodb.net/', {
      dbName: 'SupaFocus',
      user: 'parthpandyappp',
      pass: 'YVvUwvbo9rYgkXmQ',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    AuthModule,
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
