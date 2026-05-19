import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';

@Module({
  providers: [ProdutosService],
<<<<<<< HEAD
  controllers: [ProdutosController],
=======
  controllers: [ProdutosController]
>>>>>>> cec27d9 (aula 10 04)
})
export class ProdutosModule {}
