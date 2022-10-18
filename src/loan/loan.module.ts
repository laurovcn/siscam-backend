import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { LoanService } from './loan.service';
import { LoanController } from './loan.controller';

@Module({
  controllers: [LoanController],
  providers: [LoanService],
  imports: [PrismaModule]
})
export class LoanModule {}
