import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { rootConfig } from 'rootConfig';
import { PaymentModule } from './payment.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(PaymentModule, {
    transport: Transport.MQTT,
    options: {
      url: rootConfig.MQTT_URL
    }
  });
  await app.listen();
}
bootstrap();
