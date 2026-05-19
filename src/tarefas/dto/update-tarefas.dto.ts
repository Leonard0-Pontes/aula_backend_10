import { IsBoolean, IsNumber, IsOptional, IsString, Min, Max } from "class-validator";


export class UpdateTarefasDto {
    
    @IsOptional()
    @IsString()
    titulo?: string;

    @IsOptional()
    @IsString()
    descricao?: string;

    @IsOptional()
    @IsString()
    status?: 'aberta' | 'em_andamento' | 'concluida';

    @IsOptional()
    @IsNumber()
    @Min(1)
    @Max(5)
    prioridade?: number;

}