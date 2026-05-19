import {
  Put,
  DefaultValuePipe,
  ParseIntPipe,
  Controller,
  Get,
  Post,
  Query,
  Param,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { CreateTarefasDto } from './dto/create-tarefas.dto';
import { UpdateTarefasDto } from './dto/update-tarefas.dto';

@Controller('tarefas')
export class TarefasController {
  constructor(private readonly tarefasService: TarefasService) {}

  @Get()
  listar(
    @Query('status', new DefaultValuePipe('aberta')) status?: string,
    @Query('prioridade', new DefaultValuePipe(1), ParseIntPipe)
    prioridade?: number,
  ) {
    return this.tarefasService.listar(status, prioridade);
  }
  @Get()
  listarTodos() {
    return this.tarefasService.listartodos();
  }

  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.tarefasService.buscarPorId(id);
  }

  @Post()
  criar(@Body() body: CreateTarefasDto) {
    return this.tarefasService.criar(body);
  }

  @Put(':id')
  atualizarCompleto(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CreateTarefasDto,
  ) {
    return this.tarefasService.atualizarCompleto(id, body);
  }

  @Patch(':id')
  atualizarParcial(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateTarefasDto,
  ) {
    return this.tarefasService.atualizarParcial(id, body);
  }

  @Delete(':id')
  remover(@Param('id', ParseIntPipe) id: number) {
    return this.tarefasService.remover(id);
  }
}
