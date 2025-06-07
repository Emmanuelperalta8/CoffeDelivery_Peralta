import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // <- ESSENCIAL para disponibilizar globalmente
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
