import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UserModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: String(process.env.PG_HOST),
      port: Number(process.env.PG_PORT),
      username: String(process.env.PG_USER),
      password: String(process.env.PG_PASSWORD),
      database: String(process.env.PG_DB),
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
      dropSchema: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
