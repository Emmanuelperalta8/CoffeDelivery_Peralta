import { Module } from '@nestjs/common';
import { CoffesController } from './Modules/coffes.controller';
import { CoffesService } from './Modules/coffes.service';
import { PrismaModule } from './prisma/prisma.module'; // ✅ certifique-se de que o caminho está correto

@Module({
  imports: [PrismaModule], // ✅ Adicione isto
  controllers: [CoffesController],
  providers: [CoffesService],
})
export class AppModule {}
