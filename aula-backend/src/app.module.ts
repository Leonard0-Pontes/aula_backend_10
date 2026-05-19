import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
<<<<<<< HEAD
import { TarefasModule } from './tarefas/tarefas.module';
import { ReservasModule } from './reservas/reservas.module';

@Module({
  imports: [ProdutosModule, TarefasModule, ReservasModule],
=======
import { ProdModule } from './prod/prod.module';

@Module({
  imports: [ProdutosModule, ProdModule],
>>>>>>> cec27d9 (aula 10 04)
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
