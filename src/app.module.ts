import { BookModule } from './book/book.module';
import { LoanModule } from './loan/loan.module';
import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [PrismaModule, UsersModule, LoanModule, BookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
