import { CreateTarefasDto } from './dto/create-tarefas.dto';
import { UpdateTarefasDto } from './dto/update-tarefas.dto';
type Tarefa = {
    id: number;
    titulo: string;
    descricao: string;
    status: 'aberta' | 'em_andamento' | 'concluida';
    prioridade: number;
};
export declare class TarefasService {
    private tarefas;
    listartodos(): Tarefa[];
    listar(status?: string, prioridade?: number): Tarefa[];
    buscarPorId(id: number): Tarefa;
    criar(dados: CreateTarefasDto): Tarefa;
    atualizarCompleto(id: number, dados: CreateTarefasDto): Tarefa;
    atualizarParcial(id: number, dados: UpdateTarefasDto): {
        titulo: string;
        descricao: string;
        status: "aberta" | "em_andamento" | "concluida";
        prioridade: number;
        id: number;
    };
    remover(id: number): {
        mensagem: string;
    };
}
export {};
