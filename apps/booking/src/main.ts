import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { rootConfig } from 'rootConfig';
import { BookingModule } from './booking.module';

async function bootstrap() {
  const app = await NestFactory.create(BookingModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.MQTT,
    options: {
      url: rootConfig.MQTT_URL
    }
  });
  await app.listen(rootConfig.BOOKING_SERVICE_PORT);
}
bootstrap();
