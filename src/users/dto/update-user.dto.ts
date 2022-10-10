import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  name: string;
  cpf: string;
  department: string;
  email: string;
  inscription: string;
  password: string;
  phone: string;
}
