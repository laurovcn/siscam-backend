import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEmprestimoDto } from './dto/create-emprestimo.dto';
import { UpdateEmprestimoDto } from './dto/update-emprestimo.dto';

@Injectable()
export class EmprestimoService {
  constructor(private prisma: PrismaService) {}

  create(createEmprestimoDto: CreateEmprestimoDto) {
    return this.prisma.emprestimo.create({
      data: createEmprestimoDto,
    });
  }

  findAll() {
    return this.findAll();
  }

  findOne(id: number) {
    return this.findOne(id);
  }

  update(id: number, updateEmprestimoDto: UpdateEmprestimoDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateEmprestimoDto,
    });
  }

  remove(id: number) {
    return this.remove(id);
  }
}
