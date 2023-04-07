import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroConsumo from "../negocio/cadastroConsumo";
import CadastroProdutoServico from "../negocio/cadastroProdutoServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemConsumos from "../negocio/listagemConsumos";
import ListagemProdutosServicos from "../negocio/listagemProdutosServicos";
import * as fs from 'fs';


console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true
let jaFezCadastroAutomaticoDeClientes = false;
let jaFezCadastroAutomaticoDeProdutosServicos = false;

while (execucao) {
    console.log(`Legenda de operações:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Atualizar cliente`)
    console.log(`4 - Deletar cliente`)
    console.log(`5 - Cadastrar produto/serviço`);
    console.log(`6 - Listar todos os produtos/serviços`);
    console.log(`7 - Atualizar produto/serviço`)
    console.log(`8 - Deletar produto/serviço`)
    console.log(`9 - Registrar consumo`)
    console.log(`10 - Deletar consumo`)
    console.log(`11 - Lista todos os consumos`)
    console.log(`12 - Lista dos 10 clientes que mais consumiram produtos/serviços por quantidade`)
    console.log(`13 - Lista dos clientes por gênero`)
    console.log(`14 - Lista dos produtos/serviços mais consumidos`)
    console.log(`15 - Lista dos produtos/serviços mais consumidos por gênero`)
    console.log(`16 - Lista dos 10 clientes menos consumidores`)
    console.log(`17 - Lista dos 5 clientes mais consumidores, em valor`)
    console.log(`18 - Cadastro automático de clientes (30 registros)`)
    console.log(`19 - Cadastro automático de produtos/serviços (20 registros)`)
    console.log(`----------------------------`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastroCliente = new CadastroCliente(empresa.getClientes())
            cadastroCliente.cadastrar()
            break;
        case 2:
            let listagemClientes = new ListagemClientes(empresa.getClientes())
            listagemClientes.listar()
            break;
        case 3:
            let atualizacaoCliente = new CadastroCliente(empresa.getClientes())
            let cpfClienteAlterado = entrada.receberTexto(`Por favor, digite o CPF do cliente que será alterado: `)
            atualizacaoCliente.atualizar(cpfClienteAlterado);
            break;
        case 4:
            let delecaoCliente = new CadastroCliente(empresa.getClientes())
            let cpfClienteDeletado = entrada.receberTexto(`Por favor, digite o CPF do cliente que será deletado: `)
            delecaoCliente.deletar(cpfClienteDeletado);
            break;
        case 5:
            let cadastroProduto = new CadastroProdutoServico(empresa.getProdutosServicos())
            cadastroProduto.cadastrar()
            break;
        case 6:
            let listagemProdutos = new ListagemProdutosServicos(empresa.getProdutosServicos())
            listagemProdutos.listar()
            break;
        case 7:
            let atualizacaoProduto = new CadastroProdutoServico(empresa.getProdutosServicos())
            let idProdutoAlterado = entrada.receberNumero(`Por favor, digite o ID do produto que será alterado: `)
            atualizacaoProduto.atualizar(idProdutoAlterado);
            break;
        case 8:
            let delecaoProduto = new CadastroProdutoServico(empresa.getProdutosServicos())
            let idProdutoDeletado = entrada.receberNumero(`Por favor, digite o ID do produto que será deletado: `)
            delecaoProduto.deletar(idProdutoDeletado);
            break;
        case 9:
            let registrarConsumo = new CadastroConsumo(empresa.getClientes(), empresa.getProdutosServicos(), empresa.getConsumos())
            registrarConsumo.registrarConsumo();
            break;
        case 10:
            let deletarConsumo = new CadastroConsumo(empresa.getClientes(), empresa.getProdutosServicos(), empresa.getConsumos())
            let cpfCliente = entrada.receberTexto(`Por favor, digite o CPF do cliente que realizou a compra: `)
            deletarConsumo.deletar(cpfCliente);
            break;
        case 11:
            let listagemConsumos = new ListagemConsumos(empresa.getConsumos())
            listagemConsumos.listar()
            break;
        case 12:
            let listagemDosDezClientesMaisConsumidores = new ListagemClientes(empresa.getClientes())
            listagemDosDezClientesMaisConsumidores.listarDezClientesMaisConsumidores()
            break;
        case 13:
            let listagemDosClientesPorGenero = new ListagemClientes(empresa.getClientes())
            listagemDosClientesPorGenero.listarClientesPorGenero()
            break;
        case 14:
            let listagemDosProdutosServicosMaisConsumidos = new ListagemProdutosServicos(empresa.getProdutosServicos())
            listagemDosProdutosServicosMaisConsumidos.listarOsProdutosServicosMaisConsumidos()
            break;
        case 15:
            let listagemDosProdutosServicosMaisConsumidosPorGenero = new ListagemProdutosServicos(empresa.getProdutosServicos())
            listagemDosProdutosServicosMaisConsumidosPorGenero.listarOsProdutosServicosMaisConsumidosPorGenero()
            break;
        case 16:
            let listagemDosDezClientesMenosConsumidores = new ListagemClientes(empresa.getClientes())
            listagemDosDezClientesMenosConsumidores.listarOsDezClientesMenosConsumidores()
            break;
        case 17:
            let listagemDosCincoClientesMaisConsumidoresEmValor = new ListagemClientes(empresa.getClientes())
            listagemDosCincoClientesMaisConsumidoresEmValor.listarOsCincoClientesMaisConsumidoresEmValor()
            break;
        case 18:
            if (jaFezCadastroAutomaticoDeClientes) {
                console.log('\nO cadastro automático de clientes só pode ser feito uma única vez !!!\n')
            } else {
                const clientesParaCadastrar = fs.readFileSync('src/dados/clientes.txt', 'utf-8');
                const listaClientes = clientesParaCadastrar.split('\r\n')
                let cadastroAutomaticoDeClientes = new CadastroCliente(empresa.getClientes())
                cadastroAutomaticoDeClientes.cadastroAutomatico(listaClientes)
                jaFezCadastroAutomaticoDeClientes = true;
            }
            break;
        case 19:
            if (jaFezCadastroAutomaticoDeProdutosServicos) {
                console.log('\nO cadastro automático de produtos/serviços só pode ser feito uma única vez !!!\n')
            } else {
                const produtosServicosParaCadastrar = fs.readFileSync('src/dados/produtosServicos.txt', 'utf-8');
                const listaProdutosServicos = produtosServicosParaCadastrar.split('\r\n')
                let cadastroAutomaticoDeProdutosServicos = new CadastroProdutoServico(empresa.getProdutosServicos())
                cadastroAutomaticoDeProdutosServicos.cadastroAutomatico(listaProdutosServicos)
            }
            break;
        case 0:
            execucao = false
            console.log(`Até mais!`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}