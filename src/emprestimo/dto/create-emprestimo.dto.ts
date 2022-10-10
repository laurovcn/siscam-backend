import { ApiProperty } from '@nestjs/swagger';

export class CreateEmprestimoDto {
  @ApiProperty()
  id: number;
  id_transacao: string;
  nome_funcionario: string;
  nome_usuario: string;
  registro_obra1: string;
  registro_obra2: string;
  registro_obra3: string;
  registro_obra4: string;
  registro_obra5: string;
  data_emprestimo: Date;
  data_prevista: Date;
  data_devolucao1: Date;
  data_devolucao2: Date;
  data_devolucao3: Date;
  data_devolucao4: Date;
  data_devolucao5: Date;
}
