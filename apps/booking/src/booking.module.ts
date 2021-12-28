import { Module } from '@nestjs/common';
import { MqttDynamicModule } from 'dynamicModules';
import { DatabaseModule } from 'libs/database/src';
import { BookingController } from './booking.controller';

@Module({
  imports: [
    DatabaseModule,
    MqttDynamicModule
  ],
  controllers: [BookingController],
  providers: [],
})
export class BookingModule {}
