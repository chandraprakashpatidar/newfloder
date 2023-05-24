import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { Usercontroller } from './user.controller';
import { user, userschema } from './user.schema';
import { UsersService } from './user.service';


@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/mynestjs"),
MongooseModule.forFeature([{name:user.name,schema:userschema}])
      ],
  controllers: [Usercontroller],
  providers: [UsersService],
})
export class AppModule {}
