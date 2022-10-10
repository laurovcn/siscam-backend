import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  @ApiProperty()
  classification: string;
  doc_type: string;
  author: string;
  title: string;
  year: number;
  published_at: string;
  editor: string;
  edition: number;
  language: string;
  pages: number;
  descritptors: string;
  registry: string;
}
