import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
type Produto = {
    id: number;
    nome: string;
    categoria: string;
    preco: number;
    ativo: boolean;
};
export declare class ProdutosService {
    private produtos;
    listar(categoria?: string, limite?: number): Produto[];
    buscarPorId(id: number): Produto;
    criar(dados: CreateProdutoDto): Produto;
    atualizarCompleto(id: number, dados: CreateProdutoDto): Produto;
    atualizarParcial(id: number, dados: UpdateProdutoDto): {
        nome: string;
        categoria: string;
        preco: number;
        ativo: boolean;
        id: number;
    };
    remover(id: number): {
        mensagem: string;
    };
}
export {};
