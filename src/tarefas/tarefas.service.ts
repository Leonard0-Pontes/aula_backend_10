import { Injectable, NotFoundException, BadRequestException } from "@nestjs/common";
import { CreateTarefasDto } from "./dto/create-tarefas.dto";
import { UpdateTarefasDto } from "./dto/update-tarefas.dto";

type Tarefa = {
    id: number;
    titulo: string;
    descricao: string;
    status: 'aberta' | 'em_andamento' | 'concluida';
    prioridade: number ;
}

@Injectable()
export class TarefasService {
    private tarefas: Tarefa[] = [
        {
            id: 1,
            titulo: 'Configurar projeto',
            descricao: 'Instalar dependencias e validar o NestJS',
            status: 'concluida',
            prioridade: 1,
        },
        {
            id: 2,
            titulo: 'Criar modulo tarefas',
            descricao: 'Gerar module, controller e service',
            status: 'em_andamento',
            prioridade: 5,
        },
        {
            id: 3,
            titulo: 'Implementar listagem',
            descricao: 'Criar rota GET /tarefas',
            status: 'aberta',
            prioridade: 3,
        },
        {
            id: 4,
            titulo: 'Testar no Thunder Client',
            descricao: 'Salvar requests da pratica',
            status: 'aberta',
            prioridade: 4,
        },
    ];

    listartodos(){
        return this.tarefas;
    }

    listar(status?: string, prioridade?: number){
        let resultado = [...this.tarefas];

        if(status){
            resultado = resultado.filter(t => t.status === status);
        }

        if(prioridade && prioridade > 0 && prioridade <= 5){
            resultado = resultado.slice(0, prioridade);
        }

        return resultado;
    }


    buscarPorId(id: number){
        const tarefa = this.tarefas.find(t => t.id === id);

        if(!tarefa){
            throw new NotFoundException('Tarefa não encontrada');
        }

        return tarefa;
    }

    criar(dados: CreateTarefasDto){
        const novoId = this.tarefas.length > 0 
                ? Math.max(...this.tarefas.map((t) => t.id)) + 1 : 1;

        const novaTarefa : Tarefa = {id: novoId, ...dados};    
        this.tarefas.push(novaTarefa);
        
        return novaTarefa;
    }

    atualizarCompleto(id: number, dados: CreateTarefasDto) {
        const indice = this.tarefas.findIndex((p) => p.id === id);
    
        if (indice === -1) {
          throw new NotFoundException('Produto nao encontrado');
        }
    
        const atualizado: Tarefa = { id, ...dados };
        this.tarefas[indice] = atualizado;
        return atualizado;
      }

    atualizarParcial(id: number, dados: UpdateTarefasDto){
        const tarefa = this.buscarPorId(id);

        const tarefaAtualizada = {...tarefa, ...dados};

        this.tarefas = this.tarefas.map((t) => (t.id === id ? tarefaAtualizada : t));

        return tarefaAtualizada;
    }

    remover(id: number){
        const existe = this.tarefas.some((p) => p.id === id);

         if (!existe) {
      throw new NotFoundException('Produto nao encontrado');
    }

        this.tarefas = this.tarefas.filter(t => t.id !== id);
        return {
            mensagem: `Tarefa de id ${id} removida com sucesso`,
        };
    }
}