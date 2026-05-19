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
exports.TarefasController = void 0;
const common_1 = require("@nestjs/common");
const tarefas_service_1 = require("./tarefas.service");
const create_tarefas_dto_1 = require("./dto/create-tarefas.dto");
const update_tarefas_dto_1 = require("./dto/update-tarefas.dto");
let TarefasController = class TarefasController {
    tarefasService;
    constructor(tarefasService) {
        this.tarefasService = tarefasService;
    }
    listar(status, prioridade) {
        return this.tarefasService.listar(status, prioridade);
    }
    listarTodos() {
        return this.tarefasService.listartodos();
    }
    buscarPorId(id) {
        return this.tarefasService.buscarPorId(id);
    }
    criar(body) {
        return this.tarefasService.criar(body);
    }
    atualizarCompleto(id, body) {
        return this.tarefasService.atualizarCompleto(id, body);
    }
    atualizarParcial(id, body) {
        return this.tarefasService.atualizarParcial(id, body);
    }
    remover(id) {
        return this.tarefasService.remover(id);
    }
};
exports.TarefasController = TarefasController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('status', new common_1.DefaultValuePipe('aberta'))),
    __param(1, (0, common_1.Query)('prioridade', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], TarefasController.prototype, "listar", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TarefasController.prototype, "listarTodos", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TarefasController.prototype, "buscarPorId", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tarefas_dto_1.CreateTarefasDto]),
    __metadata("design:returntype", void 0)
], TarefasController.prototype, "criar", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_tarefas_dto_1.CreateTarefasDto]),
    __metadata("design:returntype", void 0)
], TarefasController.prototype, "atualizarCompleto", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_tarefas_dto_1.UpdateTarefasDto]),
    __metadata("design:returntype", void 0)
], TarefasController.prototype, "atualizarParcial", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TarefasController.prototype, "remover", null);
exports.TarefasController = TarefasController = __decorate([
    (0, common_1.Controller)('tarefas'),
    __metadata("design:paramtypes", [tarefas_service_1.TarefasService])
], TarefasController);
//# sourceMappingURL=tarefas.controller.js.map