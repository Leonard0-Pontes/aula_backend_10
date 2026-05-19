import {
  Min,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsOptional,
  Max,
} from 'class-validator';

export class CreateTarefasDto {
  @IsString()
  @IsNotEmpty()
  titulo!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  descricao!: string;

  @IsString()
  @IsNotEmpty()
  status!: 'aberta' | 'em_andamento' | 'concluida';

  @IsNumber()
  @Min(1)
  @Max(5)
  prioridade!: number;
}
