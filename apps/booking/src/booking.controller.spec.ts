import { Test, TestingModule } from '@nestjs/testing';
import { BookingController } from './booking.controller';

describe('BookingController', () => {
  let bookingController: BookingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BookingController],
      providers: [],
    }).compile();

    bookingController = app.get<BookingController>(BookingController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bookingController.getHello()).toBe('Hello World!');
    });
  });
});
