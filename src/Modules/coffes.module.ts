import { Module } from '@nestjs/common';
import { CoffesController } from './coffes.controller';
import { CoffesService } from './coffes.service';
import { PrismaModule } from '../prisma/prisma.module'; // <- IMPORTANTE

@Module({
  imports: [PrismaModule], // <- ESSENCIAL!
  controllers: [CoffesController],
  providers: [CoffesService],
})
export class AppModule {}
