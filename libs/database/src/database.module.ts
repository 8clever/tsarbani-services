import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { rootConfig } from 'rootConfig';
import { BookingModule } from './booking/booking.module';
import { Booking } from './booking/entities/booking.entity';
import { PropertyModule } from './property/property.module';
import { Property } from './property/entities/property.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mongodb",
      url: rootConfig.MONGO_URL,
      database: rootConfig.MONGODB_DATABASE,
      synchronize: true,
      entities: [
        Booking,
        Property
      ]
    }),
    BookingModule,
    PropertyModule
  ],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
