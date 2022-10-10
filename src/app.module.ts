import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ObraModule } from './obra/obra.module';
import { EmprestimoModule } from './emprestimo/emprestimo.module';

@Module({
  imports: [PrismaModule, UsersModule, ObraModule, EmprestimoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
