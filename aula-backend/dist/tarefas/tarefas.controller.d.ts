import { TarefasService } from './tarefas.service';
import { CreateTarefasDto } from './dto/create-tarefas.dto';
import { UpdateTarefasDto } from './dto/update-tarefas.dto';
export declare class TarefasController {
    private readonly tarefasService;
    constructor(tarefasService: TarefasService);
    listar(status?: string, prioridade?: number): {
        id: number;
        titulo: string;
        descricao: string;
        status: "aberta" | "em_andamento" | "concluida";
        prioridade: number;
    }[];
    listarTodos(): {
        id: number;
        titulo: string;
        descricao: string;
        status: "aberta" | "em_andamento" | "concluida";
        prioridade: number;
    }[];
    buscarPorId(id: number): {
        id: number;
        titulo: string;
        descricao: string;
        status: "aberta" | "em_andamento" | "concluida";
        prioridade: number;
    };
    criar(body: CreateTarefasDto): {
        id: number;
        titulo: string;
        descricao: string;
        status: "aberta" | "em_andamento" | "concluida";
        prioridade: number;
    };
    atualizarCompleto(id: number, body: CreateTarefasDto): {
        id: number;
        titulo: string;
        descricao: string;
        status: "aberta" | "em_andamento" | "concluida";
        prioridade: number;
    };
    atualizarParcial(id: number, body: UpdateTarefasDto): {
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
