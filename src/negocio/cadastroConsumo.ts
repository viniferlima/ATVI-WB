import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import Consumo from "../modelo/consumo"
import ProdutoServico from "../modelo/produtoServico"

export default class CadastroConsumo {
    private clientes: Array<Cliente>
    private produtosServicos: Array<ProdutoServico>
    private consumos: Array<Consumo>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>, produtosServicos:  Array<ProdutoServico>, consumos: Array<Consumo>) {
        this.clientes = clientes
        this.produtosServicos = produtosServicos
        this.consumos = consumos

        this.entrada = new Entrada()
    }

    registrarConsumo(): void {
        console.log(`\nInício do cadastro de consumo\n`);
        const id = this.entrada.receberNumero('Digite o ID da compra: ');

        const cpf = this.entrada.receberTexto('Digite o CPF do cliente que realizou a compra: ');
        const cliente = this.clientes.find((cliente) => cliente.getCpf().getValor() === cpf);
    
        if (!cliente) {
          console.log(`Cliente com CPF '${cpf}' não encontrado`);
          return;
        }
    
        const produtosServicos: ProdutoServico[] = [];
        let somaValorTotal: number = 0
        while (true) {
          const nomeProdutoServico = this.entrada.receberTexto('Digite o nome do produto/serviço adquirido (ou digite "fim" para encerrar a lista de consumo): ');
    
          if (nomeProdutoServico === 'fim') {
            break;
          }
    
          const produtoServico = this.produtosServicos.find((produto) => produto.getNome().toLocaleLowerCase() == nomeProdutoServico.toLocaleLowerCase());
          if (!produtoServico) {
            console.log(`Produto/Serviço '${nomeProdutoServico}' não encontrado`);
            continue;
          }

          const quantidade = this.entrada.receberNumero('Digite a quantidade do produto/serviço adquirido: ');

          somaValorTotal += produtoServico.getValor() * quantidade

          cliente.totalConsumidoEmQuantidade += cliente.totalConsumidoEmQuantidade + quantidade
          cliente.totalConsumidoEmDinheiro += cliente.totalConsumidoEmDinheiro + (produtoServico.valor * quantidade)
          produtoServico.quantidadeTotalConsumida = produtoServico.getQuantidadeTotalConsumida() + quantidade;
          produtoServico.quantidade = quantidade
          produtosServicos.push(produtoServico);
        }
    
        const consumo = new Consumo(id, cliente, produtosServicos, somaValorTotal, new Date);
        this.consumos.push(consumo)
        console.log('Consumo registrado com sucesso');
    }

    public deletar(cpf: string): void {
      const consumo = this.consumos.findIndex((consumo) => consumo.getCliente().getCpf().getValor() === cpf);
      if (consumo !== -1) {
        this.consumos.splice(consumo, 1);
        console.log('Consumo removido com sucesso!\n');
      } else {
        console.log(`\nA compra com CPF ${cpf} não foi encontrada.\n`);
      }
  }
}