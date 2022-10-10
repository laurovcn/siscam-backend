import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateLoanDto } from './create-loan.dto';

export class UpdateLoanDto extends PartialType(CreateLoanDto) {
  @ApiProperty()
  transaction_id: string;
  worker_name: string;
  user_name: string;
  book_registry1: string;
  book_registry2: string;
  book_registry3: string;
  book_registry4: string;
  book_registry5: string;
  book_date: Date;
  foreseen_date: Date;
  devolution_date1: Date;
  devolution_date2: Date;
  devolution_date3: Date;
  devolution_date4: Date;
  devolution_date5: Date;
}
