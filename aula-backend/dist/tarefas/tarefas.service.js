"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarefasService = void 0;
const common_1 = require("@nestjs/common");
let TarefasService = class TarefasService {
    tarefas = [
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
    listartodos() {
        return this.tarefas;
    }
    listar(status, prioridade) {
        let resultado = [...this.tarefas];
        if (status) {
            resultado = resultado.filter((t) => t.status === status);
        }
        if (prioridade && prioridade > 0 && prioridade <= 5) {
            resultado = resultado.slice(0, prioridade);
        }
        return resultado;
    }
    buscarPorId(id) {
        const tarefa = this.tarefas.find((t) => t.id === id);
        if (!tarefa) {
            throw new common_1.NotFoundException('Tarefa não encontrada');
        }
        return tarefa;
    }
    criar(dados) {
        const novoId = this.tarefas.length > 0
            ? Math.max(...this.tarefas.map((t) => t.id)) + 1
            : 1;
        const novaTarefa = { id: novoId, ...dados };
        this.tarefas.push(novaTarefa);
        return novaTarefa;
    }
    atualizarCompleto(id, dados) {
        const indice = this.tarefas.findIndex((p) => p.id === id);
        if (indice === -1) {
            throw new common_1.NotFoundException('Produto nao encontrado');
        }
        const atualizado = { id, ...dados };
        this.tarefas[indice] = atualizado;
        return atualizado;
    }
    atualizarParcial(id, dados) {
        const tarefa = this.buscarPorId(id);
        const tarefaAtualizada = { ...tarefa, ...dados };
        this.tarefas = this.tarefas.map((t) => t.id === id ? tarefaAtualizada : t);
        return tarefaAtualizada;
    }
    remover(id) {
        const existe = this.tarefas.some((p) => p.id === id);
        if (!existe) {
            throw new common_1.NotFoundException('Produto nao encontrado');
        }
        this.tarefas = this.tarefas.filter((t) => t.id !== id);
        return {
            mensagem: `Tarefa de id ${id} removida com sucesso`,
        };
    }
};
exports.TarefasService = TarefasService;
exports.TarefasService = TarefasService = __decorate([
    (0, common_1.Injectable)()
], TarefasService);
//# sourceMappingURL=tarefas.service.js.map