import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { rootConfig } from 'rootConfig';
import { BookingModule } from './booking.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(BookingModule, {
    transport: Transport.MQTT,
    options: {
      url: rootConfig.MQTT_URL
    }
  });
  await app.listen();
}
bootstrap();
