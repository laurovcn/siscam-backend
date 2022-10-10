import { ApiProperty } from '@nestjs/swagger';

export class CreateObraDto {
  @ApiProperty()
  classificacao: string;
  tipo_documental: string;
  autor: string;
  titulo: string;
  ano: number;
  local_publicacao: string;
  editor: string;
  edicao: number;
  idioma: string;
  paginas: number;
  descritores: string;
  registro: string;
}
