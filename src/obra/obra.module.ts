import { Module } from '@nestjs/common';
import { ObraService } from './obra.service';
import { ObraController } from './obra.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ObraController],
  providers: [ObraService],
})
export class ObraModule {}
