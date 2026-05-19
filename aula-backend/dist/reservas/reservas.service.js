"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservasService = void 0;
const common_1 = require("@nestjs/common");
let ReservasService = class ReservasService {
    reservas = [
        {
            id: 1,
            responsavel: 'Ana',
            sala: 'azul',
            turno: 'manha',
            integrantes: 3,
            status: 'ativa',
        },
        {
            id: 2,
            responsavel: 'Bruno',
            sala: 'verde',
            turno: 'tarde',
            integrantes: 5,
            status: 'confirmada',
        },
        {
            id: 3,
            responsavel: 'Carla',
            sala: 'vermelha',
            turno: 'noite',
            integrantes: 2,
            status: 'cancelada',
        },
    ];
    buscarPorId(id) {
        const reserva = this.reservas.find((r) => r.id === id);
        if (!reserva) {
            throw new common_1.NotFoundException(`Reserva com id ${id} não encontrada`);
        }
        return reserva;
    }
    criar(dados) {
        const novoId = this.reservas.length > 0
            ? Math.max(...this.reservas.map((r) => r.id)) + 1
            : 1;
        const novaReserva = {
            id: novoId,
            responsavel: dados.responsavel,
            sala: dados.sala,
            turno: dados.turno,
            integrantes: dados.integrantes,
            status: 'ativa',
        };
        this.reservas.push(novaReserva);
        return novaReserva;
    }
    atualizarParcial(id, dados) {
        const reservaAtual = this.buscarPorId(id);
        if (reservaAtual.status === 'cancelada' ||
            reservaAtual.status === 'encerrada') {
            throw new common_1.NotFoundException('Não é possível atualizar uma reserva cancelada ou encerrada');
        }
        const reservaAtualizada = { ...reservaAtual, ...dados };
        this.reservas = this.reservas.map((r) => r.id === id ? reservaAtualizada : r);
        return reservaAtualizada;
    }
};
exports.ReservasService = ReservasService;
exports.ReservasService = ReservasService = __decorate([
    (0, common_1.Injectable)()
], ReservasService);
//# sourceMappingURL=reservas.service.js.map