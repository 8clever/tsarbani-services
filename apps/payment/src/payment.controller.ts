import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

export const PAYMENT_PATTERNS = {
  GET_PAYMENT: "get_payment"
}

@Controller()
export class PaymentController {

  @MessagePattern(PAYMENT_PATTERNS.GET_PAYMENT)
  getPayment(): string {
    return "SOME_PAYMENT:333"
  }
}
