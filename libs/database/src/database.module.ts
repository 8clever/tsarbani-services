import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { rootConfig } from 'rootConfig';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mongodb",
      url: rootConfig.MONGO_URL,
      database: rootConfig.MONGODB_DATABASE,
      synchronize: true,
      entities: []
    })
  ],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
