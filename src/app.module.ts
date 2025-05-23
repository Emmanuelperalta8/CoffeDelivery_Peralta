import { Module } from '@nestjs/common';
import { CoffesController } from './Modules/coffes.controller';
import { CoffesService } from './Modules/coffes.service';

@Module({
  imports: [],
  controllers: [CoffesController],
  providers: [CoffesService],
})
export class AppModule {}
