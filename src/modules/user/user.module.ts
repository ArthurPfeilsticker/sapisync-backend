import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserORM } from 'src/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserORM])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
