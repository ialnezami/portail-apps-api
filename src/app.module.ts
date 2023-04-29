import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { ItemModule } from './item/item.module';
import { UserModule } from './user/user.module';
import { ConfigModule as Conf } from '@nestjs/config';
import { ConfigModule } from './config/config.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
@Module({
  imports: [
    ConfigModule,
    CategoryModule,
    ItemModule,
    UserModule,
    Conf.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      dbName: process.env.MONGODB_DBNAME,
    }),
    MulterModule.register({
      dest: './upload',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
