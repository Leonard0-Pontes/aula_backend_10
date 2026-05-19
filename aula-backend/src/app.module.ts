import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';

import { TarefasModule } from './tarefas/tarefas.module';
@Module({
  imports: [ProdutosModule, TarefasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
