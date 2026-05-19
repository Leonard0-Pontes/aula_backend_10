"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosService = void 0;
const common_1 = require("@nestjs/common");
let ProdutosService = class ProdutosService {
    produtos = [
        { id: 1, nome: 'Notebook', categoria: 'hardware', preco: 3500, ativo: true },
        { id: 2, nome: 'Mouse', categoria: 'hardware', preco: 120, ativo: true },
        { id: 3, nome: 'Curso NestJS', categoria: 'educacao', preco: 89, ativo: false },
    ];
    listar(categoria, limite) {
        let resultado = [...this.produtos];
        if (categoria) {
            resultado = resultado.filter((p) => p.categoria === categoria);
        }
        if (limite && limite > 0) {
            resultado = resultado.slice(0, limite);
        }
        return resultado;
    }
    buscarPorId(id) {
        const produto = this.produtos.find((p) => p.id === id);
        if (!produto) {
            throw new common_1.NotFoundException('Produto nao encontrado');
        }
        return produto;
    }
    criar(dados) {
        const novoId = this.produtos.length > 0
            ? Math.max(...this.produtos.map((p) => p.id)) + 1
            : 1;
        const novoProduto = { id: novoId, ...dados };
        this.produtos.push(novoProduto);
        return novoProduto;
    }
    atualizarCompleto(id, dados) {
        const indice = this.produtos.findIndex((p) => p.id === id);
        if (indice === -1) {
            throw new common_1.NotFoundException('Produto nao encontrado');
        }
        const atualizado = { id, ...dados };
        this.produtos[indice] = atualizado;
        return atualizado;
    }
    atualizarParcial(id, dados) {
        const produto = this.buscarPorId(id);
        const atualizado = { ...produto, ...dados };
        this.produtos = this.produtos.map((p) => (p.id === id ? atualizado : p));
        return atualizado;
    }
    remover(id) {
        const existe = this.produtos.some((p) => p.id === id);
        if (!existe) {
            throw new common_1.NotFoundException('Produto nao encontrado');
        }
        this.produtos = this.produtos.filter((p) => p.id !== id);
        return { mensagem: `Produto ${id} removido com sucesso` };
    }
};
exports.ProdutosService = ProdutosService;
exports.ProdutosService = ProdutosService = __decorate([
    (0, common_1.Injectable)()
], ProdutosService);
//# sourceMappingURL=produtos.service.js.map