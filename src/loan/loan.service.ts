import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';

@Injectable()
export class LoanService {
  constructor(private prisma: PrismaService) {}
  create(createLoanDto: CreateLoanDto) {
    return this.prisma.loan.create({
      data: createLoanDto,
    });
  }

  findAll() {
    return this.prisma.loan.findMany();
  }

  findOne(id: number) {
    return this.prisma.loan.findUnique({
      where: { id },
    });
  }

  update(id: number, updateLoanDto: UpdateLoanDto) {
    return this.prisma.loan.update({
      where: { id },
      data: updateLoanDto,
    });
  }

  remove(id: number) {
    return this.prisma.loan.delete({
      where: { id },
    });
}
