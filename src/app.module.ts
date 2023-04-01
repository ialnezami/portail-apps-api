import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { ItemModule } from './item/item.module';
import { UserModule } from './user/user.module';
import { ConfigModule as Conf } from '@nestjs/config';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    ConfigModule,
    CategoryModule,
    ItemModule,
    UserModule,
    Conf.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
