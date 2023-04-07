import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente\n`)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);

        const clienteEncontrado = this.clientes.find(cliente => cliente.getCpf().getValor() === valor)
        if (clienteEncontrado != null) {
            console.log(`\nEste cliente já está cadastrado no sistema! :(\n`)
        } else {
            let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
            let idade = this.entrada.receberNumero(`Por favor informe a idade do cliente: `)
            let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `)
            let genero = this.entrada.receberTexto(`Por favor informe o seu gênero (M ou F): `);
            let partesData = data.split('/')
            let ano = new Number(partesData[2].valueOf()).valueOf()
            let mes = new Number(partesData[1].valueOf()).valueOf()
            let dia = new Number(partesData[0].valueOf()).valueOf()
            let dataEmissao = new Date(ano, mes, dia)
            let cpf = new CPF(valor, dataEmissao)
            let cliente = new Cliente(nome, idade, cpf, genero)
            this.clientes.push(cliente)
            console.log(`\nCadastro de cliente concluído :)\n`)
        }
    }

    public atualizar(cpfClienteAlterado: string): void {
        const cliente = this.clientes.find(cliente => cliente.getCpf().getValor() === cpfClienteAlterado)

        if (cliente != null) {
            console.log(`\nInício da atualização do cadastro do cliente\n`);
            let idade = this.entrada.receberNumero(`Por favor informe a idade do cliente: `)
            let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
            let genero = this.entrada.receberTexto(`Por favor informe o gênero do cliente: `)
    
            cliente.setIdade(idade)
            cliente.setNome(nome)
            cliente.setGenero(genero)
            console.log(`\nAtualização do Cadastro do cliente concluído :)\n`)
        } else {
            console.log(`\nEste cliente não está cadastrado no sistema\n`);
        }
    }

    public deletar(cpf: string): void {
        const clienteCPF = this.clientes.findIndex((cliente) => cliente.getCpf().getValor() === cpf);
        if (clienteCPF !== -1) {
          this.clientes.splice(clienteCPF, 1);
          console.log('Cliente removido com sucesso!\n');
        } else {
          console.log(`Cliente com CPF ${cpf} não encontrado.\n`);
        }
    }

    public cadastroAutomatico(listaClientes: string[]): void {

        console.log(`\nInício do cadastro automático de clientes\n`)
        listaClientes.forEach(cliente => {
            let cpfValor = cliente.split('-')[0]?.trim()
            let data = cliente.split('-')[1]?.trim()
            let nome = cliente.split('-')[2]?.trim()
            let idade = cliente.split('-')[3]?.trim()
            let genero = cliente.split('-')[4]?.trim()

            // montando data de emissão do CPF
            let partesData = data.split('/')
            let ano = new Number(partesData[2].valueOf()).valueOf()
            let mes = new Number(partesData[1].valueOf()).valueOf()
            let dia = new Number(partesData[0].valueOf()).valueOf()
            let dataEmissao = new Date(ano, mes, dia)

            let novoCPF = new CPF(cpfValor, dataEmissao)
            let clienteCadastrado = new Cliente(nome, Number(idade), novoCPF, genero)
            this.clientes.push(clienteCadastrado)
        })
        console.log(`\nCadastro automático de clientes concluído :)\n`)

    }
}