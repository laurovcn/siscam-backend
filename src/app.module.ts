import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { bookModule } from './book/book.module';
import { loanModule } from './loan/loan.module';
import { LoanModule } from './loan/loan.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [PrismaModule, UsersModule, bookModule, loanModule, LoanModule, BookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
