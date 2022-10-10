import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateObraDto } from './dto/create-obra.dto';
import { UpdateObraDto } from './dto/update-obra.dto';

@Injectable()
export class ObraService {
  constructor(private prisma: PrismaService) {}

  create(createObraDto: CreateObraDto) {
    return this.prisma.obra.create({
      data: createObraDto,
    });
  }

  findAll() {
    return `This action returns all obra`;
  }

  findOne(id: number) {
    return `This action returns a #${id} obra`;
  }

  update(id: number, updateObraDto: UpdateObraDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateObraDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} obra`;
  }
}
