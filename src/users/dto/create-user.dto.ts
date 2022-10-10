import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty()
  name: string;
  cpf: string;
  department: string;
  email: string;
  inscription: string;
  password: string;
  phone: string;
}
