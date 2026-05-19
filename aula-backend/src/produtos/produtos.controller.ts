<<<<<<< HEAD
import {
  DefaultValuePipe,
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Patch,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
=======
import {BadRequestException, Controller, Get, Query } from '@nestjs/common';
>>>>>>> cec27d9 (aula 10 04)
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
<<<<<<< HEAD
  constructor(private readonly produtosService: ProdutosService) {}

  @Get()
  listar(
    @Query('categoria') categoria?: string,
    @Query('limite', new DefaultValuePipe(10), ParseIntPipe) limite?: number,
  ) {
    return this.produtosService.listar(categoria, limite);
  }

  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.produtosService.buscarPorId(id);
  }

  @Post()
  criar(@Body() body: CreateProdutoDto) {
    return this.produtosService.criar(body);
  }

  @Put(':id')
  atualizarCompleto(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CreateProdutoDto,
  ) {
    return this.produtosService.atualizarCompleto(id, body);
  }

  @Patch(':id')
  atualizarParcial(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateProdutoDto,
  ) {
    return this.produtosService.atualizarParcial(id, body);
  }

  @Delete(':id')
  remover(@Param('id', ParseIntPipe) id: number) {
    return this.produtosService.remover(id);
  }
=======
    constructor(private readonly produtosService: ProdutosService){}


    
    @Get()
    listar(@Query('categoria') categoria?: string){
        if(!categoria){
           return this.produtosService.listarTodos(); 
        } 
        
        return this.produtosService.listarPorCategoria(categoria);
        
    }
>>>>>>> cec27d9 (aula 10 04)
}
