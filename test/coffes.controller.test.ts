import { Test, TestingModule } from '@nestjs/testing';
import { CoffesController } from '../src/Modules/coffes.controller';
import { CoffesService } from '../src/Modules/coffes.service';

describe('CoffesController', () => {
  let coffesController: CoffesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffesController],
      providers: [CoffesService],
    }).compile();

    coffesController = module.get<CoffesController>(CoffesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(coffesController.getHello()).toBe('Hello World!');
    });
  });
});
