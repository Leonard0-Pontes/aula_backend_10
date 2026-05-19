import { ReservasService } from './reservas.service';
export declare class ReservasController {
    private readonly reservasService;
    constructor(reservasService: ReservasService);
    criar(body: {
        responsavel: string;
        sala: string;
        turno: string;
        integrantes: number;
    }): {
        id: number;
        responsavel: string;
        sala: "azul" | "verde" | "vermelha";
        turno: "manha" | "tarde" | "noite";
        integrantes: number;
        status: "ativa" | "confirmada" | "cancelada" | "encerrada";
    };
    atualizarParcial(id: string, body: {
        integrantes?: number;
        status?: string;
    }): void;
}
