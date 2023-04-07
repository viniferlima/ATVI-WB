import Cliente from "../modelo/cliente";
import ProdutoServico from "../modelo/produtoServico";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:\n`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Idade: ` + cliente.idade);
            console.log(`Gênero: ` + cliente.genero);
            console.log(`CPF: ` + cliente.getCpf().getValor());
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }

    public listarDezClientesMaisConsumidores():  void {
        console.log(`\nLista dos 10 clientes que mais consumiram produtos/serviços por quantidade:\n`);

        interface topDez {nome: string; quantidadeConsumida: number;}

        let listaDezClientesMaisConsumidores: topDez[] = []

        this.clientes.forEach(cliente => {
            let nomeDoCliente: string = cliente.getNome()
            let qtdConsumida: number = cliente.getTotalConsumidoEmQuantidade()

            const objeto: topDez = {
                nome: nomeDoCliente,
                quantidadeConsumida: qtdConsumida
            };

            listaDezClientesMaisConsumidores.push(objeto)
        })

        listaDezClientesMaisConsumidores = listaDezClientesMaisConsumidores.sort((a, b) => b.quantidadeConsumida - a.quantidadeConsumida).slice(0, 10);
        
        for (let index = 0; index < listaDezClientesMaisConsumidores.length; index++) {
            console.log(index + 1 + `º - ` + `Nome: ` + listaDezClientesMaisConsumidores[index].nome + `\n`);
        }
        console.log(`\n`);
    }

    public listarClientesPorGenero():  void {
        console.log(`\nLista dos clientes por gênero:\n`);
        const clientesHomens = this.clientes.filter(cliente => cliente.getGenero() == 'M')
        const clientesMulheres = this.clientes.filter(cliente => cliente.getGenero() == 'F')

        if (clientesHomens.length > 0) {
            console.log(`**Lista dos clientes do gênero masculino:**\n`);
            clientesHomens.forEach(homem => {
                console.log(homem.getNome() + `\n`);
            });
        } else {
            console.log(`Não existem homens na lista\n`);
        }

        console.log(`--------------------------------------`);

        if (clientesMulheres.length > 0) {
            console.log(`**Lista dos clientes do gênero feminino:**\n`);
            clientesMulheres.forEach(mulher => {
                console.log(mulher.getNome() + `\n`);
            });
        } else {
            console.log(`Não existem homens na lista\n`);
        }
        console.log(`\n`);
    }

    public listarOsDezClientesMenosConsumidores(): void {
        console.log(`\nLista dos 10 clientes menos consumidores:\n`);
        let i = 1;
        const dezClientesMenosConsumidores = this.clientes.sort((a, b) => a.getTotalConsumidoEmQuantidade() - b.getTotalConsumidoEmQuantidade()).slice(0, 10);

        dezClientesMenosConsumidores.forEach(cliente => {
            console.log(`${i} - ${cliente.getNome()} - Quantidade: ${cliente.getTotalConsumidoEmQuantidade()}`);
            i++
        });
    }

    public listarOsCincoClientesMaisConsumidoresEmValor(): void {
        console.log(`\nLista dos 5 clientes mais consumidores, em valor:\n`);
        let i = 1;
        const cincoClientesMaisConsumidoresEmValor = this.clientes.sort((a, b) => b.getTotalConsumidoEmDinheiro() - a.getTotalConsumidoEmQuantidade()).slice(0, 5);

        cincoClientesMaisConsumidoresEmValor.forEach(cliente => {
            console.log(`${i} - ${cliente.getNome()} - Valor (R$): ${cliente.getTotalConsumidoEmDinheiro()}`);
            i++
        });
    }
}