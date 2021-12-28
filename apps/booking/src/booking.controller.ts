import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PAYMENT_PATTERNS } from 'apps/payment/src/payment.controller';
import { MQTT_MODULE_NAME } from 'dynamicModules';
import { Observable } from 'rxjs';

@Controller()
export class BookingController {

  constructor (
    @Inject(MQTT_MODULE_NAME) private mqtt: ClientProxy
  ) {}

  @Get("hello")
  getHello(): Observable<string> {
    return this.mqtt.send(PAYMENT_PATTERNS.GET_PAYMENT, "");
  }
}
