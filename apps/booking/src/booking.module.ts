import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { DatabaseModule } from 'libs/database/src';
import { rootConfig } from 'rootConfig';
import { MICRO_SERVICES } from './booking.constants';
import { BookingController } from './booking.controller';

@Module({
  imports: [
    DatabaseModule,
    ClientsModule.register([
      { 
        name: MICRO_SERVICES.PAYMENT, 
        transport: Transport.MQTT,
        options: {
          url: rootConfig.MQTT_URL
        }
      }
    ])
  ],
  controllers: [BookingController],
  providers: [],
})
export class BookingModule {}
