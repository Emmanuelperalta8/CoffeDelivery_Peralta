import { Test, TestingModule } from '@nestjs/testing';
import { CoffesController } from './coffes.controller';
import { CoffesService } from './coffes.service';

describe('AppController', () => {
  let appController: CoffesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CoffesController],
      providers: [CoffesService],
    }).compile();

    appController = app.get<CoffesController>(CoffesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
