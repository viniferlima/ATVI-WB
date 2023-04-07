import Cliente from "./cliente"
import Consumo from "./consumo"
import ProdutoServico from "./produtoServico"

export default class Empresa{
    private clientes: Array<Cliente>
    private produtosServicos: Array<ProdutoServico>
    private consumos: Array<Consumo>

    constructor(){
        this.clientes = []
        this.produtosServicos = []
        this.consumos = []
    }
    public getClientes(){
        return this.clientes
    }
    public getProdutosServicos(){
        return this.produtosServicos
    }
    public getConsumos(){
        return this.consumos
    }
}