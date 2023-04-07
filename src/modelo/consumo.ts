import Cliente from "./cliente";
import ProdutoServico from "./produtoServico";

export default class Consumo {
    public id: number
    public cliente: Cliente;
    public produtosServicos: Array<ProdutoServico>;
    public valorTotal: number;
    public data: Date

    constructor(id: number, cliente: Cliente, produtosServicos: Array<ProdutoServico>, valorTotal: number, data: Date) {
        this.id = id
        this.cliente = cliente
        this.produtosServicos = produtosServicos
        this.valorTotal = valorTotal;
        this.data = data
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number) {
        this.id = id;
    }

    public getCliente(): Cliente {
        return this.cliente;
    }

    public setCliente(cliente: Cliente) {
        this.cliente = cliente;
    }

    public getProdutosServicos(): Array<ProdutoServico> {
        return this.produtosServicos;
    }

    public setProdutoServico(produtosServicos: Array<ProdutoServico>) {
        this.produtosServicos = produtosServicos;
    }

    public getValorTotal(): number {
        return this.valorTotal;
    }

    public setValorTotal(valorTotal: number) {
        this.valorTotal = valorTotal;
    }

    public getData(): Date {
        return this.data;
    }

    public set setData(data: Date) {
        this.data = data;
    }
  }
  