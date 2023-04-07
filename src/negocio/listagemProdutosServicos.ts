import ProdutoServico from "../modelo/produtoServico";
import Listagem from "./listagem";

export default class ListagemProdutosServicos extends Listagem {
    private produtosServicos: Array<ProdutoServico>
    constructor(produtos: Array<ProdutoServico>) {
        super()
        this.produtosServicos = produtos;
    }

    public listar(): void {
        console.log(`\nLista de todos os produtos/serviços:\n`);
        this.produtosServicos.forEach(produto => {
            console.log(`ID: ` + produto.getId());
            console.log(`Nome: ` + produto.getNome());
            console.log(`Tipo: ` + produto.getTipo());
            console.log(`Valor (R$): ` + produto.getValor());
            console.log(`Gênero: ` + produto.getGenero());
            console.log(`Quantidade consumida: ` + produto.getQuantidadeTotalConsumida());
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }

    public listarOsProdutosServicosMaisConsumidos(): void {
        console.log(`\nLista dos produtos/serviços mais consumidos:\n`);

        const produtosServicosMaisConsumidos = this.produtosServicos.sort((a, b) => b.getQuantidadeTotalConsumida() - a.getQuantidadeTotalConsumida()).slice(0, this.produtosServicos.length);
        
        for (let index = 0; index < produtosServicosMaisConsumidos.length; index++) {
            console.log(`${index + 1}º - ${produtosServicosMaisConsumidos[index].getNome()} - ${produtosServicosMaisConsumidos[index].getQuantidadeTotalConsumida()} Un.\n`);
        }
    }

    public listarOsProdutosServicosMaisConsumidosPorGenero(): void {
        console.log(`\nLista dos produtos/serviços mais consumidos por gênero:\n`);
        const produtosPorGenero: Map<string, ProdutoServico[]> = new Map();
      
        // Agrupando produtos por gênero
        this.produtosServicos.forEach((ps) => {
          const genero = ps.getGenero();
          if (!produtosPorGenero.has(genero)) {
            produtosPorGenero.set(genero, []);
          }
          produtosPorGenero.get(genero)?.push(ps);
        });
      
        // Ordenando produtos por quantidade
        produtosPorGenero.forEach((produtos, genero) => {
          produtos.sort((produtoA, produtoB) => {
            const quantidadeA = produtoA.getQuantidadeTotalConsumida();
            const quantidadeB = produtoB.getQuantidadeTotalConsumida();
            return quantidadeB - quantidadeA;
          });
      
          console.log(`\nGênero: ${genero}`);
          produtos.forEach((produto, index) => {
            console.log(
              `${index + 1}. Produto: ${produto.getNome()} | Quantidade Total Consumida: ${
                produto.getQuantidadeTotalConsumida()} 
                | Tipo: ${produto.getTipo()}`
            );
          });
        });
    }
}