import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PAYMENT_PATTERNS } from 'apps/payment/src/payment.controller';
import { Observable } from 'rxjs';
import { MICRO_SERVICES } from './booking.constants';

@Controller("booking")
export class BookingController {

  constructor (
    @Inject(MICRO_SERVICES.PAYMENT) private client: ClientProxy
  ) {}

  @Get("hello")
  getHello(): Observable<string> {
    return this.client.send(PAYMENT_PATTERNS.GET_PAYMENT, "");
  }
}
