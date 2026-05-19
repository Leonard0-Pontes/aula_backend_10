import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { ProdutosService } from './produtos.service';
export declare class ProdutosController {
    private readonly produtosService;
    constructor(produtosService: ProdutosService);
    listar(categoria?: string, limite?: number): {
        id: number;
        nome: string;
        categoria: string;
        preco: number;
        ativo: boolean;
    }[];
    buscarPorId(id: number): {
        id: number;
        nome: string;
        categoria: string;
        preco: number;
        ativo: boolean;
    };
    criar(body: CreateProdutoDto): {
        id: number;
        nome: string;
        categoria: string;
        preco: number;
        ativo: boolean;
    };
    atualizarCompleto(id: number, body: CreateProdutoDto): {
        id: number;
        nome: string;
        categoria: string;
        preco: number;
        ativo: boolean;
    };
    atualizarParcial(id: number, body: UpdateProdutoDto): {
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
