import Entrada from "../io/entrada";
import ProdutoServico from "../modelo/produtoServico";
import Cadastro from "./cadastro";

export default class CadastroProdutoServico extends Cadastro {
    private produtosServicos: Array<ProdutoServico>
    private entrada: Entrada
    constructor(produtosServicos: Array<ProdutoServico>) {
        super()
        this.produtosServicos = produtosServicos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do produto/serviço\n`)
        let id = this.entrada.receberNumero(`Por favor informe o id do produto/serviço: `)

        const produtoServicoEncontrado = this.produtosServicos.find(ps => ps.getId() === id)
        if (produtoServicoEncontrado != null) {
            console.log(`\nEste produto/serviço já está cadastrado no sistema! :(\n`)
        } else {
            let nome = this.entrada.receberTexto(`Por favor informe o nome do produto/serviço: `)
            let tipo = this.entrada.receberTexto(`Por favor informe o tipo (produto ou serviço): `)
            let valor = this.entrada.receberNumero(`Por favor informe o valor do produto/serviço: `);
            let genero = this.entrada.receberTexto(`Por favor informe genero do produto/serviço: `);
            let produtoServico = new ProdutoServico(id, nome, tipo, valor, genero)
            this.produtosServicos.push(produtoServico)
            console.log(`\nCadastro de produto/serviço concluído :)\n`)
        }
    }

    public atualizar(idProdutoServicoAlterado: number): void {

        const produtoServico = this.produtosServicos.find(ps => ps.getId() === idProdutoServicoAlterado);

        if (produtoServico != null) {
            console.log(`\nInício da atualização do cadastro do produto/serviço`);
            let nome = this.entrada.receberTexto(`Por favor informe o nome do produto/serviço: `)
            let genero = this.entrada.receberTexto(`Por favor informe o genero do produto/serviço: `)
            let valor = this.entrada.receberNumero(`Por favor informe o valor do produto/serviço: `)
            let tipo = this.entrada.receberTexto(`Por favor informe o tipoo do produto/serviço ('produto' ou 'serviço'): `)

            produtoServico.setNome(nome)
            produtoServico.setGenero(genero)
            produtoServico.setValor(valor)
            produtoServico.setTipo(tipo)
            console.log(`\nAtualização do Cadastro do produto/serviço concluído :)\n`)
        } else {
            console.log(`\nEste produto/serviço não está cadastrado no sistema`);
        }
    }

    public deletar(id: number): void {
        const idProdutoServico = this.produtosServicos.findIndex((produtoServico) => produtoServico.getId() === id);
        if (idProdutoServico !== -1) {
          this.produtosServicos.splice(idProdutoServico, 1);
          console.log('Produto/Serviço removido com sucesso!\n');
        } else {
          console.log(`Produto/Serviço com ID ${idProdutoServico} não encontrado.\n`);
        }
    }

    public cadastroAutomatico(listaProdutosServicos: string[]): void {
        console.log(`\nInício do cadastro automático de produtos/serviços\n`)
        listaProdutosServicos.forEach(ps => {
            let nome = ps.split('-')[0]?.trim()
            let tipo = ps.split('-')[1]?.trim()
            let valor = ps.split('-')[2]?.trim()
            let genero = ps.split('-')[3]?.trim()

            let psCadastrado = new ProdutoServico(Math.floor(Math.random() * 100), nome, tipo, Number(valor), genero)
            this.produtosServicos.push(psCadastrado)
        })
        console.log(`\nCadastro automático de produtos/serviços concluído :)\n`)
    }
}