type Reserva = {
    id: number;
    responsavel: string;
    sala: 'azul' | 'verde' | 'vermelha';
    turno: 'manha' | 'tarde' | 'noite';
    integrantes: number;
    status: 'ativa' | 'confirmada' | 'cancelada' | 'encerrada';
};
export declare class ReservasService {
    private reservas;
    buscarPorId(id: number): Reserva;
    criar(dados: {
        responsavel: string;
        sala: 'azul' | 'verde' | 'vermelha';
        turno: 'manha' | 'tarde' | 'noite';
        integrantes: number;
    }): Reserva;
    atualizarParcial(id: number, dados: {
        status?: 'ativa' | 'confirmada' | 'cancelada' | 'encerrada';
        integrantes?: number;
    }): Reserva;
}
export {};
