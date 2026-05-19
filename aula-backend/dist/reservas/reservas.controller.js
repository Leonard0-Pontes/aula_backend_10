"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservasController = void 0;
const common_1 = require("@nestjs/common");
const reservas_service_1 = require("./reservas.service");
let ReservasController = class ReservasController {
    reservasService;
    constructor(reservasService) {
        this.reservasService = reservasService;
    }
    criar(body) {
        if (!body.responsavel ||
            !body.sala ||
            !body.turno ||
            !body.integrantes === undefined) {
            throw new common_1.BadRequestException('Todos os campos são obrigatórios');
        }
        if (typeof body.integrantes !== 'number' ||
            !Number.isInteger(body.integrantes)) {
            throw new common_1.BadRequestException('Integrantes deve ser um número inteiro');
        }
        if (body.integrantes < 1 || body.integrantes > 6) {
            throw new common_1.BadRequestException('Integrantes deve ser entre 1 e 6');
        }
        const salasPermitidas = ['azul', 'verde', 'vermelha'];
        if (!salasPermitidas.includes(body.sala)) {
            throw new common_1.BadRequestException('Sala não permitida.');
        }
        const turnosPermitidos = ['manha', 'tarde', 'noite'];
        if (!turnosPermitidos.includes(body.turno)) {
            throw new common_1.BadRequestException('Turno não permitido.');
        }
        return this.reservasService.criar(body);
    }
    atualizarParcial(id, body) {
        const idNumero = Number(id);
        if (Number.isNaN(idNumero)) {
            throw new common_1.BadRequestException('ID deve ser um número');
        }
        if (Object.keys(body).length == 0) {
            throw new common_1.BadRequestException('Pelo menos um campo deve ser fornecido para atualização');
        }
    }
};
exports.ReservasController = ReservasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReservasController.prototype, "criar", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReservasController.prototype, "atualizarParcial", null);
exports.ReservasController = ReservasController = __decorate([
    (0, common_1.Controller)('reservas'),
    __metadata("design:paramtypes", [reservas_service_1.ReservasService])
], ReservasController);
//# sourceMappingURL=reservas.controller.js.map